// Serverless endpoint to query GA4 Data API and return monthly/yearly pageviews
import { JWT } from 'google-auth-library';

export default async function handler(req, res) {
  try {
    let propertyId = process.env.GA_PROPERTY_ID || '';
    let saB64 = process.env.GA_SERVICE_ACCOUNT || '';

    // Sanitize accidental interactive prefixes introduced by CLI (e.g. "yes\n" or "no\n")
    propertyId = String(propertyId).replace(/^(yes|no)\\s*\\n?/i, '').trim();
    saB64 = String(saB64).replace(/^(yes|no)\\s*\\n?/i, '').replace(/\\r/g, '').trim();

    if (!propertyId || !saB64) {
      return res.status(500).json({ error: 'GA_PROPERTY_ID or GA_SERVICE_ACCOUNT not configured' });
    }

    let credentials;
    try {
      // Accept either raw JSON or base64-encoded JSON
      if (saB64.trim().startsWith('{')) {
        credentials = JSON.parse(saB64);
      } else {
        try {
          credentials = JSON.parse(Buffer.from(saB64, 'base64').toString('utf8'));
        } catch (innerErr) {
          // Recovery heuristics for corrupted base64 values (e.g. accidental prefixes or shifted data)
          const idx = saB64.indexOf('ewog');
          if (idx > 0) {
            try {
              credentials = JSON.parse(Buffer.from(saB64.slice(idx), 'base64').toString('utf8'));
            } catch (e2) {
              throw innerErr;
            }
          } else {
            // try removing literal backslash-n sequences and re-decode
            const cleaned = saB64.replace(/\\\\n/g, '').replace(/\\n/g, '');
            credentials = JSON.parse(Buffer.from(cleaned, 'base64').toString('utf8'));
          }
        }
      }
    } catch (e) {
      console.error('Failed to parse GA_SERVICE_ACCOUNT (first 120 chars):', String(saB64).slice(0, 120));
      throw new Error('Invalid GA_SERVICE_ACCOUNT: unable to parse service account JSON');
    }
    const client = new JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
    });

    const getViews = async (days) => {
      const url = `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`;
      const body = {
        dateRanges: [{ startDate: `${days}daysAgo`, endDate: 'today' }],
        metrics: [{ name: 'screenPageViews' }],
      };

      const tokenResponse = await client.getAccessToken();
      const token = tokenResponse && tokenResponse.token ? tokenResponse.token : tokenResponse;

      const r = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!r.ok) {
        const t = await r.text();
        throw new Error(`API error ${r.status}: ${t}`);
      }

      const data = await r.json();
      const value = (data.totals && data.totals[0]?.metricValues?.[0]?.value) || (data.rows && data.rows[0]?.metricValues?.[0]?.value) || '0';
      return Number(value);
    };

    const [monthlyViews, yearlyViews] = await Promise.all([getViews(30), getViews(365)]);

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=60');
    return res.json({ monthlyViews, yearlyViews });
  } catch (err) {
    console.error('Analytics error', err);
    return res.status(500).json({ error: 'Failed to query analytics', detail: err.message });
  }
};

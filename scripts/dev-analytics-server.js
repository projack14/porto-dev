import http from 'http';
import { parse } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
// Prefer CommonJS variant for local dev when project uses ESM
const handler = require('../api/analytics/index.cjs');

const port = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  const { pathname } = parse(req.url || '');
  // simple CORS for local dev
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (pathname === '/api/analytics') {
    try {
      handler(req, res);
    } catch (err) {
      console.error('Handler error', err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'handler exception' }));
    }
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not found');
});

server.listen(port, () => {
  console.log(`Dev analytics server listening on http://localhost:${port}`);
});

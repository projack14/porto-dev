# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## Menampilkan jumlah pengunjung (Analytics)

Proyek ini menyertakan endpoint serverless di `api/analytics` yang mengambil data pageview dari Google Analytics 4 (GA4) menggunakan Analytics Data API.

Langkah singkat untuk mengaktifkan:

- Buat Google Cloud Service Account, berikan akses ke Analytics Data API, dan unduh key JSON.
- Ambil `property id` GA4 Anda (angka) dan set sebagai env var `GA_PROPERTY_ID`.
- Set env var `GA_SERVICE_ACCOUNT` menjadi base64 dari file JSON service account. Contoh di macOS:

```bash
base64 key.json > key.b64
export GA_SERVICE_ACCOUNT=$(cat key.b64)
export GA_PROPERTY_ID=YOUR_GA4_PROPERTY_ID
```

- Deploy ke penyedia serverless (Vercel, Netlify, dll.) dan atur `GA_SERVICE_ACCOUNT` (base64) dan `GA_PROPERTY_ID` pada pengaturan environment variables.
- Setelah terpasang, komponen `Hero` akan melakukan request ke `/api/analytics` dan menampilkan `This month` dan `This year` views.

Catatan: Karena Analytics Data API membutuhkan kredensial, endpoint diimplementasikan server-side (dalam `api/analytics`). Jangan meletakkan JSON key langsung di client.
You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

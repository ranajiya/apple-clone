// Previously wriiten in vite.config.js
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/', 
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [react()],
    base: command === 'build' ? '/apple-clone/' : '/', // Use '/apple-clone/' only in production
  };
});

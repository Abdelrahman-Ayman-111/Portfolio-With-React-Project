import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio-With-React-Project/',
  plugins: [react()],
  server: {
    port: 5174,
  },
});

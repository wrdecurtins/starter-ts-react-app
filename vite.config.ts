import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ReactSWC from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ReactSWC()],
});

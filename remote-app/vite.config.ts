// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remoteApp',
      filename: 'remoteEntry.js',
      exposes: {
        './RemoteComponent': './src/RemoteComponent',
        './Industries': './src/components/industries/Industries',
        './Channel': './src/components/channel/Channel',
        './Companies': './src/components/companies/companies',
      },
      shared: ['react', 'react-dom'],
    }),
  ],

  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});

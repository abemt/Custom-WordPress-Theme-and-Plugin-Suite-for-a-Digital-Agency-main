import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          input: {
            main: path.resolve(__dirname, 'index.html'),
            'projects/wp-react-portal/index': path.resolve(__dirname, 'projects/wp-react-portal/index.html'),
            'projects/woo-react-spa/index': path.resolve(__dirname, 'projects/woo-react-spa/index.html'),
            'projects/pressspeed-plugin/index': path.resolve(__dirname, 'projects/pressspeed-plugin/index.html'),
            'projects/acme-blocks/index': path.resolve(__dirname, 'projects/acme-blocks/index.html'),
            'projects/flexpress-theme/index': path.resolve(__dirname, 'projects/flexpress-theme/index.html'),
            'projects/wp-eventhub/index': path.resolve(__dirname, 'projects/wp-eventhub/index.html'),
          }
        }
      }
    };
});

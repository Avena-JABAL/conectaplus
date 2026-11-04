import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        cadastro: 'views/cadastro.html',
        login: 'views/login.html',
        logoff: 'views/logoff.html',
        main: 'views/main.html',
        recuperarSenha: 'views/recuperar-senha.html',
        user: 'views/user.html',
      },
    },
  },
});
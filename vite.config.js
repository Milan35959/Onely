import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve:{
  //   alias:{
  //     '@components':Path.resolve(__dirname,'src/components'),
  //     '@pages':Path.resolve(__dirname,'src/components')
  //   }
  // }
})

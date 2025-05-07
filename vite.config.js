import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: 
  [
    vue(),
    Components({ 
      dirs: ['src/components', 'src/views'], // Specify the directories to scan for components
      extensions: ['vue'], // Specify the file extensions to scan for components
      base: "/vuejs",
     })
  ],

})

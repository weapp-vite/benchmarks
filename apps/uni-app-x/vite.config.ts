import uni from '@dcloudio/vite-plugin-uni'
import { defineConfig } from 'vite'

const uniPlugin = typeof uni === 'function' ? uni : uni.default

export default defineConfig({
  plugins: [uniPlugin()],
})

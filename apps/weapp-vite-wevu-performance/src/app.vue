<script setup lang="ts">
import autoRoutes from 'weapp-vite/auto-routes'

defineAppJson({
  pages: autoRoutes.pages,
  window: {
    navigationBarTitleText: 'weapp-vite wevu performance',
    navigationBarBackgroundColor: '#1f2937',
    navigationBarTextStyle: 'white',
  },
  sitemapLocation: 'sitemap.json',
})
</script>

<style>
page {
  color: #111827;
  background: #f7f7f8;
}
</style>

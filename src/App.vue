<template>
  <div id="app">
    <router-view/>
    <app-share></app-share>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppShare from './components/AppShare.vue'
  import AppFooter from './components/AppFooter.vue'

  export default {
    name: 'app',
    components: {
      'app-share': AppShare,
      'app-footer': AppFooter
    }
  }
</script>

<style>
</style>

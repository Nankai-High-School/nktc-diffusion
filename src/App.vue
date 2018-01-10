<template>
  <div id="app">
    <router-view/>
    <app-share></app-share>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Share from './components/Share.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'app',
    components: {
      'app-share': Share,
      'app-footer': Footer
    }
  }
</script>

<style>
</style>

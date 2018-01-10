<template>
  <div class="share">
    <div class="container">
      <h2>我想分享</h2>
      <p>通过链接分享：<a :href="shareLink">{{ shareLink }}</a></p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        shareLink: ''
      }
    },
    methods: {
      setShareInfo () {
        this.shareLink = window.location.href
      }
    },
    created () {
      this.setShareInfo()
    },
    watch: {
      '$route' (to, from) {
        this.setShareInfo()
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .share {
    background-color: #666;

    > .container {
      padding: 30px 20px;

      > h2 {
        margin-bottom: 20px;
        font-size: 2.5rem;
      }

      > p:last-child {
        margin: 0;
      }
    }
  }
</style>

<template>
  <main class="university-item">
    <div class="university-item-header">
      <div class="cover" v-bind:style="{ backgroundImage: 'url(' + university.cover + ')' }"></div>
      <transition
        name="mask"
        appear
      >
        <div class="mask"></div>
      </transition>
      <transition
        name="header"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        v-on:after-enter="showBody"
        appear
      >
        <div class="container">
          <h1>{{ university.name }}</h1>
        </div>
      </transition>
    </div>

    <div class="university-item-body">
      <transition
        name="list"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        appear
      >
        <div class="container" v-if="isShowBody">
          <div v-html="university.description"></div>
          <router-link :to="{ name: 'UniversityList'}">返回</router-link>
        </div>
      </transition>
    </div>
  </main>
</template>

<script>
  import universities from '@/universities.json'

  export default {
    data () {
      return {
        isShowBody: false,
        university: universities.find((university) => {
          return university.id === this.$route.params.id
        })
      }
    },
    methods: {
      showBody () {
        setTimeout(() => {
          this.isShowBody = true
        }, 0)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .university-item {
    > .university-item-header {
      min-height: 40vh;
      background-color: #444;

      // 使container充满
      display: flex;
      flex-direction: column;
      align-items: stretch;

      > .cover {
        // 作为封面
        position: absolute;
        top: 0;

        width: 100vw;
        height: 40vh;
        background-size: cover;
      }

      > .mask {
        // 作为遮罩
        position: absolute;
        top: 0;
        z-index: 1;

        width: 100vw;
        height: 40vh;

        background-color: #222;
        opacity: 0.2;
      }

      @keyframes maskEnter {
        from {
          opacity: 1;
        }

        to {
          opacity: 0.2;
        }
      }

      > .mask-enter-active {
        animation: maskEnter 2s;
      }

      @keyframes maskLeave {
        from {
          opacity: 0.2;
        }

        to {
          opacity: 1;
        }
      }

      > .mask-leave-active {
        animation: maskLeave 2s;
      }

      > .container {
        // 充满university-item-header
        flex-grow: 1;

        padding: 30px 20px;
        z-index: 2;

        // 使h1下对齐
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        > h1 {
          margin: 0;
          text-shadow: 1px 1px 2px #222;
        }
      }
    }

    > .university-item-body {
      min-height: 80vh;
      background-color: #555;

      > .container {
        padding: 30px 20px;
      }
    }
  }
</style>

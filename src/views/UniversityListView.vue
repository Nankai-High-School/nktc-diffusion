<template>
  <main class="university-list">
    <div class="university-list-header">
      <transition
        name="header"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        v-on:after-enter="showBody"
        appear
      >
        <div class="container">
          <h1>我想了解</h1>
        </div>
      </transition>
    </div>

    <div class="university-list-body">
      <transition
        name="list"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        appear
      >
        <div class="container" v-if="isShowBody">
          <ul>
            <li v-for="university in universities"><router-link :to="{ name: 'UniversityItem', params: { id: university.id }}">{{ university.name }}</router-link></li>
          </ul>
          <router-link :to="{ name: 'Home'}">返回</router-link>
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
        universities: universities
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
  .university-list {
    > .university-list-header {
      min-height: 20vh;
      background-color: #444;

      // 使container充满
      display: flex;
      flex-direction: column;
      align-items: stretch;

      > .container {
        // 充满university-list-header
        flex-grow: 1;

        padding: 30px 20px;

        // 使h1下对齐
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        > h1 {
          margin: 0;
        }
      }
    }

    > .university-list-body {
      min-height: 80vh;
      background-color: #555;

      > .container {
        padding: 30px 20px;
      }
    }
  }
</style>

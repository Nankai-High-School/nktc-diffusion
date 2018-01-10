<template>
  <main class="university-list">
    <div class="header">
      <transition
        name="header"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        v-on:before-enter="showBody"
        appear
      >
        <div class="container">
          <h1>我想了解</h1>
        </div>
      </transition>
    </div>

    <div class="body">
      <transition
        name="body"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        appear
      >
        <div class="container" v-if="isShowBody">
          <div class="search">
            <input v-model="keyword" type="search" class="form-control" placeholder="查找..." autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false">
          </div>

          <div class="row">
            <template v-for="university in universities">
              <div v-if="hide.indexOf(university.id) === -1" class="col col-lg-3 col-md-4 col-sm-6 col-12">
                <router-link :to="{ name: 'UniversityItem', params: { id: university.id }}" class="item">
                  <div class="cover" v-bind:style="{ backgroundImage: 'url(' + university.cover + ')' }"></div>
                  <div class="mask"></div>
                  <div class="body">
                    <h2 class="name">{{ university.name }}</h2>
                  </div>
                </router-link>
              </div>
            </template>
          </div>

          <div class="back"><router-link :to="{ name: 'Home'}">返回</router-link></div>
        </div>
      </transition>
    </div>
  </main>
</template>

<script>
  import universities from '@/../static/data/universities.json'

  export default {
    data () {
      return {
        isShowBody: false,
        universities: null,
        keyword: '',
        hide: []
      }
    },
    methods: {
      showBody () {
        setTimeout(() => {
          this.isShowBody = true
        }, 350)
      },
      search () {
        // @see https://cn.vuejs.org/v2/guide/computed.html#%E4%BE%A6%E5%90%AC%E5%99%A8
        // 执行搜索（低效率搜索:(）
        this.hide = []
        if (this.keyword) {
          for (let university of this.universities) {
            let show = false
            if (university.name.indexOf(this.keyword) >= 0) {
              show = true
            } else {
              for (let tag of university.tags) {
                if (tag === this.keyword) {
                  show = true
                  break
                }
              }
            }

            if (!show) {
              this.hide.push(university.id)
            }
          }
        }
      }
    },
    created () {
      // 读入数据
      this.universities = universities
      /*
      不要在universities上增加hide属性
      在进入详情页面并且返回列表页面后input会清空，但是列表会显示不起
      Vue会在每一次进入或者返回页面的时候重新渲染一次元素，所以每次进入列表都会调用import导入数据
      猜想：第一二次导入的是同一个对象，在第一次的对象上增加了hide属性，在第二次导入的时候hide属性没有消除
       */
    },
    watch: {
      keyword (value) {
        this.search()
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .university-list {
    > .header {
      min-height: 20vh;
      background-color: #444;

      // 使container充满
      display: flex;
      flex-direction: column;
      align-items: stretch;

      > .container {
        // 充满header
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

    > .body {
      min-height: 80vh;
      background-color: #555;

      > .container {
        padding: 30px 20px;

        > .search {
          input:focus {
            box-shadow: none;
            border: 1px solid #ced4da;
          }
        }

        > .row {
          > .col {
            padding: 20px 20px 0;

            .item {
              position: relative;
              min-height: 10rem;
              background-color: #444;
              text-decoration: none;

              // 使name充满
              display: flex;
              flex-direction: column;
              align-items: stretch;

              > .cover {
                // 作为封面
                position: absolute;
                top: 0;

                width: 100%;
                height: 100%;
                background-size: cover;
              }

              > .mask {
                // 作为遮罩
                position: absolute;
                top: 0;
                z-index: 1;

                width: 100%;
                height: 100%;

                background-color: #222;
                opacity: 0.2;
              }

              > .body {
                // 充满university-item-item
                flex-grow: 1;

                padding: 20px;
                z-index: 2;

                // 使h1下对齐
                display: flex;
                flex-direction: column;
                justify-content: flex-end;

                > h2 {
                  margin: 0;
                  font-size: 1.5rem;
                  text-shadow: 1px 1px 2px #222;
                }
              }
            }
          }
        }

        > .back {
          margin-top: 20px;
        }
      }
    }
  }
</style>

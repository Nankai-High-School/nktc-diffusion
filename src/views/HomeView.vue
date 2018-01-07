<template>
  <main class="home">
    <div class="slogen">
      <!--TODO full screen-->
      <canvas ref="background"></canvas>
      <div class="container">
        <transition
          name="first-slogen"
          enter-active-class="animated fadeInDownBig"
          leave-active-class="animated fadeOutUpBig"
          v-on:after-enter="showSecondSlogen"
          appear
        >
          <h1>相信</h1>
        </transition>
        <transition
          name="second-slogen"
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
          v-on:after-enter="showMoreIcon"
          appear
        >
          <h2 v-if="isShowSecondSlogen">传承的力量</h2>
        </transition>

        <transition name="more-icon" appear>
          <i v-if="isShowMoreIcon" class="fa fa-chevron-down" aria-hidden="true"></i>
        </transition>
      </div>
    </div>

    <div class="other">
      <div class="banner">
        <div class="container">
          <h3>2018</h3>
          <h1>热传递</h1>
          <h2>高校信息普及计划</h2>
          <h4><a href="#intro" @click="isShowIntro = !isShowIntro">什么是热传递？</a></h4>
          <transition
            name="intro"
          >
            <div class="intro" v-if="isShowIntro">
              <p>如果提前感受梦想与现实的差距，也许我们能更好的前行。</p>
              <p>这次，我们把梦想变成信息流，然后把更多的梦想变成现实。</p>
              <p>热传递计划是一个邀请已毕业南开中学学长学姐，回校交流的活动。</p>
              <p>我们相信梦想的力量，更相信传承的力量。</p>
              <p>聚是一团火，化作漫天星。</p>
            </div>
          </transition>
        </div>
      </div>

      <div class="university-list">
        <div class="container">
          <h2>我想了解</h2>
          <ul>
            <li>
              <router-link :to="{ name: 'UniversityItem', params: { name: 'pku' }}">北京大学</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'UniversityItem', params: { name: 'tsu' }}">清华大学</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'UniversityItem', params: { name: 'zju' }}">浙江大学</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'UniversityItem', params: { name: 'fdu' }}">复旦大学</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'UniversityItem', params: { name: 'ruc' }}">中国人民大学</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'UniversityItem', params: { name: 'sjtu' }}">上海交通大学</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'UniversityItem', params: { name: 'tju' }}">天津大学</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'UniversityItem', params: { name: 'nku' }}">南开大学</router-link>
            </li>
          </ul>
          <div class="more">
            <router-link :to="{ name: 'UniversityList'}">查看更多</router-link>
          </div>
        </div>
      </div>
      <div class="university-create">
        <div class="container">
          <h2>我想告诉</h2>
          <p>如果你想要跟学弟学妹们分享自己的学校，欢迎发送邮件到 <a href="mailto:haiqin.cui@nktry.com">haiqin.cui@nktry.com</a> 跟我们联系。</p>
          <p>如果您不方便使用邮箱，可以使用下方联系方式。</p>
          <address>
            Tel: <a href="tel:+8615822379150">+86 158 2237 9150</a> <br>
            QQ: 1779161430 <br>
            WeChat: lookas2001 <br>
          </address>
        </div>
      </div>
      <!--<app-share></app-share>-->
      <!--&lt;!&ndash;我要宣传&ndash;&gt;-->
      <!--<app-feedback></app-feedback>-->
    </div>
  </main>
</template>

<script>
  export default {
    data () {
      return {
        isShowSecondSlogen: false,
        isShowIntro: false,
        isShowMoreIcon: false
      }
    },
    methods: {
      showSecondSlogen () {
        setTimeout(() => {
          this.isShowSecondSlogen = true
        }, 500)
      },
      showMoreIcon () {
        setTimeout(() => {
          this.isShowMoreIcon = true
        }, 500)
      },
      showBackground () {
        // https://segmentfault.com/a/1190000009675230
        let el = this.$refs.background
        let ctx = el.getContext('2d')
        let mousePos = [0, 0]
        let nodes = []
        let edges = []

        let backgroundColor = '#222' // 背景颜色
        let nodeColor = '#999' // 点颜色
        let edgeColor = '#999' // 边颜色

        function step () { // 每帧重新绘制
          nodes.forEach(function (e) {
            if (e.drivenByMouse) {
              return
            }

            // 更新位置
            e.x += e.vx
            e.y += e.vy

            // 反弹
            function clamp (min, max, value) {
              if (value > max) {
                return max
              } else if (value < min) {
                return min
              } else {
                return value
              }
            }

            if (e.x <= 0 || e.x >= el.width) {
              e.vx *= -1
              e.x = clamp(0, el.width, e.x)
            }

            if (e.y <= 0 || e.y >= el.height) {
              e.vy *= -1
              e.y = clamp(0, el.height, e.y)
            }
          })

          // 第一个点作为鼠标的跟随点
          let easingFactor = 5.0  // 缓动因子
          nodes[0].x += (mousePos[0] - nodes[0].x) / easingFactor
          nodes[0].y += (mousePos[1] - nodes[0].y) / easingFactor

          render()
          window.requestAnimationFrame(step)
        }

        function render () {
          // 绘制
          ctx.fillStyle = backgroundColor
          ctx.fillRect(0, 0, el.width, el.height)

          let threshold = Math.sqrt(Math.pow((el.width), 2) + Math.pow((el.height), 2)) / 8
          edges.forEach(function (e) {
            let l = Math.sqrt(Math.pow((e.from.x - e.to.x), 2) + Math.pow((e.from.y - e.to.y), 2)) // 求边长

            if (l > threshold) {
              return
            }

            ctx.strokeStyle = edgeColor
            ctx.lineWidth = (1.0 - l / threshold) * 2.5
            ctx.globalAlpha = 1.0 - l / threshold
            ctx.beginPath()
            ctx.moveTo(e.from.x, e.from.y)
            ctx.lineTo(e.to.x, e.to.y)
            ctx.stroke()
          })
          ctx.globalAlpha = 1.0

          nodes.forEach(function (e) {
            if (e.drivenByMouse) {
              return
            }

            ctx.fillStyle = nodeColor
            ctx.beginPath()
            ctx.arc(e.x, e.y, e.radius, 0, 2 * Math.PI)
            ctx.fill()
          })
        }

        // 创建画布
        window.onresize = function () {
          el.width = parseFloat(window.getComputedStyle(el).getPropertyValue('width'))
          el.height = parseFloat(window.getComputedStyle(el).getPropertyValue('height'))

          if (nodes.length === 0) {
            // 创建点
            let nodeNum = Math.sqrt(Math.pow((el.width), 2) + Math.pow((el.height), 2)) / 10
            for (let i = 0; i < nodeNum; i++) {
              let node = {
                drivenByMouse: i === 0,
                x: Math.random() * el.width,
                y: Math.random() * el.height,
                vx: Math.random() * 1 - 0.5, // 速度 -0.5~0.5
                vy: Math.random() * 1 - 0.5,
                radius: Math.random() > 0.9 ? 3 + Math.random() * 3 : 1 + Math.random() * 3 // 点的大小
              }

              nodes.push(node)
            }

            // 创建边
            nodes.forEach(function (e) {
              nodes.forEach(function (e2) {
                if (e === e2) {
                  return
                }

                let edge = {
                  from: e,
                  to: e2
                }

                let ignore = false

                // 存在的边就不存了
                edges.forEach(function (e) {
                  if (e.from === edge.from & e.to === edge.to) {
                    ignore = true
                  }

                  if (e.to === edge.from & e.from === edge.to) {
                    ignore = true
                  }
                })

                if (!ignore) {
                  edges.push(edge)
                }
              })
            })
          }

          render()
        }

        window.onresize()

        window.onmousemove = function (e) {
          mousePos[0] = e.clientX
          mousePos[1] = e.clientY
        }

        window.requestAnimationFrame(step)
      }
    },
    components: {},
    mounted () {
      this.showBackground()
    },
    created () {
//      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
//      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .home {
    .slogen {
      height: 100vh;
      background-color: #222;

      > canvas {
        position: absolute;
        top: 0;
        z-index: 1;
        width: 100vw;
        height: 100vh;
      }

      > .container {
        display: flex;
        position: relative; // 使得z-index生效
        z-index: 2;
        flex-direction: column;
        padding: 20vh 10vw 10vh;
        height: 100vh;

        > h1 {
          font-size: 5rem;
        }

        > h2 {
          font-size: 2.5rem;
        }

        @keyframes moreIconEnter {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        > .more-icon-enter-active {
          animation: moreIconEnter 5s;
        }

        @keyframes moreIconLeave {
          to {
            opacity: 0;
          }
        }

        > .more-icon-leave-active {
          animation: moreIconEnter 5s;
        }

        @keyframes moreIconFlash {
          from, 50%, to {
            opacity: 1;
          }

          25%, 75% {
            opacity: 0.25;
          }
        }

        > i {
          position: absolute;
          bottom: 7.5vh;
          align-self: center;
          font-size: 2rem;
          animation-name: moreIconFlash;
          animation-duration: 10s;
          animation-iteration-count: infinite;
        }
      }
    }

    .banner {
      min-height: 90vh;
      background-color: #333;

      > .container {
        padding: 15vh 10vw 5vh;

        > h3 {
          margin-bottom: 0;
          font-size: 1.75rem;
        }

        > h1 {
          font-size: 5rem;
        }

        > h2 {
          font-size: 2.5rem;
        }

        > h4 {
          margin: 1rem 0 0.75rem;
          font-size: 1.25rem;
        }

        > .intro {
          p {
            margin-bottom: 0.5rem;
          }
        }

        @keyframes introEnter {
          from {
            opacity: 0;
            max-height: 0;
          }

          to {
            opacity: 1;
            max-height: 2000px;
          }
        }

        > .intro-enter-active {
          animation: introEnter 1s;
        }

        @keyframes introLeave {
          from {
            opacity: 1;
            max-height: 2000px;
          }

          to {
            opacity: 0;
            max-height: 0;
          }
        }

        > .intro-leave-active {
          animation: introLeave 1s;
        }

        /*.intro {*/
        /*background-color: #555;*/

        /*> .container {*/
        /*padding: 30px 20px;*/

        /*> h2 {*/
        /*font-size: 2.5rem;*/
        /*}*/
        /*}*/
        /*}*/
      }
    }

    .university-list {
      background-color: #444;

      > .container {
        padding: 30px 20px;

        > h2 {
          font-size: 2.5rem;
        }
      }
    }

    .university-create {
      background-color: #555;

      > .container {
        padding: 30px 20px;

        > h2 {
          font-size: 2.5rem;
        }
      }
    }
  }

  @keyframes test {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
</style>

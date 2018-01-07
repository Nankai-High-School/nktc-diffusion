<template>
  <main class="home">
    <div class="slogen">
      <div class="container">
        <h1>相信</h1>
        <h2>传承的力量</h2>
      </div>
    </div>
    <div class="banner">
      <div class="container">
        <h3>2018</h3>
        <h1>热传递</h1>
        <h2>高校信息普及计划</h2>
      </div>
    </div>
    <div class="university-list">
      <div class="container">
        <h2>我想了解</h2>
        <ul>
          <li><router-link :to="{ name: 'UniversityItem', params: { name: 'pku' }}">北京大学</router-link></li>
          <li>清华大学</li>
          <li>浙江大学</li>
          <li>复旦大学</li>
          <li>中国人民大学</li>
          <li>上海交通大学</li>
          <li>天津大学</li>
          <li>南开大学</li>
        </ul>
        <div class="more">
          <router-link :to="{ name: 'UniversityList'}">查看更多</router-link>
        </div>
      </div>
    </div>
    <div class="intro">
      <div class="container">
        <h2>什么是热传递</h2>
        <p>如果提前感受梦想与现实的差距，也许我们能更好的前行。</p>
        <p>这次，我们把梦想变成信息流，然后把更多的梦想变成现实。</p>
        <p>热传递计划是一个邀请已毕业南开中学学长学姐，回校交流的活动。</p>
        <p>我们相信梦想的力量，更相信传承的力量。</p>
        <p>聚是一团火，化作漫天星。</p>
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
    <app-share></app-share>
    <!--我要宣传-->
    <app-feedback></app-feedback>
  </main>
</template>

<script>
  export default {
    data () {
      return {
        isAuthed: true,
        data: {
          username: 'lookas2001',
          id: '1'
        }
      }
    },
    components: {}
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .home {
    > .slogen {
      height: 100vh;
      background-color: #888;

      > .container {
        padding: 20vh 10vw 0;

        > h1 {
          font-size: 5rem;
        }

        > h2 {
          font-size: 2.5rem;
        }
      }
    }

    > .banner {
      height: 90vh;
      background-color: #aaa;

      > .container {
        padding: 15vh 10vw 0;

        > h1 {
          font-size: 5rem;
        }

        > h2 {
          font-size: 2.5rem;
        }

        > h3 {
          margin-bottom: 0;
          font-size: 1.75rem;
        }
      }
    }

    > .university-list {
      background-color: #ccc;

      > .container {
        padding: 30px 20px;

        > h2 {
          font-size: 2.5rem;
        }
      }
    }

    > .intro {
      background-color: #ddd;

      > .container {
        padding: 30px 20px;

        > h2 {
          font-size: 2.5rem;
        }
      }
    }

    > .university-create {
      background-color: #eee;

      > .container {
        padding: 30px 20px;

        > h2 {
          font-size: 2.5rem;
        }
      }
    }
  }
</style>

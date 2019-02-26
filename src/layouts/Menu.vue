<template>
  <div class="container">
    <h1>{{h1Msg}}</h1>
    <div class="chapter-container">
      <div class="chapter">
        <h2>ch1: html</h2>
        <ol>
          <li>
            <router-link :to="{path: '/hello'}">hello world</router-link>
          </li>
        </ol>
      </div>
      <div class="chapter">
        <h2>ch2: css</h2>
        <ol>
          <li><router-link :to="{path: '/staycenter'}">居中</router-link></li>
          <li><router-link :to="{path: '/samehcols'}">多列等高</router-link></li>
          <li><router-link :to="{path: '/triangle'}">css实现三角形</router-link></li>
        </ol>
      </div>
      <div class="chapter">
        <h2>ch3: js</h2>
        <ol></ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      h1Msg: 'Menu'
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  height: 100%;
  h1 {
    margin-bottom: 20px;
    color: black;
  }
  .chapter-container {
    display: flex;
    .chapter {
      margin-left: 50px;
      flex: 1;
      h2 {
        margin-bottom: 20px;
        color: black;
      }
      a {
        color: blue;
      }
      background-color: white;
    }
  }
}
</style>

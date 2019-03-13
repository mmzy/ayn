<template>
  <div class="container">
    <h2>sleep {{sec}}s</h2>
    <div class="demo1">
      <p>方法一：promise</p>
      <input type="button" value="sleep1" class="btn" @click="sleep1"/>
    </div>
    <div class="demo2">
      <p>方法二：promise, async, await</p>
      <button class="btn" @click="sleep2">sleep2</button>
    </div>
    <div class="demo3">
      <p>方法三：generator, promise</p>
      <button class="btn" @click="sleep3">sleep3</button>
    </div>
    <div class="demo4">
      <p>方法四：伪死循环</p>
      <input type="button" value="sleep4" class="btn" @click="sleep4"/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sec: 3
    }
  },
  methods: {
    sleep1 () {
      this.promiseFunc().then((data) => {
        alert(data + '1')
      })
    },
    sleep2: async function () {
      let aa = await this.promiseFunc()
      alert(aa + '2')
    },
    sleep3: function () {
      this.generateFunc().next().value.then((data) => {
        alert(data + '3')
      })
    },
    sleep4 () {
      let startTime = new Date().getTime()
      let thisObj = this
      while (new Date().getTime() - startTime < thisObj.sec * 1000) {
        continue
      }
      alert(4)
    },
    promiseFunc () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('promise func')
        }, this.sec * 1000)
      })
    },
    generateFunc: function* () {
      yield this.promiseFunc()
      // return
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  position: relative;
  left: 100px;
  width: 1000px;
  height: 500px;
  text-align: left;
  border: solid 1px black;
  div {
    margin: 20px;
    .btn {
      width: 200px;
      height: 50px;
    }
  }
}
</style>

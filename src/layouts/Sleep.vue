<template>
  <div class="container">
    <h2>sleep {{sec}}s:</h2>
    <div class="demo1">
      <p>方法一：promise</p>
      <input type="button" value="sleep1" class="btn" @click="sleep1"/>
    </div>
    <div class="demo2">
      <p>方法二：promise, asyn, await</p>
      <button class="btn" @click="sleep2">sleep2</button>
    </div>
    <div class="demo3">
      <p>方法三：generate</p>
      <button class="btn" @click="sleep3">sleep3</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sec: 10
    }
  },
  methods: {
    sleep1 () {
      alert(1)
    },
    sleep2: function() {
      alert(2)
    },
    sleep3: function() {
      alert(3)
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
    margin: 50px;
    .btn {
      width: 200px;
      height: 50px;
    }
  }
}
</style>

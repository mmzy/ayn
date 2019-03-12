<template>
  <div class="container">
    <div class="container1">
      <div class="demo1">demo1: 水平居中</div>
    </div>
    <div class="container2">
      <div class="demo2">demo2: 绝对定位居中</div>
    </div>
    <div class="container3">
      <div class="demo3">demo3: 水平垂直居中一</div>
    </div>
    <div class="container4">
      <div class="demo4">demo4: 水平垂直居中二 transform</div>
    </div>
    <div class="container5">
      <div class="demo">demo5: 水平垂直居中三 flex </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.container {
  position: relative;
  left: 100px;
  width: 1100px;
  height: 350px;
  border: solid 1px black;
  .container1, .container2, .container3, .container4, .container5 {
    position: relative;
    float: left;
    margin-left: 10px;
    margin-top: 10px;
    width: 200px;
    height: 300px;
    background-color: gray;
  }
  .container1 {
    .demo1 {
      width: 100px;
      margin: 0 auto;
      background-color: rgba(200, 0, 0, 0.5);
    }
  }
  .container2 {
    .demo2 {
      position: absolute;
      margin: auto;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100px;
      height: 200px;
      background-color: rgba(0, 100, 0, 0.5);
    }
  }
  .container3 {
    .demo3 {
      position: relative; /* 相对定位或绝对定位均可 */
      width: 100px;
      height: 60px;
      top: 50%;
      left: 50%;
      margin: -30px 0 0 -50px;
      background-color: pink;
    }
  }
  .container4 {
    .demo4 {
      position: absolute; /* 相对定位或绝对定位均可 */
      width: 100px;
      height: 200px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: rgba(100, 100, 0, 0.5);
    }
  }
  .container5 {
    display: flex;
    justify-content: center;
    align-items: center;
    .demo {
      width: 100px;
      height: 100px;
      background-color: pink;
    }
  }
}
</style>

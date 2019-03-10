<template>
  <div class="container">
    <div class="demo-comm demo1">0.5px</div>
    <div class="demo-comm demo2">伪元素 + tansform: scaleY</div>
    <div class="demo-comm demo3">伪元素 + linear-gredient</div>
    <div class="demo-comm demo4"></div>
    <div class="demo-comm demo5"></div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.container {
  position: relative;
  left: 150px;
  width: 50%;
  height: 500px;
  border: solid 1px black;
  .demo-comm {
    margin: 20px 0 0 50px;
    width: 80%;
    height: 50px;
    background-color: pink;
  }
  .demo1 {
    border: solid 0.5px green;
  }
  .demo2::after {
    content: '';
    display: block;
    border-bottom: solid blue 1px;
    transform: scaleY(0.5);
  }
  .demo3::after {
    content: '';
    display: block;
    height: 1px;
    background-color: linear-gradient(0, #fff, #000);
  }
}
</style>

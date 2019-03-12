<template>
  <div class="container">
    <div class="demo-comm demo1">0.5px</div>
    <div class="demo-comm demo2">伪元素 + tansform: scaleY</div>
    <div class="demo-comm demo3">伪元素 + linear-gredient</div>
    <div class="demo-comm demo4">box-shadow</div>
    <div class="demo-comm demo5">svg; viewport动态缩放；。。。。。</div>
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
    background: -webkit-linear-gradient(top, #fff, #000); /* Safari 5.1 to 6.0 */
    background: -o-linear-gradient(top, #fff, #000); /* Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(top, #fff, #000); /* Firefox 3.6 to 15 */
    background: linear-gradient(top, #fff, #000);
  }
  .demo4 {
    box-shadow: 0 0 0 0.5px #000;
  }
}
</style>

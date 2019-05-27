<template>
  <div class="align-justify-container">
    <div class="demo demo1">
      <span>一、demo1</span> <span>使用</span> <span>text-align: justify</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.align-justify-container {
  position: absolute;
  top: 50px;
  left: 50px;
  width: 70%;
  height: 70%;
  .demo {
    width: 100%;
    height: 60px;
    background: lightgray;
    span{
      display: inline-block;
      width: 180px;
      height: 50px;
      line-height: 50px;
      border: solid 1px black;
    }
  }
  .demo1 {
    text-align: justify;
    text-align-last: justify;
    line-height: 0;
  }
}
</style>

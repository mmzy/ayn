<template>
<div class="container">
  <!-- 多列等高demo -->
  <div class="demo1">
    <div class="left">demo1---flex布局</div>
    <div class="middle">多列等高布局左<br/>多列等高布局左</div>
    <div class="right">多列等高布局右</div>
  </div>
  <div class="demo2">
    <div class="con1">
      <div class="con2">
        <div class="left">demo2---流体布局</div>
        <div class="middle">多列等高布局左<br/>多列等高布局左</div>
        <div class="right">多列等高布局右</div>
      </div>
    </div>
  </div>
  <div class="demo3">
    <div class="left common-item">demo3---使用内外边距相抵消，注意父元素设置 "overflow:hidden;"</div>
    <div class="middle common-item">多列等高布局左<br/>多列等高布局左</div>
    <div class="right common-item">多列等高布局右</div>
  </div>
  <div class="demo4">
    <div class="con1">
      <div class="left">demo4---边框模仿等高列</div>
      <div class="middle">多列等高布局左<br/>多列等高布局左</div>
      <div class="right">多列等高布局右</div>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@demo-margin-top: 20px;
@left-background-color: rgb(213, 213, 241);
@mid-background-color: rgba(200, 0, 0, 0.5);
@right-background-color: rgb(0, 204, 255);
.container {
  margin-left: 200px;
  width: 960px;
  height: 600px;
  border: solid 1px black;
  .demo1 {
    margin-top: @demo-margin-top;
    color: black;
    display: flex;
    .left {
      flex: 1;
      background-color: @left-background-color;
    }
    .middle {
      flex: 1;
      background-color: @mid-background-color;
    }
    .right {
      flex: 1;
      background-color: @right-background-color;
    }
  }
  .demo2 {
    position: relative;
    float: left;
    margin-top: @demo-margin-top;
    width: 100%;
    background-color: @left-background-color;
    overflow: hidden;
    .con1 {
      position: relative;
      float: left;
      right: 30%;
      width: 100%;
      background-color: @mid-background-color;
      .con2 {
        position: relative;
        float: left;
        right: 30%;
        width: 100%;
        background-color: @right-background-color;
        .left {
          position: relative;
          float: left;
          left: 60%;
          width: 40%;
        }
        .middle {
          position: relative;
          float: left;
          left: 60%;
          width: 30%;
        }
        .right {
          position: relative;
          float: left;
          left: 60%;
          width: 30%;
        }
      }
    }
  }
  .demo3 {
    margin-top: @demo-margin-top;
    width: 100%;
    clear: both;
    overflow: hidden;
    .common-item {
      margin-bottom: -9999px;
      padding-bottom: 9999px;
    }
    .left {
      float: left;
      width: 200px;
      background-color: @left-background-color;
    }
    .middle {
      float: left;
      background-color: @mid-background-color;
    }
    .right {
      float: right;
      width: 200px;
      background-color: @right-background-color;
    }
  }
  .demo4 {
    margin: 0 auto;
    margin-top: @demo-margin-top;
    width: 100%;
    clear: both;
    .con1 {
      background-color: #0ff;
      float: left;
      width: 520px;
      border-left: 220px solid #0f0;
      /* 边框大小等于左边栏宽度，颜色和左边栏背景色一致*/
      border-right: 220px solid #f00;
      /* 边框大小等于右边栏宽度，颜色和右边栏背景色一致*/
      .left {
        float: left;
        width: 500px;
        padding:10px;
        margin-right: -520px;
      }
      .middle {
        float: left;
        width: 200px;
        margin-left: -220px;
        padding:10px;
        position: relative;
        /* 测试 */
        border:1px solid;
      }
      .right {
        float: right;
        width: 200px;
        padding:10px;
        margin-right: -220px;
        position: relative;
      }
    }
  }
}
</style>

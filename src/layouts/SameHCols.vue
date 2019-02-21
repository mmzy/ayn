<template>
<div class="container">
  <!-- 多列等高demo -->
  <div class="demo1">
    <div class="left">demo1---flex布局</div>
    <div class="middle">多列等高布局左<br/>多列等高布局左</div>
    <div class="right">多列等高布局右</div>
  </div>
  <div class="demo2">
    <div class="left">demo2---流体布局</div>
    <div class="middle">多列等高布局左<br/>多列等高布局左</div>
    <div class="right">多列等高布局右</div>
  </div>
  <div class="demo3">
    <div class="left">demo3---</div>
    <div class="middle">多列等高布局左<br/>多列等高布局左</div>
    <div class="right">多列等高布局右</div>
  </div>
  <div class="demo4">
    <div class="left">demo4---</div>
    <div class="middle">多列等高布局左<br/>多列等高布局左</div>
    <div class="right">多列等高布局右</div>
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
  width: 600px;
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
    margin-top: @demo-margin-top;
    height: 80px;
    .left {
      float: left;
      width: 30%;
      background-color: @left-background-color;
    }
    .middle {
      float: left;
      width: 30%;
      background-color: @mid-background-color;
    }
    .right {
      float: left;
      width: 40%;
      background-color: @right-background-color;
    }
  }
  .demo3 {
    clear: both;
    margin-top: @demo-margin-top;
    .left {
      background-color: @left-background-color;
    }
    .middle {
      background-color: @mid-background-color;
    }
    .right {
      background-color: @right-background-color;
    }
  }
  .demo4 {
    margin-top: @demo-margin-top;
    .left {
      background-color: @left-background-color;
    }
    .middle {
      background-color: @mid-background-color;
    }
    .right {
      background-color: @right-background-color;
    }
  }
}
</style>

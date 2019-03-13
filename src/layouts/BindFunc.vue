<template>
  <div class="container" id="con">
    <h3>使用 apply 或 call 实现</h3>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg1: 'bind1----apply',
      msg2: 'bind2----call'
    }
  },
  methods: {
    bind1: function () {
      alert(this.msg1)
    },
    bind2: function () {
      alert(this.msg2)
    }
  },
  created () {
    // this.bind1()
  },
  mounted () {
    // this.bind2()
  }
}
</script>

<style lang="less" scoped>
#con {
  margin-left: 20px;
  text-align: left;
}
</style>

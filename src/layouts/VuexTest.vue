 
<template>
  <div id="app">
    <!-- <router-view/> -->
    <!-- <FooterBar v-if="isShow" /> -->
    <div v-if="isShow">hhh</div>
    <span class="joinStatus" @click="invokePushItems(item)">加入收藏列</span>
  </div>
</template>
 
<script>
import {mapState,mapGetters,mapActions} from 'vuex'; //先要引入
// import FooterBar from '@/components/common/FooterBar'
// import config from './config/index'
export default {
  name: 'App',
  components:{
    // FooterBar:FooterBar
  },
  data(){
    return {
    }
  },
  methods:{
      ...mapActions('collection',[ //collection是指modules文件夹下的collection.js
          'invokePushItems'  //collection.js文件中的actions里的方法，在上面的@click中执行并传入实参
      ])
  },
  computed:{
    ...mapState({  //这里的...是超引用，ES6的语法，意思是state里有多少属性值我可以在这里放多少属性值
         isShow:state=>state.footerStatus.showFooter //注意这些与上面的区别就是state.footerStatus,
                                                      //里面定义的showFooter是指footerStatus.js里state的showFooter
      }),
     //你也可以用下面的mapGetters来获取isShow的值，貌似下面的更简洁
    /*...mapGetters('footerStatus',{ //footerStatus指的是modules文件夹下的footerStatus.js模块
         isShow:'isShow' //第一个isShow是我自定义的只要对应template里v-if="isShow"就行，
                         //第二个isShow是对应的footerStatus.js里的getters里的isShow
      })*/
  },
  watch:{
      $route(to,from){
        if(to.name=='book'||to.name=='my'){
           this.$store.dispatch('footerStatus/showFooter') //这里改为'footerStatus/showFooter',
                                                           //意思是指footerStatus.js里actions里的showFooter方法
        }else{
           this.$store.dispatch('footerStatus/hideFooter') //同上注释
        }
      }
  }
}
</script>
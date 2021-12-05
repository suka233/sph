<template>
  <div class="spec-preview">
    <img :src="skuInfo.skuImageList[currentIndex].imgUrl" />
    <div class="event"></div>
    <div class="big">
      <img :src="skuInfo.skuImageList[currentIndex].imgUrl" />
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
// 个人遇到的坑:我妄图直接根据总线传来的Index,来在detailCurrentImg事件回调中计算出imgUrl地址给到模板
// 这样做的后果是,不能使用默认的index了,导致第一次刷新页面,大图为空白
// 比较好的编码方式是:在哪个方法里就执行相应的逻辑,不要做其他事,避免耦合和代码冗余,
// 比如说,在总线上的detailCurrentImg事件里,做的就是传递index的事情,我就只用它来改变组件的currentIndex
// 而不是顺便根据这个index来计算imgUrl地址
// 计算imgUrl地址这个事情交给模板上面的逻辑就行了,这样清楚又明了

// 其实总线还涉及到污染全局,不好维护等事情,所以最好还是用vuex管理数据(我想用vuex来着,但是想着还是锻炼一下我不熟悉的总线模式)
  export default {
    name: "Zoom",
    props:["skuInfo"],
    data(){
      return{
        skuInfoInner:'',
        currentIndex: 0
      }
    },

    //这里在生命周期里转存一下props,避免在模板上使用数据的时候,props还没拿到的情况
    created() {
      this.skuInfoInner = this.skuInfo
    },
    mounted() {

      this.$bus.$on('detailCurrentImg',(index)=>{
        this.currentIndex = index
      })
    }
  }
</script>

<style lang="less">
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>
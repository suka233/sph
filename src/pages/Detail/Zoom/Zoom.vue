<template>
  <!--底图-->
  <div class="spec-preview">
    <img
        v-if="skuImageList[currentIndex]"
        :src="skuImageList[currentIndex].imgUrl"/>
    <!--事件层-->
    <div class="event" @mousemove="mouseMove" ref="event"></div>
    <!--遮罩层-->
    <div class="mask" ref="mask"></div>
    <!--大图层-->
    <div class="big">
      <img
          ref="big"
          v-if="skuImageList[currentIndex]"
          :src="skuImageList[currentIndex].imgUrl"/>
    </div>


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

// 这里又遇到一个坑:控制台报错TypeError: Cannot read property 'imgUrl' of undefined
// 奇怪的是,我已经在仓库定义了sukImageList为计算属性,如果为undefined,就返回空数组
// 猜测虽然已经定义了sukImageList如果为undefined就返回空数组,但是并没有判断sukImageList[0]是undefined的情况
// 上面的猜测可以用v-if验证:如果v-if="skuImageList" 依然会报错,只有当v-if="skuImageList[currentIndex]"时候,才不会报错
// 所以原来数组的[]符号也算一个层级?!!
import {mapGetters} from "vuex";

export default {
  name: "Zoom",
  data() {
    return {
      currentIndex: 0,
      maskWidth: 0
    }
  },
  computed: {
    ...mapGetters(['skuImageList'])
  },
  methods: {
    //鼠标在图上移动的时候
    mouseMove(e) {
      // console.log(e.offsetX,e.offsetY)
      //计算mask的位置
      //获取mask dom节点
      let mask = this.$refs.mask,
          event = this.$refs.event,
          big = this.$refs.big;
      let left, top;
      //计算mask位置
      left = e.offsetX - mask.offsetWidth / 2
      top = e.offsetY - mask.offsetHeight / 2
      //限定left与top最小为0
      left = Math.max(left, 0)
      top = Math.max(top, 0)
      //限定left与top最大为event.clientWidth - mask.clientWidth
      left = Math.min(left, event.clientWidth - mask.clientWidth)
      top = Math.min(top, event.clientHeight - mask.clientHeight)
      //设置mask位置
      mask.style.left = `${left}px`
      mask.style.top = `${top}px`

      //计算bigImg的显示位置
      big.style.left = `-${left * 2}px`
      big.style.top = `-${top * 2}px`
    }
  },
  mounted() {
    this.$bus.$on('detailCurrentImg', (index) => {
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

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>
<template>
  <div>
<span
    :class="[`star-${size}`,`star`,`star-${star}`]"
    v-for="(star,index) in starList" :key="index"></span>
  </div>
</template>

<script>
let ON = 'ON',
    HALF = 'HALF',
    OFF = 'OFF'
export default {
  name: "Stars",
  props: {
    score: Number,
    size: String,
    length: {
      type: Number,
      default:5
    }
  },
  computed:{
    starList(){
      //根据传入的score来决定starList的值
      let starList = [];

      //获取长度与分数
      let length = this.length;
      let score = this.score;

      //确定满星个数
      for (let i = 0; i<Math.floor(score); i++){
        starList.push(ON);
      }

      //确定半星个数
      (score - Math.floor(score)) < 0.5 ? "" : starList.push(HALF)

      //使用空星补全
      while (starList.length < length){
        starList.push(OFF)
      }

      return starList
    }
  }
}
</script>

<style scoped lang="less">
@import "../../common/css/mixin.less";

span {
  &.star {
    display: inline-block;
    //background-color: pink;
    background-size: 100% 100%;

    &.star-24 {
      width: 10px;
      height: 10px;

      &.star-ON {
        .bg-image("star24_on");
      }

      &.star-HALF {
        .bg-image("star24_half");
      }

      &.star-OFF {
        .bg-image("star24_off");
      }
    }

    &.star-36 {
      width: 15px;
      height: 15px;

      &.star-ON {
        .bg-image("star36_on");
      }

      &.star-HALF {
        .bg-image("star36_half");
      }

      &.star-OFF {
        .bg-image("star36_off");
      }
    }

    &.star-48 {
      width: 20px;
      height: 20px;

      &.star-ON {
        .bg-image("star48_on");
      }

      &.star-HALF {
        .bg-image("star48_half");
      }

      &.star-OFF {
        .bg-image("star48_off");
      }
    }
  }

}
</style>
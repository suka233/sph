<template>
  <div class="spec-preview">
    <img :src="skuInfo.skuDefaultImg" />
    <div class="event"></div>
    <div class="big">
      <img :src="skuInfo.skuDefaultImg" />
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
  export default {
    name: "Zoom",
    props:["skuInfo"],
    data(){
      return{
        skuInfoInner:''
      }
    },
    //这里在生命周期里转存一下props,避免在模板上使用数据的时候,props还没拿到的情况
    created() {
      this.skuInfoInner = this.skuInfo
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
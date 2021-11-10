<template>
<div>
<span :class="[`icon-${type}`,`icon-${size}`,`icon-${styles}`,`icon`]"></span>
</div>
</template>

<script>
export default {
  name: "Icon",
  props:{
    type:String,//1:满减decrease 2:折扣discount 3:保价guarantee 4:票据invoice 5:特价special
    size:Number,//图片尺寸 12:12*12 16:16*16
    styles:String //hollow:样式1(空心) solid:样式2(实心)
  }
}
</script>

<style scoped lang="less">
@import "../../common/css/mixin";
//定义一个混合
.icon-type(@type){
  @name: ~"icon-@{type}";
  &.@{name}{
    &.icon-12{
      width: 12px;
      height: 12px;
      &.icon-hollow{
        .bg-image("@{type}_1");
      }
      &.icon-solid{
        .bg-image("@{type}_3");
      }
    }
    &.icon-16{
      width: 16px;
      height: 16px;
      &.icon-hollow{
        .bg-image("@{type}_2")
      }
      &.icon-solid{
        .bg-image("@{type}_4")
      }
    }
  }
}
.icon{
  display: inline-block;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .icon-type("decrease");
  .icon-type("discount");
  .icon-type("guarantee");
  .icon-type("invoice");
  .icon-type("special");
}
</style>
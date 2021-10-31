<template>
<div>
  <TypeNav></TypeNav>
  <div>
    <br>
    <span>keyWord:{{keyword}}</span>
    <br>
    <span>categoryname:{{categoryname}}</span>
    <br>
    <span>category1id:{{category1id}}</span>
    <br>
    <span>category2id:{{category2id}}</span>
    <br>
    <span>category3id:{{category3id}}</span>
    <br>
  </div>
</div>
</template>

<script>
import TypeNav from "components/TypeNav";
export default {
  name: "Search",
  components: {TypeNav},
  props:["keyword","categoryname","category1id","category2id","category3id"]
}
</script>

<style scoped>

</style>
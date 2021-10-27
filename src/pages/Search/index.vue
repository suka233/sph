<template>
<div>
  Search
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
</template>

<script>
export default {
  name: "Search",
  props:["keyword","categoryname","category1id","category2id","category3id"]
}
</script>

<style scoped>

</style>
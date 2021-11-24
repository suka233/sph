<template>
  <div class="pagination">
    <!--组件头部-->
    <button :disabled="currentPage<=1" @click="setCurrentPage(currentPage -1)">上一页</button>

    <button v-show="startEnd.start > 1" @click="setCurrentPage(1)">1</button>
    <button v-show="startEnd.start > 2">···</button>


    <!--组件主体-->
    <!--    <button v-for="(pageIndex,index) in startEnd.end"-->
    <!--            :key="index"-->
    <!--            v-if="pageIndex > startEnd.start - 1"-->
    <!--    >{{pageIndex}}</button>-->

    <!--    性能优化:v-for的优先级比v-if更高,意味着每次v-for生成元素,都会用v-if遍历一下,造成了性能低下-->
    <!--    所以把要显示的页码做成计算属性,只生成需要的元素即可-->
    <button v-for="(pageIndex,index) in showPages"
            :key="index"
            :class="{
              'active':pageIndex===currentPage
            }"
            @click="setCurrentPage(pageIndex)"
    >{{ pageIndex }}</button>

    <!--组件尾部-->
    <button v-show="startEnd.end < totalPage-1">···</button>
    <button v-show="startEnd.end < totalPage" @click="setCurrentPage(totalPage)">{{ totalPage }}</button>

    <button :disabled="currentPage>=totalPage" @click="setCurrentPage(currentPage + 1)">下一页</button>

    <button style="margin-left: 30px">共 {{ this.total }} 条</button>
  </div>

</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      currentPage: this.currentPageFromWrap
    }
  },
  props: {
    total: Number, //传入共多少条数据
    itemsPerPage: Number, //指定每页多少条数据
    pagesNum: {
      type: Number,
      default: 5
    }, //指定连续页码数
    currentPageFromWrap:{
      type:Number,
      default: 1
    } //指定当前页面
  },
  computed: {
    //计算总共页数
    totalPage() {
      let totalPage;
      let {total, itemsPerPage} = this;
      totalPage = Math.ceil(total / itemsPerPage);
      return totalPage
    },

    //计算连续页码数的起始页码与结束页码
    startEnd() {
      let start, end;
      //根据总页码totalPage,当前页码currentPage,计算连续页码数的开始页码start
      let {totalPage, newPagesNum, currentPage} = this

      //计算start
      //普遍情况 12 3 45
      start = currentPage - Math.floor(newPagesNum / 2)
      end = start + newPagesNum - 1
      //处理左边界情况:限定start最小值为1
      //当start小于1,说明处于左边界情况,要重新计算start与end
      if (start < 1) {
        start = 1
        //计算end
        end = start + newPagesNum - 1
        //处理右边界情况: 当end 超过了总页数,那么重新计算start
        if (end > totalPage) {
          //设定end为总页数
          end = totalPage
          //计算start
          start = totalPage - newPagesNum
          //限定start最小为1
          start = Math.max(start, 1)
        }
      }
      //处理右边界情况:限定end最大值为60
      //当end大于60时候,说明处于右边界情况,要重新计算start与end
      if (end > totalPage) {
        //设定end为总页数
        end = totalPage
        //计算start
        start = totalPage - newPagesNum + 1
        //限定start最小为1
        start = Math.max(start, 1)
      }
      return {start, end}
    },

    //计算要显示哪些渲染出来的连续页码数
    showPages() {
      let showPages = []
      let {newPagesNum, startEnd} = this
      for (let i = 0; i < newPagesNum; i++) {
        showPages.push(startEnd.start + i)
      }
      // console.log(`当前页码为:${this.currentPage};总共页码为:${this.totalPage};渲染的页码为:${showPages}`)
      // console.log(`start为:${startEnd.start};end为:${startEnd.end}`)
      return showPages
    },

    //限定pagesNum最大为总页数
    newPagesNum(){
      if(this.pagesNum>this.totalPage) return this.totalPage
      return this.pagesNum
    },

    //限定currentPage最大为总页数
    newCurrentPage:{
      get(){
        if(this.currentPageFromWrap>this.totalPage) return this.totalPage
        return this.currentPageFromWrap
      },
      set(val){
        this.currentPage = val
      }
    }

  },
  methods:{
    setCurrentPage(index){
      this.currentPage = index;
      //准备做的:子向父的数据传递,传递currentPage
      this.$emit('getCurrentPage',index)
      // console.log(`分页组件内部的值:${this.currentPage}`)
    }
  },
  watch:{
    //这个watch是为了解决bug:不知道为啥,currentPageFromWrap变化时,currentPage只有第一次会变化
    // 这就导致,组件外部刷新网页,传入currentPageFromWrap,希望分页组件也自动更新,但是只有首次生效
    // 所以我就用devTool看到,newCurrentPage是会随着currentPageFromWrap变化的
    // 所以在newCurrentPage变化的时候,重新给currentPage赋值即可

    //可能的原因:有可能data里转存数据的时候,props的数据还没传递过来,那这个转存到的数据就为空,意思就失败了
    newCurrentPage:{
      handler(val){
        this.currentPage = val
      }
    }
  }
}
</script>

<style scoped lang="less">
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}

</style>
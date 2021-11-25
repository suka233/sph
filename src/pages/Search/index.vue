<template>
  <div>
    <TypeNav/>
    <div class="main">
      <div class="py-container">
        <!--bread-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
            <li class="with-x" v-if="options.categoryName">{{options.categoryName}}<i @click="removeCategoryname">×</i></li>
            <li class="with-x" v-if="options.keyword">{{options.keyword}}<i @click="removeKeyword">×</i></li>
            <li class="with-x" v-for="(prop,index) in options.props" :key="index" @click="removeProps(index)">{{prop}}<i>×</i></li>
          </ul>
        </div>

        <!--selector-->
        <SearchSelector @searchByAttr="searchByAttr"></SearchSelector>

        <!--details-->
        <div class="details clearfix">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <!--排序-->
              <ul class="sui-nav">
                <li class="active">
                  <a href="#">综合</a>
                </li>
                <li>
                  <a href="#">销量</a>
                </li>
                <li>
                  <a href="#">新品</a>
                </li>
                <li>
                  <a href="#">评价</a>
                </li>
                <li>
                  <a href="#">价格⬆</a>
                </li>
                <li>
                  <a href="#">价格⬇</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-list">
            <ul class="yui3-g">
              <!--商品列表-->
              <li class="yui3-u-1-5" v-for="(good,index) in goods.goodsList" :key="index">
                <div class="list-wrap">
                  <div class="p-img">
                    <a href="item.html" target="_blank"><img
                        :src="good.defaultImg"/></a>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥ </em>
                      <i>{{ good.price }}</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <a target="_blank" href="item.html" :title="good.title">{{
                        good.title
                      }}</a>
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                    <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!--分页组件-->
          <Pagination class="fr page"
                      :total="goods.total" :itemsPerPage="options.pageSize" :pagesNum="3"
                      @getCurrentPage="getGoods_changePage"
                      :currentPageFromWrap="options.pageNo"></Pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchSelector from './SearchSelector/SearchSelector'
import TypeNav from "components/TypeNav"
import {mapActions, mapState} from "vuex"

export default {
  name: 'Search',
  components: {
    SearchSelector,
    TypeNav
  },
  data() {
    return {
      options: {
        pageNo: 1,
        pageSize: 2,
        keyword: "",
        category1Id: "",
        category2Id: "",
        category3Id: "",
        categoryName: "",
        props: [],
        trademark: "",
        order: ""
      }
    }
  },
  props: ["keyword", "categoryname", "category1id", "category2id", "category3id"],
  methods: {
    ...mapActions(["getGoods"]),
    //根据pageNo更新options 并且发送请求
    getGoods_changePage(pageNo = 1) {
      this.options.pageNo = pageNo
      this.updateOptions()
      this.getGoods(this.options)
    },
    //更新一下options
    updateOptions() {
      this.options = {
        ...this.options,
        keyword: this.keyword,
        category1Id: this.category1id,
        category2Id: this.category2id,
        category3Id: this.category3id,
        categoryName: this.categoryname,
        props: '',//老师教的里面要定义成拼装数组,我直接定义成字符串,方便我自己写的后台查询
        trademark: "",
        order: ""
      }
    },
    //根据商品属性查找
    searchByAttr(props){
      //由于后端我自己写的查询不完善,通过属性查找没写好
      // 我也不准备优化查询功能了,能实现前端功能即可
      this.options.props = props
      // this.getGoods_changePage()
    },

    //移除面包屑导航的相关属性
    removeCategoryname(){
      this.options.categoryName = ''
      //重新发送请求
      // this.getGoods_changePage()
    },
    removeKeyword(){
      this.options.keyword = ''
      //重新发送请求
      // this.getGoods_changePage()
    },
    removeProps(index){
      // console.log(index)
      this.options.props.splice(index,1)
    }
  },
  computed: {
    ...mapState({goods: state => state.search.goods})
  },
  watch: {
    //根据路由的更新来发送查询请求
    $route: {
      handler() {
        //清除一下pageNo
        this.options.pageNo = 1
        //更新一下options
        this.updateOptions()
        //发送请求
        this.getGoods_changePage()
        //这里有个需要修复的Bug:分页组件的状态不会自动变化
      },
      deep: true,
      immediate:true
    }
  },
  created() {
    //更新一下options
    this.updateOptions()
    //发送请求
    this.getGoods_changePage()
    //转存props数据到data里
  }
}
</script>

<style lang="less" scoped>
.main {
  margin: 10px 0;

  .py-container {
    width: 1200px;
    margin: 0 auto;

    .bread {
      margin-bottom: 5px;
      overflow: hidden;

      .sui-breadcrumb {
        padding: 3px 15px;
        margin: 0;
        font-weight: 400;
        border-radius: 3px;
        float: left;

        li {
          display: inline-block;
          line-height: 18px;

          a {
            color: #666;
            text-decoration: none;

            &:hover {
              color: #4cb9fc;
            }
          }
        }
      }

      .sui-tag {
        margin-top: -5px;
        list-style: none;
        font-size: 0;
        line-height: 0;
        padding: 5px 0 0;
        margin-bottom: 18px;
        float: left;

        .with-x {
          font-size: 12px;
          margin: 0 5px 5px 0;
          display: inline-block;
          overflow: hidden;
          color: #000;
          background: #f7f7f7;
          padding: 0 7px;
          height: 20px;
          line-height: 20px;
          border: 1px solid #dedede;
          white-space: nowrap;
          transition: color 400ms;
          cursor: pointer;

          i {
            margin-left: 10px;
            cursor: pointer;
            font: 400 14px tahoma;
            display: inline-block;
            height: 100%;
            vertical-align: middle;
          }

          &:hover {
            color: #28a3ef;
          }
        }
      }
    }

    .details {
      margin-bottom: 5px;

      .sui-navbar {
        overflow: visible;
        margin-bottom: 0;

        .filter {
          min-height: 40px;
          padding-right: 20px;
          background: #fbfbfb;
          border: 1px solid #e2e2e2;
          padding-left: 0;
          border-radius: 0;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

          .sui-nav {
            position: relative;
            left: 0;
            display: block;
            float: left;
            margin: 0 10px 0 0;

            li {
              float: left;
              line-height: 18px;

              a {
                display: block;
                cursor: pointer;
                padding: 11px 15px;
                color: #777;
                text-decoration: none;
              }

              &.active {
                a {
                  background: #e1251b;
                  color: #fff;
                }
              }
            }
          }
        }
      }

      .goods-list {
        margin: 20px 0;

        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            height: 100%;
            width: 20%;
            margin-top: 10px;
            line-height: 28px;

            .list-wrap {
              .p-img {
                padding-left: 15px;
                width: 215px;
                height: 255px;

                a {
                  color: #666;

                  img {
                    max-width: 100%;
                    height: auto;
                    vertical-align: middle;
                  }
                }
              }

              .price {
                padding-left: 15px;
                font-size: 18px;
                color: #c81623;

                strong {
                  font-weight: 700;

                  i {
                    margin-left: -5px;
                  }
                }
              }

              .attr {
                padding-left: 15px;
                width: 85%;
                overflow: hidden;
                margin-bottom: 8px;
                min-height: 38px;
                cursor: pointer;
                line-height: 1.8;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;

                a {
                  color: #333;
                  text-decoration: none;
                }
              }

              .commit {
                padding-left: 15px;
                height: 22px;
                font-size: 13px;
                color: #a7a7a7;

                span {
                  font-weight: 700;
                  color: #646fb0;
                }
              }

              .operate {
                padding: 12px 15px;

                .sui-btn {
                  display: inline-block;
                  padding: 2px 14px;
                  box-sizing: border-box;
                  margin-bottom: 0;
                  font-size: 12px;
                  line-height: 18px;
                  text-align: center;
                  vertical-align: middle;
                  cursor: pointer;
                  border-radius: 0;
                  background-color: transparent;
                  margin-right: 15px;
                }

                .btn-bordered {
                  min-width: 85px;
                  background-color: transparent;
                  border: 1px solid #8c8c8c;
                  color: #8c8c8c;

                  &:hover {
                    border: 1px solid #666;
                    color: #fff !important;
                    background-color: #666;
                    text-decoration: none;
                  }
                }

                .btn-danger {
                  border: 1px solid #e1251b;
                  color: #e1251b;

                  &:hover {
                    border: 1px solid #e1251b;
                    background-color: #e1251b;
                    color: white !important;
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
      }

      .page {
        width: 733px;
        height: 66px;
        overflow: hidden;
        float: right;

        .sui-pagination {
          margin: 18px 0;

          ul {
            margin-left: 0;
            margin-bottom: 0;
            vertical-align: middle;
            width: 490px;
            float: left;

            li {
              line-height: 18px;
              display: inline-block;

              a {
                position: relative;
                float: left;
                line-height: 18px;
                text-decoration: none;
                background-color: #fff;
                border: 1px solid #e0e9ee;
                margin-left: -1px;
                font-size: 14px;
                padding: 9px 18px;
                color: #333;
              }

              &.active {
                a {
                  background-color: #fff;
                  color: #e1251b;
                  border-color: #fff;
                  cursor: default;
                }
              }

              &.prev {
                a {
                  background-color: #fafafa;
                }
              }

              &.disabled {
                a {
                  color: #999;
                  cursor: default;
                }
              }

              &.dotted {
                span {
                  margin-left: -1px;
                  position: relative;
                  float: left;
                  line-height: 18px;
                  text-decoration: none;
                  background-color: #fff;
                  font-size: 14px;
                  border: 0;
                  padding: 9px 18px;
                  color: #333;
                }
              }

              &.next {
                a {
                  background-color: #fafafa;
                }
              }
            }
          }

          div {
            color: #333;
            font-size: 14px;
            float: right;
            width: 241px;
          }
        }
      }
    }
  }
}
</style>
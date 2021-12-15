import apiAxios from "./apiServer";
import mockAxios from './mockServer';
// const axios = require('./server');

//本地koa服务器

//获取三级分类
export const getBaseCategoryList = () => apiAxios.get("/product/getBaseCategoryList")
//getGoods
export const getGoods = (body) => apiAxios.post("/list", body)
//获取商品详情
export const getDetail = (skuId) => apiAxios.get(`/item/:${skuId}`)
//添加到购物车
export const addToCart = (skuId, skuNum) => apiAxios.post(`/cart/addToCart/:${skuId}/:${skuNum}`)
//获取购物车列表
export const getCartList = () => apiAxios.get(`/cart/cartList`)


//mock数据
export const getBanners = () => mockAxios.get('/banners')
export const getFloors = () => mockAxios.get('/floors')
//获取三级分类
// export const getBaseCategoryList = () => mockAxios.get('/product/getBaseCategoryList')

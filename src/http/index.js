import apiAxios from "./apiServer";
import mockAxios from './mockServer';
// const axios = require('./server');

//本地koa服务器

//获取三级分类
export const getBaseCategoryList = () => apiAxios.get("/product/getBaseCategoryList")
//getGoods
export const getGoods = (body) => apiAxios.post("/list",body)

//mock数据
export const getBanners = () => mockAxios.get('/banners')
export const getFloors = () => mockAxios.get('/floors')
//获取三级分类
// export const getBaseCategoryList = () => mockAxios.get('/product/getBaseCategoryList')

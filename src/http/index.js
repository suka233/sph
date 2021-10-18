import apiAxios from "./apiServer";
import mockAxios from './mockServer';
// const axios = require('./server');

export const getBaseCategoryList = () => apiAxios.get("/product/getBaseCategoryList")
export const getBanners = () => mockAxios.get('/banners')
export const getFloors = () => mockAxios.get('/floors')
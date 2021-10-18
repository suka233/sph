import axios from 'axios';
// const http = require('axios');

//进度条组件
import NProgress from 'nprogress';
import "nprogress/nprogress.js";
import "nprogress/nprogress.css";


const axiosins = axios.create({
    baseURL:"/api", //这里写的api前缀怎么无效啊?已解决,之前写的是小写baseUrl导致失效
    timeout:15000
})

// 添加请求拦截器
axiosins.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么

    NProgress.start();
    return config;
});

// 添加响应拦截器
axiosins.interceptors.response.use(function (response) {
    // 对响应数据做点什么

    NProgress.done();
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    NProgress.done();
    return Promise.reject(error);
});

export default axiosins
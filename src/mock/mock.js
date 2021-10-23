import Mock from 'mockjs';
import banners from './banners.json';
import data from './data.json';
import floors from './floors.json';
import recommends from './recommends.json';
import categoryList from './categoryList.json'

Mock.mock('/mock/banners', {
    code:200,
    data:banners
});
Mock.mock('/mock/data', {
    code:200,
    data:data
});
Mock.mock('/mock/floors', {
    code:200,
    data:floors
});
Mock.mock('/mock/recommends', {
    code:200,
    data:recommends
});
Mock.mock('/mock/product/getBaseCategoryList',{
    code:200,
    data:categoryList
})
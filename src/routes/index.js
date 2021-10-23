import Home from 'pages/Home'
import Login from 'pages/Login'
import Register from 'pages/Register'
import Search from 'pages/Search'

export default [
    {path:"/Home",component:Home},
    {path:"/Login",component:Login,meta:{hideFooter:true}},
    {path:"/Register",component:Register,meta:{hideFooter:true}},
    {path:"/Search",component:Search},
    {path:"/",redirect:"/Home"}//这里我把redirect的参数写成了空,显然没理解这个配置的意思,这个配置是将path路径重定向到redirect声明的路径下
]
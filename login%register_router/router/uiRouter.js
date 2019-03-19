/*
* UI页面路由器，专门用于展示页面
* */

//引入express
let express = require('express');
//引入路由构造函数
let {Router} = express;
//实例化一个路由对象
let router = new Router();
//引入path模块
let {resolve} = require('path');

//登陆界面路由
router.get('./login', (req,res)=>{
    let url = resolve(__dirname, '../public/login.html');
    res.sendFile(url);
})

//注册也米娜
router.get('./register', (req,res)=>{
    let url = resolve(__dirname, '../public/register.html');
    res.sendFile(url);
});

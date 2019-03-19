/*
    使用express搭建服务器
 */

//引入express
let express = require('express');

//创建应用对象
let app = express();

//设置路由
app.get('/', (request, response)=>{
    console.log(request.query);
    response.send('<h3>首页根路由</h3>')
});

app.get('/test', (req, res)=>{
    res.send('<h3>test路由</h3>')
});

//拦截POST请求
app.post('/demo', (req, res)=>{
    res.send('收到了POST请求')
});

app.listen(3000, (err)=>{
    if (!err) console.log('服务器启动成功了,访问地址是：http://localhost:3000')
    else console.log('服务器启动失败，'+err)
})
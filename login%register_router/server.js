let express = require('express');

let db = require('./db');

let uiRouter = require('./router/uiRouter');

let userRouter = require('./router/userRouter');
//实例化一个app对象
let app = express();
//定义端口号
const PORT = 3000;
//隐藏具体框架名称
app.disable('x-powered-by');
//使用内置中间件
app.use(express.urlencoded({extended:true}));
//使用内置中间件暴露静态资源
app.use(express.static('public'));

db.then(()=>{
    //UI路由器
    app.use(uiRouter);
    //业务路由器
    app.use(userRouter)
})

//抛出异常
    .catch((err)=>{
        console.log(err)
    })

//绑定端口监听
app.listen(PORT,(err)=>{
    if(!err) console.log(`服务器成功启动了，访问地址是：http://localhost:${PORT}`)
    else console.log('服务器启动失败，'+err)
})

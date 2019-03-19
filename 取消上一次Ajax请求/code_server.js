let express = require('express');

let app = express();

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

app.get('/code', (req,res)=>{
    console.log('验证码路由被触发')
    setTimeout(()=>{
        res.send(Math.floor(Math.random()*10000).toString());

    }, 2000)
});

app.listen(3000, (err)=>{
    if(!err){
        console.log('服务器启动成功，访问地址:http://localhost:3000');
    }else{
        console.log(err);
    }
})
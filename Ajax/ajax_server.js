let express = require('express');

let app = express();

app.use(express.static('public'));

app.get('/demo1', (req,res)=>{
    let data = req.query;
    console.log(data);
    res.send('我收到了Ajax_get请求我收到了Ajax_get请求我收到了Ajax_get请求我收到了Ajax_get请求我收到了Ajax_get请求我收到了Ajax_get请求我收到了Ajax_get请求我收到了Ajax_get请求我收到了Ajax_get请求我收到了Ajax_get请求我收到了Ajax_get请求我收到了Ajax_get请求我收到了Ajax_get请求我收到了Ajax_get请求我收到了Ajax_get请求我收到了Ajax_get请求我收到了Ajax_get请求我收到了Ajax_get请求我收到了Ajax_get请求我收到了Ajax_get请求我收到了Ajax_get请求我收到了Ajax_get请求我收到了Ajax_get请求我收到了Ajax_get请求我收到了Ajax_get请求我收到了Ajax_get请求我收到了Ajax_get请求我收到了Ajax_get请求我收到了Ajax_get请求我收到了Ajax_get请求我收到了Ajax_get请求')
});

//post请求
app.post('/demo2', (req,res)=>{
    let data = req.query;
    console.log(data)
    res.send('我收到了Ajax_post请求')
})

app.listen(3000,(err)=>{
    if(!err){
        console.log('连接成功')
    }else{
        console.log(err);
    }
})
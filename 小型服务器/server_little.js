//引入模块
let http = require('http');
let queryString = require('querystring')

//创建一个服务对象
let server = http.createServer((request, response)=>{

    let str = request.url.split('?')[1]
    let obj = queryString.parse(str);
    // console.log(obj);

    response.setHeader('content-type', 'text/html; charset=utf-8');

    response.end('<h3>这是我的第一个原生node服务器</h3>')
});

//绑定端口号
server.listen(3000, (err)=>{
    if(!err) console.log('服务器启动成功，地址是：http://localhost:3000')
    else console.log(`服务器自动失败，${err}`)
})
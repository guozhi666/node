let express = require('express');
let db = require('./db');
let citiesModel = require('./model/citiesModel');
let app = express();
app.disable('x-powered-by');
app.use(express.urlencoded({extended:true}));

//确保数据库连接成功，然后执行查询和取出操作
db.then(()=>{
    //获取所有省份的信息
    app.get('/getAllProvince', async(req,res)=>{
        res.set('Access-Control-Allow-Origin', 'http://localhost:63342');
        let data = await citiesModel.find({level:1},{_id:0,name:1,province:1})
        // console.log(data);
        res.send({state:1,data});
    })
    // app.get('/getAllProvince',async(req,res)=>{
    //     res.set('Access-Control-Allow-Origin', 'http://localhost:63342');
    //     let data = await citiesModel.find({level:1},{province:1,name:1,_id:0})
    //     res.send({state:1,data})
    // })
    //获取所有市的信息
    app.get('/getCitiesByProvince',async(req,res)=>{
        res.set('Access-Control-Allow-Origin', 'http://localhost:63342');
        let {province} = req.query
        let data = await citiesModel.find({level:2,province},{_id:0,name:1,city:1})
        res.send({state:1,data});
    })

    //根据所选省份、市，获取当前市下的所有区县信息
    app.get('/getCountyByProvinceCity',async(req,res)=>{
        res.set('Access-Control-Allow-Origin', 'http://localhost:63342');
        let {province} = req.query;
        let {city} = req.query;
        let data = await citiesModel.find({level:3,province, city},{_id:0,name:1,code:1})
        res.send({state:1,data});
    })
})
.catch((err)=>{
    console.log(err)
});

app.listen(3000, (err)=>{
    if(!err) console.log(`服务器成功启动了，访问地址是：http://localhost:3000`)
    else console.log('服务器启动失败，'+err)
})
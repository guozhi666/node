//引入链接数据库模块
let db = require('./db');
//引入学生模型对象模块
let studentsModel = require('./model/mongoose.js');

;(async()=>{
    //等待数据库连接成功
    await

    //保存数据
    studentsModel.create({
        stu_id:'0002',
        stu_name:'hehe',
        stu_age:34,
        stu_sex:'',
        stu_hobey:['女','女'],
        stu_info:'一个颜值非常帅气的男人',
    },(err, data)=>{
        if(!err) console.log(`数据保存成功${data}`)
        else console.log(err)
    })
})()
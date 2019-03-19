const mongoose = require('mongoose');
mongoose.set('useCreateIndex',true);
//连接数据库
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

let myPromise = new Promise((resolve, reject)=>{
    //绑定监听
    mongoose.connection.once('open', (err)=>{
        if(!err){
            console.log('数据库连接成功')
            resolve()
        }else{
            console.log(err)
            reject()
        }
    })
});

//真正操作数据库代码
(async()=>{
    await myPromise

    //获取Schema约束对象
    let Schema = mongoose.Schema

    let studentsSchema = new Schema({
        stu_id:{
            type:String,    //字段类型
            required:true,  //必填字段
            unique:true     //唯一字段（不可重复）
        },
        stu_name:{
            type:String,
            required: true,
        },
        stu_age:{
            type:Number,
            required:true
        },
        stu_sex:{
            type:String,
            required:true,
            default:'男'
        },
        stu_hobby:{
            type:Array
        },
        stu_info:{
            type:Schema.Types.Mixed
        },
        date:{
            type:Date,
            default: Date.now()
        },
        enable_flag:{
            type:String,
            default:'Y'
        }
    })

    //创建模型对象
    let studentsModel = mongoose.model('students', studentsSchema)

    //插入实例对象
    let stu1 = new studentsModel({
        stu_id:'0001',
        stu_name:'呵呵',
        stu_age:20,
        stu_sex:'男',
        stu_hobby:['女','打代码'],
        stu_info:'一个颜值非常高的男人',
    })

    //保存到数据库
    stu1.save((err,data)=>{
        if(!err) console.log('保存成功')
        else  console.log(err)
    })
})();
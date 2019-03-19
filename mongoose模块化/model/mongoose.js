

//该模块用于生成学生模型对象

//引入模块
const mongoose = require('mongoose');

//获取Schema约束对象
let Schema = mongoose.Schema;

//实例一个约束对象
let studentsSchema = new Schema({
    stu_id:{
        type:String,
        required:true,
        unique:true
    },
    stu_name:{
        type: String,
        required: true
    },
    stu_age:{
        type:Number,
        required:true
    },
    stu_sex:{
        type:String,
        // required:true,
        default:'男'
    },
    stu_hobey:{
        type:[String]
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
});

//创建对象模型
let studentsModel = mongoose.model('students', studentsSchema)

module.exports = studentsModel;


//该模块用于生成学生模型对象

//引入模块
const mongoose = require('login%register_router/model/userModel');

//获取Schema约束对象
let Schema = userModel.Schema;

//实例一个约束对象
let userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    pwd:{
        type: String,
        required: true
    },
    name:{
        type:String,
        required:true
    },
    re_pwd:{
        type:String,
        required:true
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
let userModel = mongoose.model('users', userSchema)

module.exports = userModel;
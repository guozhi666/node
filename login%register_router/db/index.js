

//该模块主要用于链接数据库

//引入mongoose模块
const mongoose = require('mongoose');

//设置连接数据库的名称
const dbName = 'user';

mongoose.set('useCreateIndex', true);

//创造一个Promise实例
module.exports = new Promise((resolve, reject)=>{
    //链接数据库
    mongoose.connect(`mongodb://localhost:27017/${dbName}`, {useNewUrlParser: true})
    //绑定监听
    mongoose.connection.once('open', (err)=>{
        if(!err){
            console.log('数据库连接成功');
            resolve();
        }else{
            console.log('数据库连接失败');
            reject();
        }
    })
})
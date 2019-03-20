const express  = require('express');
const app = express();

// app.use(express.static('public'));
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));

app.get('/test', (req, res)=>{
    let {callBack} = req.query;
    let arr = [{name:'kobe', age:12},{name:'wade', age:14}];

    let str = callBack+'('+ JSON.stringify(arr) +')'
    res.send(str)
});

app.listen(3000, (err)=>{
    if(!err){
        console.log('ok')
    }else{
        console.log(err);
    }
})
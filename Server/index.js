var express = require('express');
var app = express();
var routes = require("./routes");
var logger = require('morgan');//通过 morgan 记录每次 HTTP 请求的信息
app.use(logger('dev'));//使用morgan
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
//它的功能是解析 HTTP 请求中的正文信息，并把这些信息存储到 req.body 对象中，比方说，客户端提交 form 表单的数据。
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // 如果想使用 form 提交，这一行是必要的
var cors= require('cors');
app.use(cors());//使用中间件


var User = require('./models/post');
mongoose.Promise = global.Promise;//解决异步操作出现的错误
mongoose.connect('mongodb://localhost:27017/newdata');
//连接我的数据库　－－newdata
//已经启动27017 端口
var db = mongoose.connection;
db.on('error', console.log);

db.once('open', function() {
    var post = new User({
      username:"cheng",
      password:"123",
      age:"23"
    });
   post.save(function(err){
     if(err) console.log(err);
   })
 console.log('success!');
});

db.once('open', function() {
  User.find().exec(function(err, users) {
    console.log("seccuss");
  })
})//exec 检索数据库中的记录

routes(app);




app.listen(4000, function() {
  console.log('Express server is listening on port 4000')
})
//后台端口，不能与前台相同

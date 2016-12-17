var express = require('express');
var User = require('./models/user');

var jwt = require('jsonwebtoken');//引入jsonwebtoken实现jwt功能

var secret = require("./config.js").secret;


var generateToken = function(user) {
  return jwt.sign(user, secret, {
    expiresIn: 3000    //设置过期时间
  });
}
//定义gener方法 生成令牌（一种对浏览器的信任，以进行后续的访问）  调用sign签名接口  绑定服务器端密匙




module.exports = function(app) {
	app.post("/posts",function(req,res){
		res.json(req.body)
	})

	app.post("/auth/login",function(req,res){
		User.findOne({username:req.body.username},function(err,user){
				if(!user) {return res.status(403).json({error:"用户名不存在！"})}
			user.comparePassword(req.body.password , function(err,isMatch){
				if(!isMatch){return res.status(403).json({error:"密码错误！"})}
					res.json({
						token: generateToken({name: user.username}),//使用jwt
						user: {name:user.username}
					})
			})
		})
	})


	  app.get('/posts', function(req,res ){
	  User.find().sort({"createdAt:":-1}).exec(function(err, posts) {
	  	if (err) return res.status(500).json({error: err.message});
	    res.json({posts})
	  })
	})
	//可以在web API 中体现

	app.get('/users/:_id', function(req,res ){
	  User.findById(req.params._id,function (err,user) {
	     if(err) return console.log(err);
	     console.log(user);
	     res.send(user)
	})
	})
	//取得每个用户id来获取

	// app.get('/users/:username', function(req,res ){
	//   User.find({username:req.params.username},function (err,user) {
	//     if(err) return console.log(err);
	//       res.send({user})
	//   })
	// })
	//注意：/:username :不能省略


	app.get('/', function(req,res ){
	  res.json("hah")
	})
}
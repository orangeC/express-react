var express = require('express');
var User = require('./models/user');


module.exports = function(app) {
	app.post("/posts",function(req,res){
		res.json(req.body)
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
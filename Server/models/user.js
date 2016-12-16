var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bcrypt = require('bcrypt');//引入bcrypt包执行相应的密码加密工作

const UserSchema = new Schema(
  {
    username: { type: String , unique: true , required: true},
    password: { type: String, required: true }
  },
  { timestamps: true }
);

//加密处理
UserSchema.pre('save', function(next) {
  var user = this, SALT_FACTOR = 5;
  bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
    if(err) return next(err);
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

//验证客户端传来的密码与数据库中的密码，用bcrypt.compare方法校对用bcrypt加密过的密码
UserSchema.methods.comparePassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) { return cb(err); }
    cb(null, isMatch);
  });
}

module.exports = mongoose.model('User', UserSchema);
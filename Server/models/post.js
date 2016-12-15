var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    username: { type: String },
    password: { type: String, required: true },
    age: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);
const mongoose = require('mongoose');

const {Schema} = mongoose;
const articleSchema = new Schema({
    _id : {
      type : Number
    },
    title : {
      type : String,
      require : true
    },
    content : {
      type : String,
      require : true
    },
    author : {
      type : String,
      default : 'no name'
    }
});

module.exports = mongoose.model('Article', articleSchema);
const {model , Schema} = require('mongoose')


const userSchema = new Schema({
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  login: {
    type: String,
    unique: true,
    required: true
  },
  media:{
    username: {
      type: String,
      required: true,
      minlength: 3
    },
    avatarUrl: String
  }
  
})

module.exports = model('users', userSchema)
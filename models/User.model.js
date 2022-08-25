const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please fill in this field'],
      trim: true,
      set: value => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase()
    },
    lastName: {
      type: String,
      required: [true, 'Please fill in this field'],
      trim: true,
      set: value => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase()
    },
    password: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      default: 'https://toppng.com/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png',
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Please enter a valid email address']
    },
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER'
    },
  },
  {
    timestamps: true,
  }
);

const User = model('User', userSchema)

module.exports = User

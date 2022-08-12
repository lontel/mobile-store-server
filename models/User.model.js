const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, 'Please fill in this field'],
      minlength: [3, 'Username must be at least 3 characters long'],
      maxlength: [10, 'Username cannot be more than 10 characters long'],
      trim: true,
      set: value => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase()
    },
    password: {
      String,
      required: true,
      minlength: [5, 'Password must be at least 5 characters long']
    },
    profilePic: {
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

const User = model("User", userSchema)

module.exports = User

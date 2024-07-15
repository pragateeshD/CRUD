const mongoose = require('mongoose')//model for user tabel
    const UserSchema = new mongoose.Schema(
        {
            name: String,
            email:String,
            age:Number
        }
    )
const UserModel =mongoose.model("users",UserSchema)//this is the model for user "users"-> refer to the collection we created in mongodb is"users" UserSchema -> is the scheme for storing user data     
module.exports =UserModel

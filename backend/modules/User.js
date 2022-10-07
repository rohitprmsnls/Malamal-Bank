const {Schema , model} = require("mongoose");
const userSchema = new Schema(
    {
        username: String,
         email: String, 
         pass :String,
          address:String ,
    }
)
const User = model ("User",userSchema);
module.export = User;
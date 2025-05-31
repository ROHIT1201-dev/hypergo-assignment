import {mongoose} from "mongoose";

const userSchema = new mongoose.Schema(
    {
         
        name:{
            type:String,
            required:true,
            unique:true,
        },
        email:{
            type:String,
            required:true,
            unique:true

        },
        password:{
            type:String,
            required:true,
        },

        Favorites:[
            {
                type:String,
                ref:"propertydata",


            },
        ],

        recommendationsReceived: [{
            from: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            properties: [{ type: mongoose.Schema.Types.ObjectId, ref: "propertydata" }],
            date: { type: Date, default: Date.now }
        }]


         
    },
    {timestamps:true}
)

export const User = mongoose.model("User",userSchema);



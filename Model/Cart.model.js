const mongoose=require("mongoose")

const cartSchema=mongoose.Schema({
    Image:{
        type: String,
        required: true,
    },
    Title : {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    Instructor : {
        type: String,
        required: true,
    },
    Rating : {
        type: Number,
        required: true,
    },
    Level : {
        type: String,
        required: true,
    },
    Price:{
        type: Number,
        required: true,
    },
    courseId:{
        type: Number,
        required: true,
    },
    userId:{
        type: String,
        required: true,
    }
})

const cartModel=mongoose.model("cart",cartSchema)

module.exports={cartModel}
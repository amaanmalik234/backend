import validator from "validator";
import mongoose from "mongoose";
const messageSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "Name Required!"],
        minLength: [3, "Name must contain atleast three characters!"],
    },
    email:{
        type: String,
        required:[true, "Email Required!"],
        validate:[validator.isEmail,"Please provide valid email!"],
    },
    subject:{
        type: String,
        required:[true, "Subject Required!"],
        minLength: [5, "Subject must contain atleast three characters!"],
    },
    message:{
        type: String,
        required:[true, "Message Required!"],
        minLength: [10, "Message must contain atleast three characters!"],
    },
});

export const Message = mongoose.model("Message", messageSchema);
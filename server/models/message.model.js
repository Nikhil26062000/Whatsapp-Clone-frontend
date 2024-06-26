import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    conversationId:{
        type: 'string',
    },
    senderId:{
        type: 'string',
    },
    receiverId:{
        type: 'string',
    },
    msg:{
        type: 'string',
    },
    type:{
        type: 'string',
    }

},
{
    timestamps: true
}
)

const message = mongoose.model('Message',messageSchema)
export default message
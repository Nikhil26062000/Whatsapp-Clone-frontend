
import Message from "../models/message.model.js"
import conversation from "../models/conversation.model.js"
export const saveMessage = async(req,res) =>{
    try {
        const newMessage = new Message(req.body)
        await newMessage.save()
        await conversation.findByIdAndUpdate(req.body.conversationId,{message:req.body.msg})
        res.json({message: "Message send successfully"})
    } catch (error) {
        res.json({message:"Error while saving message to DB: ", error})
    }
}

export const getMessage = async (req, res) => {
    try {
        let message = await Message.find({ conversationId: req.query.conversationId }); // Use req.query
        return res.json({ messages: message });
    } catch (error) {
        console.log("Error while getting message from DB: ", error);
        res.status(500).send("Internal Server Error"); // Add error response
    }
};

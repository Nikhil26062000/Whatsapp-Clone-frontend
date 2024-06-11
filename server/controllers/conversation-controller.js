import conversation from "../models/conversation.model.js";

export const newConversation = async (req,res) => {
  try {
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;

    const existConversation = await conversation.findOne({
      members: { $all: [receiverId, senderId] },
    });

    if(existConversation){
        return res.json({message:"Conversation exists already"})
    }
    const newConversation = await conversation({
        members:[senderId,receiverId]
    })
    newConversation.save();
    return res.json({message:"Conversation created successfully"})
  } catch (error) {
    res.json({message:"Error creating conversation"})
  }
};

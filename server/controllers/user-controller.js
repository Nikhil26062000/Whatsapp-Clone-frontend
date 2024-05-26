import User from "../models/user.model.js";

export const addUser = async (req, res) => {
  try {
    const isExist = await User.findOne({ sub: req.body.sub });
    if (isExist) return res.json({ message: "User already exists" });
    const newUser = new User(req.body);
    await newUser.save();
    res.json({ message: "User added successfully",newUser });
  } catch (error) {
    console.log("error", error.message);
  }
};

export const getUser = async (req, res) =>{
  try {
    const userData = await User.find({})
    res.json({ message: "User data fetched successfully", userData });
  } catch (error) {
    console.log("error fetching the User's Data ", error.message);
  }
}

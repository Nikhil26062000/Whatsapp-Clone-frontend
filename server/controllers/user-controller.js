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

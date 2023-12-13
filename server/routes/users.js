import express from 'express';
import jwt from 'jsonwebtoken';
import { UserModel} from "../models/Users.js"

const router = express.Router();

router.post("/register", async (req, res) => {
    const {username, password} = req.body;
    const user = await UserModel.findOne({ username });

    if (user) {
        return res.json({message: "User exists!"});
    }
    
    const newUser = new UserModel({username, password});
    await newUser.save();

    res.json({message: "Registered"});
})

router.post("/login", async (req, res) => {
    const {username, password} = req.body;
    const user = await UserModel.findOne({ username});
    if (!user) {
        return res.json({ message: "User doesn't exist!"});

    }

    if (password != user.password){
        return res.json({message: "Username or Password is Incorrect!"})

    }

    const token = jwt.sign({id: user._id}, "secret");
    res.json({token, userID: user._id});
});

export {router as userRouter};
import express from 'express'
import {DiscussionModel} from '../models/Discussions.js'

const router = express.Router();

router.post("/add", async (req, res) => {
    const {title, content, type, username} = req.body;
    const newDiscussion = new DiscussionModel({title, content, type, username});
    await newDiscussion.save();

    res.json({message: "created!"});
});

router.post("/getAll", (req, res) => {
    DiscussionModel.find().then((response) => {
        res.json(response)
    });
});

router.post("/getByType", async (req, res) => {
    const { type } = req.body;
    try {
        const discussionsByType = await DiscussionModel.find({ type });
        res.json(discussionsByType);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.post("/getById", async (req, res) => {
    const { postId } = req.body;
    try {
        const post = await DiscussionModel.findById(postId);
        res.json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export {router as discussRouter};
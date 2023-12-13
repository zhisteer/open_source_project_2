import mongoose from "mongoose"

const DiscussionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: { 
        type: String, 
        required: true 
    },
    type: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
});

export const DiscussionModel = mongoose.model("discussions", DiscussionSchema);

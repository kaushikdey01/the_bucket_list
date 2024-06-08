import PostMessage from "../models/postMessage.models.js";

export const getPosts = async (req,res) => {
    try{
        const postMessages = await PostMessage.find();
        // we make this async bcoz finding something takes time. thereforem it must be async func
    

        res.status(200).json(postMessages); // function returning a json file if it works
    }
    catch(error){
        res.status(404).json({
            message : error.message
        })
    }
}

export const createPost = async (req,res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    // passing values to PostMessage schema from the values we get from req.body
    try {
        await newPost.save();
        // has to be another async func for the saving the post
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({
            message : error.message
        })
    }
}
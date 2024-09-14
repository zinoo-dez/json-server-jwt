const axios = require('axios');
const API = 'http://localhost:3001/posts'; // JSON Server URL

const getAllPosts = async (_, res) => {
    try {
        const response = await axios.get(API)
        res.status(200).json(response.data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getPostById = async (req, res) => {
    try {
        const response = await axios.get(`${API}/${req.params.id}`);
        if (response.data) {
            res.status(200).json(response.data);
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
const createPost = async (req, res) => {
    try {
        const response = await axios.post(API, req.body);
        res.status(201).json({
            success: "Post created successfully",
            data: response.data
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
const updatePost = async (req, res) => {
    try {
        const response = await axios.put(`${API}/${req.params.id}`, req.body);
        res.status(200).json({
            success: "Post updated successfully",
            data: response.data
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
const deletePost = async (req, res) => {
    try {
        await axios.delete(`${API}/${req.params.id}`);
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};
// ဒီ code က post တွေနဲ့ပတ်သက်တဲ့ လုပ်ဆောင်ချက်တွေကို ထိန်းချုပ်တဲ့ controller ဖြစ်ပါတယ်။

// getPostById function:
// - req.params.id ကို သုံးပြီး specific post တစ်ခုကို ရယူပါတယ်။
// - API ကနေ data ရရင် 200 status code နဲ့ data ကို ပြန်ပေးပါတယ်။
// - မတွေ့ရင် 404 error ပြန်ပေးပါတယ်။

// createPost function:
// - req.body ထဲက data ကို သုံးပြီး post အသစ်တစ်ခု ဖန်တီးပါတယ်။
// - အောင်မြင်ရင် 201 status code နဲ့ success message နဲ့ data ကို ပြန်ပေးပါတယ်။

// updatePost function:
// - req.params.id နဲ့ req.body ကို သုံးပြီး post တစ်ခုကို update လုပ်ပါတယ်။
// - အောင်မြင်ရင် 200 status code နဲ့ success message နဲ့ update ဖြစ်သွားတဲ့ data ကို ပြန်ပေးပါတယ်။

// deletePost function:
// - req.params.id ကို သုံးပြီး post တစ်ခုကို ဖျက်ပါတယ်။
// - အောင်မြင်ရင် 200 status code နဲ့ success message ကို ပြန်ပေးပါတယ်။

// အားလုံးမှာ error ဖြစ်ရင် 500 status code နဲ့ error message ကို ပြန်ပေးပါတယ်။

// နောက်ဆုံးမှာ ဒီ function တွေအားလုံးကို export လုပ်ထားပါတယ်။

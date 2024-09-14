const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
// npm i express dotenv bcryptjs jsonwebtoken json-server axios 

const app = express();

app.use(express.json());

// // Routes
// route middleware
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.get('/', (req, res) => {
    res.send('Hello World');
});
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
// ဒီ code က Express.js ကို သုံးပြီး server တစ်ခု တည်ဆောက်ထားတာ ဖြစ်ပါတယ်။

// လိုအပ်တဲ့ module တွေကို import လုပ်ထားပါတယ်။
// express - web application framework
// dotenv - environment variable တွေကို load လုပ်ဖို့
// authRoutes နဲ့ postRoutes - သက်ဆိုင်ရာ route တွေကို သီးခြား file တွေကနေ import လုပ်ထားပါတယ်။

// dotenv.config() နဲ့ .env file ထဲက variable တွေကို load လုပ်ပါတယ်။

// Express application တစ်ခုကို create လုပ်ပါတယ်။

// middleware တွေကို setup လုပ်ပါတယ်။
// express.json() က request body ကို JSON အနေနဲ့ parse လုပ်ပေးပါတယ်။

// route တွေကို setup လုပ်ပါတယ်။
// '/api/auth' နဲ့ '/api/posts' ဆိုတဲ့ base URL တွေအတွက် သက်ဆိုင်ရာ route တွေကို သုံးပါတယ်။

// root route ('/) အတွက် simple response တစ်ခု ပြန်ပေးထားပါတယ်။

// server ကို start လုပ်ပါတယ်။
// PORT က .env file ထဲက PORT variable ကို သုံးပြီး မရရင် 3002 ကို default အနေနဲ့ သုံးပါတယ်။

// server start ဖြစ်ရင် console မှာ message တစ်ခု ပြပေးပါတယ်။

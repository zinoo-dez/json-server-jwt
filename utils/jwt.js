const jwt = require('jsonwebtoken');

function generateToken(user) {
    return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, 
        { expiresIn: '1h' });
}
module.exports = { generateToken }
// ဒီကုဒ်က JWT token တွေကို ထုတ်ပေးတဲ့ function တစ်ခုဖြစ်ပါတယ်။

// generateToken function က user object ကို parameter အနေနဲ့ လက်ခံပါတယ်။
// ဒီ function က JWT token တစ်ခုကို ထုတ်ပေးပါတယ်။

// jwt.sign() method ကို သုံးပြီး token ကို ထုတ်ပါတယ်။
// ပထမ parameter က payload ဖြစ်ပြီး user ရဲ့ id နဲ့ email ကို ထည့်ထားပါတယ်။
// ဒုတိယ parameter က secret key ဖြစ်ပြီး process.env.JWT_SECRET ကနေ ယူထားပါတယ်။
// တတိယ parameter က options object ဖြစ်ပြီး token ရဲ့ သက်တမ်းကို 1 နာရီ သတ်မှတ်ထားပါတယ်။

// ဒီ function က ထုတ်လိုက်တဲ့ token ကို ပြန်ပေးပါတယ်။

// module.exports နဲ့ generateToken function ကို export လုပ်ထားတဲ့အတွက် 
// တခြား file တွေကနေ ဒီ function ကို import လုပ်ပြီး သုံးနိုင်ပါတယ်။

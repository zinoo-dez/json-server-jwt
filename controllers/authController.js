const bcrypt = require('bcryptjs');
const axios = require('axios');
const { generateToken } = require('../utils/jwt');
const API = 'http://localhost:3003/users';

const register = async (req, res) => {
    console.log(req.body)
    const { username, email, password } = req.body;
    try {
        const existingUsers = await axios.get(API); // check user
        const user = existingUsers.data.find(u => u.email === email);
        if (user) {
            return res.status(400).json({ message: 'User Already Exist' });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // create user
        await axios.post(API, { username, email, password: hashedPassword });
        res.json({ message: 'User registered successfully' });

    } catch (error) {
        res.status(500).json({ message: 'Error registering user' });
    }
}

const login = async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;
    try {
        const existingUsers = await axios.get(API);
        const user = existingUsers.data.find(u => u.email === email);
        if (!user) {
            return res.status(401).json({ message: 'User not register' });
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Email And Password Do Not Match' });
        }
        const token = generateToken(user);
        res.send({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in' });
    }
};

module.exports = { login, register };

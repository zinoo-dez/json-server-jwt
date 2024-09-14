const bcrypt = require('bcryptjs');
const axios = require('axios');
const { generateToken } = require('../utils/jwt');
const usersEndpoint = 'http://localhost:3001/users';

const register = async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;
    try {
        const existingUsers = await axios.get(usersEndpoint);
        const user = existingUsers.data.find(u => u.email === email);
        if (user) {
            return res.status(400).send('User already exists');
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        await axios.post(usersEndpoint, { email, password: hashedPassword });
        res.send('User registered successfully');

    } catch (error) {
        res.status(500).send('Error registering user');
    }
}

const login = async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;
    try {
        const existingUsers = await axios.get(usersEndpoint);
        const user = existingUsers.data.find(u => u.email === email);
        if (!user) {
            return res.status(400).send('User not register ');
        }
        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).send('Invalid password');
        }
        const token = generateToken(user);
        res.send({ token });
    } catch (error) {
        res.status(500).send('Error logging in');
    }
};

module.exports = { login, register };

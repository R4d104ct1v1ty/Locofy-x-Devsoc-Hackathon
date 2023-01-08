const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const generateToken = require('../config/generateToken');

const registerUser = asyncHandler (async (req, res) => {
    const { username, password } = req.body;
    const filter = {};
    const array = await User.find(filter);
    const userID = array.length + 1;

    if (!username || !password){
        res.status(400);
        throw new Error("Please Enter all the fields.");
    }

    const userExists = await User.findOne({username});
    if (userExists){
        res.status(400);
        throw new Error("User already exists.");
    }
    const user = await User.create({username, password, userID});
    if (user) {
        res.status(200).json({
            username: user.username,
            password: user.password,
            userID: user.userID,
            token: generateToken(user.userID)
        });
    }else{
        res.status(400);
        throw new Error("Failed to create new User")
    }
});

const authUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({username});
    if (user && (password == user.password)){
        res.json({
            username: user.username,
            password: user.password,
            userID: user.userID,
            token: generateToken(user.userID)
        });
    };
});

module.exports = { registerUser, authUser };
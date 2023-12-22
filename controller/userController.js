// importing user Model and required methods
const User = require("../models/User");
const bycrpyt = require("bcrypt");
const { createTokens} = require('../config/JWT');

// method to register new user
module.exports.register = async function (req, res) {
    try {
        // destructuring username  and password
        const { username, password } = req.body;
        // checking if user exist
        const userExist = await User.findOne({ username: username });
        
        // new user
        if (!userExist) {
            // encrypt the password 
            const hash = await bycrpyt.hash(password, 10);
            // create a new user in database
            const user = await User.create({
                username: username,
                password : hash
            });
            // success
            return res.json("USER REGISTERED");
            
        // user exists 
        } else {
            // error
            return res.status(400).json("USER ALREADY EXISTS")
        }
    } catch (err) {
        // error
        return res.status(400).json(" Error : Unable to register  User");
    }
}

// method to login user
module.exports.login = async function (req, res) {
    try {
        // destructuring username and password
        const { username, password } = req.body;
        // checking if  user exists
        const user = await User.findOne({ username: username });
        
        // user not found
        if (!user) {
            // error
            res.status(400).json("Error : User  Doesn't Exist");
        }
        
        // checking for the entered password
        const match = await bycrpyt.compare(password, user.password);
        
        // wrong password
        if (!match) {
            // error
            res.status(400).json("Error : Incorrect Username or Password");
        
        // right password
        } else {
            // creating JWT
            const accessToken = createTokens(user);
            // saving  JWT in cookies
            res.cookie("access-token", accessToken, {
                maxAge: 60 * 60 * 1000,
                httpOnly: true 
            })
            // success
            return res.json("LOGGED IN");
        }
    } catch (err) {
        // error
        return res.status(400).json(" Error : Login Failed ")
    }
}


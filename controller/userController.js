const User = require("../models/User");
const bycrpyt = require("bcrypt");
const { createTokens} = require('../config/JWT');

module.exports.register = async function (req, res) {

    try {
        const { username, password } = req.body;
        const userExist = await User.findOne({ username:username });

        if (!userExist){
            const hash = await bycrpyt.hash(password, 10);
            const user = await User.create({
                username: username,
                password : hash
            });
            

            return res.json("USER REGISTERED");
            
        } else {
            return res.status(400).json("USER ALREADY EXISTS")
        }
        
    } catch (err) {
        return res.status(400).json(" Error : Unable to register  User");
    }

}

module.exports.login = async function (req, res) {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username: username });
        
        if (!user) {
            res.status(400).json("Error : User  Doesn't Exist");
        }
        
        const match = await bycrpyt.compare(password, user.password);
        
        if (!match) {
            res.status(400).json("Error : Incorrect Username or Password");
        } else {
            const accessToken = createTokens(user);
            res.cookie("access-token", accessToken, {
                maxAge: 60 * 60 * 1000,
                httpOnly: true 
            })
            return res.json("LOGGED IN");
        }

    } catch (err) {
        return res.status(400).json(" Error : Login Failed ")
    }
}


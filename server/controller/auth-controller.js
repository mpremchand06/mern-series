const User = require("../models/user-model.js")
const bcrypt = require("bcryptjs")


const home = async (req, res) => {
    try {
        res.status(200).send("Welcome Brother my new Page")
    }
    catch (error) {
        console.log(error)
    }
};

const register = async (req, res) => {
    try {
        // console.log(req.body)
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "email is already exists" })
        }

        // Here I create hash the Password or protect the password
        const hash_password = await bcrypt.hash(password, 10)

        const userCreated = await User.create({
            username,
            email,
            phone,
            password: hash_password,
        });
        const token = await userCreated.generateToken();
        res.status(200).json({
            message: "User registered successfully",
            token,
            userId: userCreated._id.toString(),
        });
        // res.status(200).json({ message: userCreated , token:await generateToken(), userId : userCreated._id.toString(), })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error" });
    }
};

const signup = async (req, res) => {
    try {
        res.status(200).send("Welcome to my signup Page")
    }
    catch (error) {
        console.log(error)
    }
}



module.exports = { home, register, signup }
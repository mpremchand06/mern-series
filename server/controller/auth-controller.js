const home = async (req, res) => {
    try {
        res.status(200).send("Welcome Brother my new Page")
    }
    catch (error) {
        console.log(error)
    }
};

const register = async (req , res)=> {
    try {
        res.status(200).send("Welcome to my new Registeration Group Form")
    }
    catch(error) 
    {
        console.log(error)
    }
};

const signup = async (req , res)=> {
    try {
        res.status(200).send("Welcome to my signup Page")
    }
    catch(error) {
        console.log(error)
    }
}



module.exports = {home , register , signup }
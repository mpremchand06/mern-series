const mongoose = require("mongoose")


const URI = "mongodb://localhost:27017/MernSeries2026";
// mongoose.connect(URI);

const connectDB = async ()=> {
    try{
        await mongoose.connect(URI)
        console.log("Connection sucessfully to DB")
    }
    catch(error){
        console.log("database connection error", error.message)
        process.exit(1)
    }
}

module.exports = connectDB;

const express = require("express");
const cors = require("cors")
const app = express();
const authRoute = require("./router/auth-router.js")
const contactRoute = require("./router/contact-router.js")
const connectDB = require("./utils/db.js");
const errorMiddleware = require("./middlewares/error-middleware.js");
require("dotenv").config();

const corsOptions = {
    origin : "http://localhost:5173",
    method:["GET , POST , PUT , DELETE , PATCH , HEAD"],
    credentials : true,
}

app.use(cors(corsOptions))

app.use(express.json())  // This is the middleware that allow the user details in JSON() formate 

app.use("/api/auth", authRoute)
app.use("/api/form" , contactRoute)

app.use(errorMiddleware)

connectDB().then(() => {
    const PORT = 5000;
    app.listen(PORT, () => {
        console.log(`server is running at port ${PORT}`);
    });
});

const express = require("express");
const app = express();
const authRoute = require("./router/auth-router.js")
const contactRoute = require("./router/contact-router.js")
const connectDB = require("./utils/db.js");
const errorMiddleware = require("./middlewares/error-middleware.js");
require("dotenv").config();

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

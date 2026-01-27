

const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next()
    }
    catch (err) {
        // const message = err.issues[0].message 
        // console.log(message)
        // res.status(400).json({ msg: message || "validation failed" })

        // using error handling
        const status = 422;
        const message = "Fill the input properly";
        const extraDetails = err.issues[0].message

        const error ={
            status,
            message,
            extraDetails,
        }
        console.log(error)
        next(error)
    }
}
module.exports = validate
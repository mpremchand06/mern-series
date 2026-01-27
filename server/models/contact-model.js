const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
}, { timestamps: true });

const Contact = new model("Contact", contactSchema);

module.exports = Contact;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema ({
    title:{
        type: String,
        required: true,
        trim: true
    },
    author: {
        type:String,
        required: true,
        trim: true
    },
    description: {
        type:String
    },
    image: {
        type: String
    },
    link: {
        type: String
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
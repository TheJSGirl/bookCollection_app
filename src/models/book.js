const mongoose = require('../db');


const Schema   = mongoose.Schema;

const bookModel = new Schema({
     title : {
        type: String
    },

    author: {
        type: String
    },
    genre: {
        type: String
    },
    read: {
        type: Boolean,
        default: false
    }
});

const Book = mongoose.model('bookmodels', bookModel); 

// Book.insertMany({
//     title : 'ashok',
//     author : 'ankit',
//     genre : 'pri'
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });

module.exports = Book;
const Book = require('../models/book.js');
const bookRoutes = require('express').Router();



bookRoutes.route('/books')
.get((req, res) => {
    const query = {};
    if(req.query.genre){
        query.genre = req.query.genre;
    }
   Book.find(query, (err, books)=>{
       console.log(query);
       if(err){
           console.log(err);
           res.status(500).send(err);
       }
       else{
           res.json(books);
       }
   });
    
})
.post((req, res) => {
    const book = {
        title: req.body.title,
        author: req.body.author,
        genre:  req.body.genre
    }
    if(!book.title){
        res.status(400).json({
            message: 'title is required'
        });
    }

    else{
        let mybook = new Book(book);
        mybook.save().then((data) => {
            console.log(data);
            res.json(data);
        }).catch((err) => {
            console.log(err);
            res.json(err);
        })
        // console.log(book);
        
        res.status(200).json({
            data: book,
            message: 'saved sucessfully'
        });
    }
});

bookRoutes.route('/books/:id')
.get((req, res) => {
    Book.findById(req.params.id, (err, book) => {
        if(err){
            return res.status(500).send(err);
        }
        else{
            res.status(200).json({
                data: book
            
            });
        }
    });

})

.patch((req, res) => {
   Book.findByIdAndUpdate({_id: req.params.id},req.body)
   .then((book) => {
    Book.findOne({_id :req.params.id}).then((book)=>{
        res.send(book);
    });
   })
   .catch((err) => {
       res.json(err);
   })

})
.delete((req, res) => {
   // console.log(req.params.id);
   Book.findByIdAndRemove({_id: req.params.id})
   .then((book)=>{
            res.send(book);
        })
    .catch((err)=> {
        res.json(err);
    })
});



module.exports= {
    bookRoutes
}
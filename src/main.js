const express    = require('express');
const bodyParser = require('body-parser');



//initiate app
const app = express();



// //require schema from models
// const Book = require('./models/book.js');

//middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//asign port no.
const port = 3000;


//routes
const {bookRoutes} = require('./routes/book.js');

// use the routes
app.use('/api', bookRoutes);

//listening at port no. 3000
app.listen(port, () => {
    console.log('listen at port no.->', port);
});

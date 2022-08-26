const express = require('express');
const app = express();
const morgan = require('morgan');

//Setting, process.env.PORT in case you wanted to uploaded it to some cloud service
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2); 
//Middleware starting morgan, it makes possible to see what's receiving the server 
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes, requests in Postman
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));


//the server is starting
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
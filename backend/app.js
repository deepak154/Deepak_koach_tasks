const express = require('express');
const bodyParser = require('body-parser'); 
const mongoose  = require('mongoose');

const path = require('path');
const authRoutes = require('./api/routes/auth');

const MONGODB_URI = 'mongodb+srv://DeepakChatApp:'+'G6!7M3QGkWesJuy'+'@cluster0.87fwb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());  


app.use((req, res, next)=>{
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');  
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); 
	next();  
});

app.use('/user', authRoutes);

app.use((req, res, next) => {
	const error = new Error("Not found");
	error.status = 404;
	next(error);
});
      
app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
	  error: {
	    message: error.message
	  }
	});
});

mongoose.connect( MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=> {   
    console.log('Connected !!!');
    app.listen(8080);
})
.catch((err)=>{
  console.log(err);
});
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser'); 
const session = require('express-session');

const homeRoutes = require('./routes/home');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));  
app.use(session({secret: 'my secret', resave: false, saveUninitialized: false})); 


app.use(homeRoutes);

app.use((req, res, next)=>{    
	res.status(404).render('404', {
	docTitle: "Page Not Found", 
	path : "/404",
	});
}); 

app.use((error, req, res, next) => {
  res.status(500).render('500', {
    docTitle: "System Error!", 
    path : "/500",
    }); 
});


app.listen(3000, ()=>{
	console.log("Connected");
});
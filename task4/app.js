const path = require('path');

const express = require('express');
const bodyParser = require('body-parser'); 

const insertRoutes = require('./routes/insert');
const readRoutes = require('./routes/read');
const deleteRoutes = require('./routes/delete');
const updateRoutes = require('./routes/update');

const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://DeepakChatApp:'+'G6!7M3QGkWesJuy'+'@cluster0.87fwb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get('/',(req, res, next)=>{
      res.write('<HTML>');
      res.write('<HEAD><TITLE>Home Page</TITLE></HEAD>');
      res.write('<BODY>')
      res.write('<ul>');
      res.write('<h1><B><i><u><center>CRUD Operations Examples on Database</center></u></i></b></h1>');
      res.write('<li> <H3> Insert Data From File</h3>')
      res.write('<FORM action = "/insert" method = "POST" ><button type = "SUBMIT">Insert</Button></form>');
      res.write('</li><li><h3>Fetch Data From DB </h3>')
      res.write('<a href ="/readAllStudents">Fetch Students</a> <br>');
      res.write('<a href ="/readAllGroups">Fetch Groups</a><br>');
      res.write('<a href ="/readAllColleges">Fetch Colleges</a>');
      res.write('</li><li><h3>Update Data to DB</h3>')
      res.write('<a href ="/updateStudents">Update Students</a> <br>');
      res.write('<a href ="/updateGroups">Update Groups</a><br>');
      res.write('<a href ="/updateColleges">Update Colleges</a><br><br>');
      res.write('</li><li><h3>Delete Data From DB</h3>')
      res.write('<a href ="/deleteStudents">Delete Students</a> <br>');
      res.write('<a href ="/deleteGroups">Delete Groups</a><br>');
      res.write('<a href ="/deleteColleges">Delete Colleges</a><br><br>');
      res.write('</li></ul>')

      res.write('</BODY>');
      res.write('</HTML>')
      return res.end();
});

app.use(insertRoutes);
app.use(readRoutes);
app.use(deleteRoutes);
app.use(updateRoutes);

app.use((req, res, next)=>{
  res.write('<HTML>');
  res.write('<HEAD><TITLE>Home Page</TITLE></HEAD>');
  res.write('<BODY>')
  res.write('<h1><center>Error 404: PAGE NOT FOUND</center></h1');
  res.write('</body></html>')
  return res.end();
});

app.use((error, req, res, next)=>{
  res.write('<HTML>');
  res.write('<HEAD><TITLE>Home Page</TITLE></HEAD>');
  res.write('<BODY>')
  res.write('<h1><center>Error 500: System Error</center></h1');
  res.write('</body></html>')
  return res.end();
});

mongoose.connect( MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=> {   
    console.log('Connected !!!');
    app.listen(3000);
})
.catch((err)=>{
  console.log(err);
});
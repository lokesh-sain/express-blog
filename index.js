const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const mainRoutes = require('./routes/main'); // my main routes



app.set("view engine","ejs");
app.use(express.static('static'));
app.use(mainRoutes);



app.listen(PORT,()=>{console.log(`running on ${PORT}`)})
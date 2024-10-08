const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const ejsMate = require('ejs-mate')
const methodOverride = require('method-override');
const productRoutes = require('./routes/product')
const reviewRoutes = require('./routes/review')

mongoose.connect('mongodb://127.0.0.1:27017/shopping-app')
.then(() => {
    console.log("DB connected successfully")
})
.catch((err) =>{
    console.log("DB error");
    console.log(err);
})

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // views folder
app.use(express.static(path.join(__dirname, 'public'))); // public folder
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

// seedDB();

app.use(productRoutes); // so that hrr incoming request ke liye path check kiya jaaye
app.use(reviewRoutes); // so that hrr incoming request ke liye path check kiya jaaye

app.listen(8080, () => {
    console.log("server connected at port 8080");
    
})
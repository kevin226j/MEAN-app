import express from 'express';
import bodyParser from 'body-parser';
import mongoose  from 'mongoose';
import cors from 'cors';

const dotenv = require('dotenv').config();

import router from './src/routes/index';

const app = express();
const PORT = 3000;

const mongodbUri = 'mongodb://testing_mlab1:testing_mlab1@ds123783.mlab.com:23783/photos_test' //For local use -> `mongodb://localhost:27017/${process.env.LOCAL_DB_NAME}`

//mongoose connection either for local mongoDB or mongoDB hosting: mLab
mongoose.Promise = global.Promise;
mongoose.connect(mongodbUri, {useNewUrlParser: true,})
mongoose.connection.once('open', ()=>{console.log('mLab database is now connected')});



//TODO: connect to external database (mlab) after the initial test is complete. 

//start middle-ware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//EJS
app.set('view engine', 'ejs');
app.set('views', './src/views');

//CORS
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
});

//router
app.use(router);


app.listen(PORT,()=>{
    console.log(`server running on port: ${PORT}`);
})





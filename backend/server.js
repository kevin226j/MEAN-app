import express from 'express';
import bodyParser from 'body-parser';
import mongoose  from 'mongoose';
import cors from 'cors';

import router from './src/routes/index';

const app = express();
const PORT = 3000;

//mongoose connection to mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portfolio_test', {useNewUrlParser: true}, (err)=>{

});
//TODO: connect to external database (mlab) after the initial test is complete. 

//start middle-ware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//CORS
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
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





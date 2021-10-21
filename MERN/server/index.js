import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts',postRoutes);
app.use(bodyParser.json({limit:"30mb", extend:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extend:true}));
app.use(cors());
//crea conexion con mongoDB
const CONNECTION_URL = 'mongodb+srv://admin:2081@cluster0.65a0t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3 000;


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify',false);
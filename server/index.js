const express =require('express');
const app =express();
const port= 5000;
const cors=require('cors');
const cookieParser=require('cookie-parser');
const connectDB = require('./connection');
const routes = require('./routes');
require('dotenv').config();

connectDB();
app.use(cors({origin:"https://home-chef-s-f.vercel.app",credentials:true}));
app.use(express.json());
app.use(cookieParser());

app.use("/api",routes);

app.listen(port,()=>
{
    console.log(`Server started at ${port}`);
})

const express = require('express');
const app= express();
const dotenv = require('dotenv');
const jobs=require("./routes/Jobs")
const connectDatabase = require('./config/database');


dotenv.config({path : './config/config.env'});
const PORT= process.env.PORT;

connectDatabase();

app.use(express.json());
app.use("/api/v1", jobs);

app.listen(PORT, ()=>{
    console.log(`server started on ${process.env.PORT}`);
})


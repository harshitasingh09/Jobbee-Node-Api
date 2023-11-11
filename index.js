const express = require('express');
const app= express();
const dotenv = require('dotenv');


dotenv.config({path : './config/config.env'})
const PORT= process.env.PORT;


app.get('/', (req, res) => {  
    res.send('hello world from jobee')
});




app.listen(PORT, ()=>{
    console.log(`server started on ${process.env.PORT}`);
})


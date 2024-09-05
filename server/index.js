const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const app = express();

dotenv.config({path:path.join(__dirname,"config.env")});

app.use(express.json())

app.listen(process.env.PORT,()=>{
    console.log(`Server listening to the port ${process.env.PORT}`);
    
})
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const app = express();
const cors = require('cors');
app.use(cors());


dotenv.config({path:path.join(__dirname,"config.env")});

app.use(express.json())

app.listen(process.env.PORT,()=>{
    console.log(`Server listening to the port ${process.env.PORT}`);
    
})

const auth = require('./routes/auth');

app.use('/api/v1/',auth);
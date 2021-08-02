require('dotenv').config();
const express = require('express');
const app = express();
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({extended:true}));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/note', require('./routes/notes.routes'))

async function start(){
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useFindAndModify:false,
            useUnifiedTopology:true,
            useCreateIndex:true
        })

        app.listen(PORT, ()=>{
            console.log(`App has been started at port ${PORT}`);
        })
    }
    catch (e){
        console.log('Server error', e.message);
        process.exit(1);
    }
}
start();


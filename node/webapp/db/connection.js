const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.dbUrl,{poolSize:config.config.poolSize},(err)=>{
    if(err){
        console.log('Connection Problem. ',err);
    }
    else{
        console.log('Connection Success...');
    }
});

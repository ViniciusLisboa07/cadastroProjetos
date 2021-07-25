const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
  
const activitiesSchema = new mongoose.Schema({
    projectId:{ 
        type: Number, 
        required:true
    }, 
    title: {   
        type:String,
        trim:true,
        required:true
    }, 
    startDate: {
        type:Date,
        required:true
    },
    endDate: {
        type:Date,
        required:true
    },
    finalized: {
        type: Boolean,
        required:true
    }
});

module.exports = mongoose.model('Activity', activitiesSchema)
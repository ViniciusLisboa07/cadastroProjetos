const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const projectSchema = new mongoose.Schema({
    title:{
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
    }
});

module.exports = mongoose.model('Project', projectSchema)
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slug');

const projectSchema = new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:true
    },
    slug:String,
    startDate: {
        type:Date,
        required:true
    },
    endDate: {
        type:Date,
        required:true
    },
    conclusionPercent: {
        type:Number,
        required:true
    },
    late: {
        type:Boolean
    }
});

projectSchema.pre('save', function(next){
    if(this.isModified('title')){
        this.slug = slug( this.title, {lower:true} )
    }

    next();
});

module.exports = mongoose.model('Project', projectSchema);
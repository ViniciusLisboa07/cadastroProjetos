const mongoose = require('mongoose');
const Project = mongoose.model('Project');

exports.register = (req, res) => {
    res.render('register');
}; 
    
exports.registerAction = (req, res) => {
    console.log(req.body);
    res.json(req.body);
};

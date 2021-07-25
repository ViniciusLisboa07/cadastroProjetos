const mongoose = require('mongoose');
const Project = mongoose.model('Project');

exports.index = async (req, res, next) => {
    var resJson = {
        projects: []
    };
    
    const projects = await Project.find();
    resJson.projects = projects;

    res.render('projects', resJson);
} 
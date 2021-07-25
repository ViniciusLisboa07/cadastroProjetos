const mongoose = require('mongoose');
const Project = mongoose.model('Project');
const Activity = mongoose.model('Activity');


exports.index = async (req, res, next) => {
    var resJson = {
        projects: []
    }; 
     
    const projects = await Project.find();
    resJson.projects = projects;
 
    const activities = await Activity.find();

    res.render('projects', resJson);
}

exports.slug = async (req, res) => {
    var resJson = {
        project: {},
        activities: []
    }; 

    const project = await Project.findOne({ slug: req.params.slug });
    resJson.project = project;

    const activities = await Activity.find({ projectId: project._id})
    resJson.activities = activities;
    console.log(resJson.activities)

    res.render('project', resJson);
}

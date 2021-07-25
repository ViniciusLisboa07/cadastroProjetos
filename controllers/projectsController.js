const mongoose = require('mongoose');
const Project = mongoose.model('Project');
const Activity = mongoose.model('Activity');


exports.index = async (req, res, next) => {
    var resJson = {
        projects: []
    }; 
 
     
    const projects = await Project.find();
    resJson.projects = projects;
 
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
 
    res.render('project', resJson);
}
 
exports.slugAction = async (req, res) => {
    var arrayInputList = req.body.arrayInputList;
    var perc = 0;
    var auxPerc = 0;
  
    for (let index = 0; index < arrayInputList.length; index++) {
 
        if(arrayInputList[index].finalized == 'true'){ 
            auxPerc += 1;
            console.log(auxPerc)
             console.log(typeof arrayInputList[index].finalized)
        }

        const activity = await Activity.findOneAndUpdate({ _id: arrayInputList[index].id }, { finalized: arrayInputList[index].finalized})
        await activity.save();
        
    }
    
    perc = (100 * auxPerc) / arrayInputList.length;

    const activityProj = await Activity.findOne({ _id: arrayInputList[0].id })
    
    const project = await Project.findOneAndUpdate({ _id: activityProj.projectId}, {conclusionPercent: perc});
    await project.save();
    
}

const mongoose = require('mongoose');
const Project = mongoose.model('Project');
const Activity = mongoose.model('Activity');
 
exports.register = (req, res) => {
    res.render('register'); 
}; 

exports.registerAction = async (req, res) => {
    //cria o projeto 
    const project = new Project(req.body.project);
    await project.save();
    

    //cria as atividades do projeto
    for(let i = 0; i < req.body.ativityList.length ; i++){
        const activity = new Activity({
            projectId: project._id,
            title: req.body.ativityList[i].title,
            startDate: req.body.ativityList[i].startDate,
            endDate: req.body.ativityList[i].endDate,
            finalized: false
        });

        if(activity.endDate > project.endDate){
            const updateProject = await Project.findOneAndUpdate({ _id: project._id }, { late: true });
        }
        await activity.save();
    }    


    // res.redirect('/');
};
const mongoose = require('mongoose');
const Project = mongoose.model('Project');
const Activity = mongoose.model('Activity');
 
exports.register = (req, res) => {
    res.render('register');
}; 
    

exports.registerAction = async (req, res) => {

    console.log(req.body);
    // const project = new Project(req.body);
    // await project.save();
    
    // console.log(project);

    // const activity = new Activity({
    //     projectId: project._id,
    //     title: req.body.titleActivity,
    //     startDate: req.body.startDateAcitivity,
    //     endDate: req.body.endDateActivity,
    // });
    // await activity.save();

    req.flash('success', 'Projeto criado com sucesso!');
    
    res.redirect('/register');
};  
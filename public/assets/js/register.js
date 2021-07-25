var projectName = document.getElementById('projectName');
var startDateProject = document.getElementById('startDate');
var endDateProject = document.getElementById('endDate');


var titleActivity = document.getElementById('titleActivity');
var startDateAcitivity = document.getElementById('startDateAcitivity');
var endDateActivity = document.getElementById('endDateActivity');

var addActivity = document.getElementById('addActivity');
var createProject = document.getElementById('createProject');

var atividades = document.getElementById('atividades');

var ativityList = [];


addActivity.onclick = () =>{

    // criando os elementos para a DOM
    var atividade = document.createElement('div');
    var title = document.createElement('p');

    title.innerHTML = titleActivity.value;

    // criando o Obj que sera passado pela req POST
    var activityObject = {
        title: titleActivity.value,
        startDate: startDateAcitivity.value,
        endDate: endDateActivity.value
    }
 
    ativityList.push(activityObject);

    atividade.appendChild(title);
    atividades.appendChild(atividade);
    
    // limpando o form
    titleActivity.value = "";
    startDateAcitivity.value = "";
    endDateActivity.value = "";
};

createProject.onclik = () => {
    console.log('234234')

    // var project = {
    //     title: projectName.value,
    //     startDate: startDateProject.value,
    //     endDate: endDateProject.value
    // }


    console.log('567467456')
    // $.post("/register", { project, ativityList}, () => {
    // });
}
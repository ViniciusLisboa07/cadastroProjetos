var errors = document.getElementById('errors');

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
 
createProject.onclick = () => {
    
    errors.removeChild(errors.childNodes[0])

    var project = {
        title: projectName.value,
        startDate: startDateProject.value,
        endDate: endDateProject.value,
        conclusionPercent: 0
    }
    
    if(projectName.value == '' || startDateProject.value == '' || endDateProject.value == '' || ativityList.length == 0){
        var error = document.createElement('p');
        error.innerHTML = 'Preencha todos os campos!';
        error.style.color = "red";
        errors.appendChild(error);
    }

    $.post("/register", { project, ativityList}, () => {
        window.location.href = '/'
    });
    console.log(projectName.value)
}
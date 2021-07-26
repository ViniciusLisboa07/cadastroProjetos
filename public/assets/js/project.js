var saveChanges = document.getElementById("saveChanges");
var inputList = document.getElementsByClassName("inputFinalized");

saveChanges.onclick = () => {

    const array = Array.from(inputList)
    var arrayInputList = [];
 
    for (let index = 0; index < array.length; index++) {
        var element = {
            id: array[index].value,
            title: array[index].name,
            finalized: array[index].checked
        };
        arrayInputList.push(element)
    }

    $.post(window.location, {arrayInputList}, () => {
        window.location.href = '/'
    });
};
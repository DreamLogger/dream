//Arrays
var title=[];
var type=[];
var date=[];
var description=[];
//Arrays

//Input Variables
var titleInput;
var typeInput;
var dateInput;
var descriptionInput;
//Input Variables

//Logic Variables
var index;
//Logic Variables

document.getElementById("saveBtn").addEventListener("click", function(){
    gatherInputs();
    pushEntry();
    storeLocalData();
});

function gatherInputs(){
    titleInput=document.getElementById("titleInput").value;
    typeInput=document.getElementById("typeInput").value;
    dateInput=document.getElementById("dateInput").value;
    descriptionInput=document.getElementById("descriptionInput").value;
}

function pushEntry(){
    title.push(titleInput);
    type.push(typeInput);
    date.push(dateInput);
    description.push(descriptionInput);
}

function deleteEntry(){
    title.splice(index);
    type.splice(index);
    date.splice(index);
    description.splice(index);
}

function pullLocalData(){
    var currentLength=title.length;
    title.splice(0,title.length);
    type.splice(0,type.length);
    date.splice(0,date.length);
    description.splice(0,description.length);
    for (let i=0;i<currentLength;i++) {
        title.push(localStorage.getItem("title"+i));
        type.push(localStorage.getItem("type"+i));
        date.push(localStorage.getItem("date"+i));
        description.push(localStorage.getItem("description"+i));
    }
}

function storeLocalData(){
    localStorage.setItem("title"+index,title[index]);
    localStorage.setItem("type"+index,type[index]);
    localStorage.setItem("date"+index,date[index]);
    localStorage.setItem("description"+index,description[index]);
    index++;
}

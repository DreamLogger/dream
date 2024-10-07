//Arrays
var index=[];
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

document.getElementById("saveBtn").addEventListener("click", function(){
    gatherInputs();
    saveEntry();
    index=0;
    storeLocalData();
});

function gatherInputs(){
    titleInput=document.getElementById("titleInput");
    typeInput=document.getElementById("typeInput").textContent;
    dateInput=document.getElementById("dateInput").textContent;
    descriptionInput=document.getElementById("descriptionInput").textContent;
}

function saveEntry(){
    title.push(titleInput);
    type.push(typeInput);
    date.push(dateInput);
    description.push(descriptionInput);
}

function storeLocalData(){
    localStorage.setItem("title"+index,title[index]);
    localStorage.setItem("type"+index,type[index]);
    localStorage.setItem("date"+index,date[index]);
    localStorage.setItem("description"+index,description[index]);
}

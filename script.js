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
    console.log(title,0);
    console.log(type,0);
});

function gatherInputs(){
    var titleInput=document.getElementById("titleInput").textContent
    var typeInput=document.getElementById("typeInput").textContent
    var dateInput=document.getElementById("dateInput").textContent
    var descriptionInput=document.getElementById("descriptionInput").textContent
}

function saveEntry(){
    appendItem(title,titleInput);
    appendItem(type,typeInput);
    appendItem(date,dateInput);
    appendItem(description,descriptionInput);
}

function storeLocalData(){
    localStorage.setItem("title"+index,title[index])
    localStorage.setItem("type"+index,type[index])
    localStorage.setItem("date"+index,date[index])
    localStorage.setItem("description"+index,description[index])
}



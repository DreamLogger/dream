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
var dreamIndex;
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
    pullLocalData();
    title.push(titleInput);
    type.push(typeInput);
    date.push(dateInput);
    description.push(descriptionInput);
    dreamIndex++;
    localStorage.setItem("currentDreamIndex",dreamIndex);
}

function deleteEntry(){
    title.splice(dreamIndex);
    type.splice(dreamIndex);
    date.splice(dreamIndex);
    description.splice(dreamIndex);
    dreamIndex--;
    localStorage.setItem("currentDreamIndex",dreamIndex); 
}

function pullLocalData(){
    pullDreamIndex();
    if(dreamIndex="null"){}else{
        title.splice(0,title.length);
        type.splice(0,type.length);
        date.splice(0,date.length);
        description.splice(0,description.length);
        for (let i=0;i<dreamIndex+1;i++) {
            title.push(localStorage.getItem("title"+i));
            type.push(localStorage.getItem("type"+i));
            date.push(localStorage.getItem("date"+i));
            description.push(localStorage.getItem("description"+i));
        }
    }
}

function storeLocalData(){
    pullDreamIndex();
    localStorage.clear;
    var currentLength = dreamIndex+1
    for (let i=0;i<currentLength;i++) {
        localStorage.setItem("title"+i,title[i]);
        localStorage.setItem("type"+i,type[i]);
        localStorage.setItem("date"+i,date[i]);
        localStorage.setItem("description"+i,description[i]);
        localStorage.setItem("currentDreamIndex",dreamIndex);
    }
}

function pullDreamIndex(){
    dreamIndex=localStorage.getItem("currentDreamIndex");
    if(dreamIndex="null"){
        dreamIndex=0;
        localStorage.setItem("currentDreamIndex",dreamIndex);
    }
}

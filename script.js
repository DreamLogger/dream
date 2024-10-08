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
    title.push(titleInput);
    type.push(typeInput);
    date.push(dateInput);
    description.push(descriptionInput);
}

function deleteEntry(){
    title.splice(dreamIndex);
    type.splice(dreamIndex);
    date.splice(dreamIndex);
    description.splice(dreamIndex);
    dreamIndex--;
    localStorage.setItem("dreamIndex",dreamIndex);
}

function pullLocalData(){
    pullDreamIndex();
    title.splice(0,dreamIndex+1);
    type.splice(0,dreamIndex+1);
    date.splice(0,dreamIndex+1);
    description.splice(0,dreamIndex+1);
    for (let i=0;i<dreamIndex+1;i++) {
        title.push(localStorage.getItem("title"+i));
        type.push(localStorage.getItem("type"+i));
        date.push(localStorage.getItem("date"+i));
        description.push(localStorage.getItem("description"+i));
    }
    dreamIndex++;
    localStorage.setItem("dreamIndex",dreamIndex)
}

function storeLocalData(){
    pullDreamIndex();
    localStorage.setItem("title"+dreamIndex,title[dreamIndex]);
    localStorage.setItem("type"+dreamIndex,type[dreamIndex]);
    localStorage.setItem("date"+dreamIndex,date[dreamIndex]);
    localStorage.setItem("description"+dreamIndex,description[dreamIndex]);
    localStorage.setItem("dreamIndex",dreamIndex)
}

function pullDreamIndex(){
    dreamIndex=localStorage.getItem("dreamIndex") 
    if(dreamIndex="null"){
        dreamIndex=0
        localStorage.setItem("dreamIndex")
    }
}

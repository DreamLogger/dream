//Arrays//
let title=[];
let type=[];
let date=[];
let favorite=[];
let description=[];
//Arrays//

//Input variables//
let titleInput;
let typeInput;
let dateInput;
let favoriteInput;
let descriptionInput;
//Input variables//

//Logic variables//
let dreamIndex;
let chosenIndex;
//Logic variables//

function gatherInputs(){
    titleInput=document.getElementById("titleInput").value;
    typeInput=document.getElementById("typeInput").value;
    dateInput=document.getElementById("dateInput").value;
    favoriteInput=document.getElementById("favoriteInput").checked;
    descriptionInput=document.getElementById("descriptionInput").value;
}

function pushEntry(){
    title.push(titleInput);
    type.push(typeInput);
    date.push(dateInput);
    favorite.push(favoriteInput);
    description.push(descriptionInput);
    dreamIndex++;
    localStorage.setItem("currentDreamIndex",dreamIndex);
}

function deleteEntry(){
    title.splice(dreamIndex);
    type.splice(dreamIndex);
    date.splice(dreamIndex);
    favorite.splice(dreamIndex);
    description.splice(dreamIndex);
    dreamIndex--;
    localStorage.setItem("currentDreamIndex",dreamIndex); 
}

function pullLocalData(){
        pullDreamIndex();
        title.splice(0,title.length);
        type.splice(0,type.length);
        date.splice(0,date.length);
        favorite.splice(0,favorite.length);
        description.splice(0,description.length);
        if(localStorage.getItem("title0")!=null){
        for (let i=0;i<dreamIndex+1;i++) {
            title.push(localStorage.getItem("title"+i));
            type.push(localStorage.getItem("type"+i));
            date.push(localStorage.getItem("date"+i));
            favorite.push(localStorage.getItem("favorite"+i));
            description.push(localStorage.getItem("description"+i));
        }
    }
}

function storeLocalData(){
    pullDreamIndex();
    localStorage.clear;
    for (let i=0;i<dreamIndex+1;i++) {
        localStorage.setItem("title"+i,title[i]);
        localStorage.setItem("type"+i,type[i]);
        localStorage.setItem("date"+i,date[i]);
        localStorage.setItem("favorite"+i,favorite[i]);
        localStorage.setItem("description"+i,description[i]);
    }
    localStorage.setItem("currentDreamIndex",dreamIndex);
}

function pullDreamIndex(){
    dreamIndex=Number(localStorage.getItem("currentDreamIndex"));
    if(localStorage.getItem("currentDreamIndex")==null){
        dreamIndex=-1;
        localStorage.setItem("currentDreamIndex",dreamIndex);
    }
}
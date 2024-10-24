


//Defined Variables//
//Arrays/
//used to index user inputs
let title=[];
let type=[];
let date=[];
let favorite=[];
let description=[];
//^
//Arrays/

//Input variables/
//used to gather user inputs
let titleInput;
let typeInput;
let dateInput;
let favoriteInput;
let descriptionInput;
//^
//Input variables/

//Logic variables/
//tracks highest index stored in local storage
let dreamIndex;
//tracks index chosen to be deleted
let deleteIndex;
//Logic variables/
//Defined Variables//



//Functions//
//gathers all user inputs
function gatherInputs(){
    titleInput=document.getElementById("titleInput").value;
    typeInput=document.getElementById("typeInput").value;
    dateInput=document.getElementById("dateInput").value;
    favoriteInput=document.getElementById("favoriteInput").checked;
    descriptionInput=document.getElementById("descriptionInput").value;
}

//pushes inputs into respective arrays, updates dreamIndex
function pushEntry(){
    title.push(titleInput);
    type.push(typeInput);
    date.push(dateInput);
    favorite.push(favoriteInput);
    description.push(descriptionInput);
    dreamIndex++;
    localStorage.setItem("currentDreamIndex",dreamIndex);
}

//deletes user selected index, updates dreamIndex
function deleteEntry(){
    //stops user from deleting nothing
    if(Number(localStorage.getItem("currentDreamIndex"))>-1){
        title.splice(deleteIndex,1);
        type.splice(deleteIndex,1);
        date.splice(deleteIndex,1);
        favorite.splice(deleteIndex,1);
        description.splice(deleteIndex,1);
        dreamIndex--;
        localStorage.setItem("currentDreamIndex",dreamIndex); 
    }
}

//pulls data from LocalStorage for use
function pullLocalData(){
        pullDreamIndex();
        //clears old arrays
        title.splice(0,title.length);
        type.splice(0,type.length);
        date.splice(0,date.length);
        favorite.splice(0,favorite.length);
        description.splice(0,description.length);
        //checks that data besides dreamIndex is stored
        if(localStorage.getItem("title0")!=null){
        //pushes LocalData into arrays
        for (let i=0;i<dreamIndex+1;i++) {
            title.push(localStorage.getItem("title"+i));
            type.push(localStorage.getItem("type"+i));
            date.push(localStorage.getItem("date"+i));
            favorite.push(localStorage.getItem("favorite"+i));
            description.push(localStorage.getItem("description"+i));
        }
    }
}

//stores LocalData in LocalStorage
function storeLocalData(){
    pullDreamIndex();
    //prepares LocalStorage for storing data
    localStorage.clear();
    //pushes all data to LocalStorage
    for (let i=0;i<dreamIndex+1;i++) {
        localStorage.setItem("title"+i,title[i]);
        localStorage.setItem("type"+i,type[i]);
        localStorage.setItem("date"+i,date[i]);
        localStorage.setItem("favorite"+i,favorite[i]);
        localStorage.setItem("description"+i,description[i]);
    }
    localStorage.setItem("currentDreamIndex",dreamIndex);
}

//pulls only dreamIndex for logic purposes 
function pullDreamIndex(){
    dreamIndex=Number(localStorage.getItem("currentDreamIndex"));
    //if there is no dreamIndex stored, set to -1
    if(localStorage.getItem("currentDreamIndex")==null){
        dreamIndex=-1;
        localStorage.setItem("currentDreamIndex",dreamIndex);
    }
}
//Functions//
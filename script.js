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


document.querySelector("saveBtn").addEventListener("click",function(){
    gatherInputs();
    saveEntry();
    console.log(title,0)
    console.log(type,0)
});

function gatherInputs(){
    var titleInput=getText("titleInput");
    var typeInput=getText("typeInput");
    var titleInput=getText("dateInput");
    var titleInput=getText("descriptionInput");
}

function saveEntry(){
    appenditem(title,titleInput);
    appenditem(type,typeInput);
    appenditem(date,dateInput);
    appenditem(description,descriptionInput);
}

function storeLocalData(){

}



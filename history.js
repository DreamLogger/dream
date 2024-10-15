
let currentHigh=dreamIndex;
let currentLow=dreamIndex-5;
let initialDreamOutputs;
let matrix=[];

pullDreamIndex();
constructMatrix();
function constructMatrix(){
    let matrixTitle=[];
    let matrixType=[];
    let matrixDate=[];
    let matrixFavorite=[];
    let matrixDescription=[];
    for (let i=0;i<dreamIndex+1;i++) {
        matrixTitle.push(localStorage.getItem("title"+i));
        matrixType.push(localStorage.getItem("type"+i));
        matrixDate.push(localStorage.getItem("date"+i));
        matrixFavorite.push(localStorage.getItem("favorite"+i));
        matrixDescription.push(localStorage.getItem("description"+i));
    }
matrix.push(matrixTitle);
matrix.push(matrixType);
matrix.push(matrixDate);
matrix.push(matrixFavorite);
matrix.push(matrixDescription);
}

initializeHistory();
function initializeHistory(){
    if(dreamIndex>=4){
        initialDreamOutputs=5;
    }else{
        initialDreamOutputs=dreamIndex+1;
    }
    for (let i=0;i<initialDreamOutputs;i++) {
        document.getElementById("titleOutput"+i).value = matrix[0][dreamIndex-i];
        //document.getElementById("typeOutput"+i)value = matrix[1][dreamIndex-i];
        document.getElementById("dateOutput"+i).value = matrix[2][dreamIndex-i];
        //document.getElementById("favoriteOutput"+i).setAttribute("value",localStorage.getItem("favorite"+(dreamIndex-i)));
        document.getElementById("descriptionOutput"+i).value = matrix[4][dreamIndex-i];
    }
}

document.getElementById("increaseIndexBtn").addEventListener("click", function(){
    if(dreamIndex>=5){
        let increaseAmmount;
        if(dreamIndex-currentHigh>=5){
            increaseAmmount=5
        }else{
            increaseAmmount=dreamIndex-currentHigh
        }
        for (let i=0;i<5;i++) {
            document.getElementById("titleOutput"+i).setAttribute("value",localStorage.getItem("title"+(currentHigh+increaseAmmount-i)));
            //document.getElementById("typeOutput"+i).setAttribute("value",localStorage.getItem("type"+(currentHigh+increaseAmmount-i)));
            document.getElementById("dateOutput"+i).setAttribute("value",localStorage.getItem("date"+(currentHigh+increaseAmmount-i)));
           // document.getElementById("favoriteOutput"+i).setAttribute("value",localStorage.getItem("favorite"+(currentHigh+increaseAmmount-i)));
            document.getElementById("descriptionOutput"+i).setAttribute("value",localStorage.getItem("description"+(currentHigh+increaseAmmount-i)));
        }
        currentHigh=currentHigh+increaseAmmount
        currentLow=currentLow+increaseAmmount
    }
});

document.getElementById("decreaseIndexBtn").addEventListener("click", function(){
    if(dreamIndex>=5){
        let decreaseAmmount;
        if(currentLow>=5){
            decreaseAmmount=5
        }else{
            decreaseAmmount=currentLow
        }
        for (let i=4;i>-1;i--) {
            document.getElementById("titleOutput"+i).setAttribute("value",localStorage.getItem("title"+(currentLow-decreaseAmmount-i+4)));
            //document.getElementById("typeOutput"+i).setAttribute("value",localStorage.getItem("type"+(currentLow-decreaseAmmount-i+4)));
            document.getElementById("dateOutput"+i).setAttribute("value",localStorage.getItem("date"+(currentLow-decreaseAmmount-i+4)));
            //document.getElementById("favoriteOutput"+i).setAttribute("value",localStorage.getItem("favorite"+(currentLow-decreaseAmmount-i+4)));
            document.getElementById("descriptionOutput"+i).setAttribute("value",localStorage.getItem("description"+(currentLow-decreaseAmmount-i+4)));
        }
        currentHigh=currentHigh-decreaseAmmount
        currentLow=currentLow-decreaseAmmount
    }
});

/*
document.getElementById("deleteDreamBtn").addEventListener("click", function(){
    pullLocalData();
    deleteEntry();
    storeLocalData();
});
*/

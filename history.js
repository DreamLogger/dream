
pullmatrixLength();

let currentHigh=matrixLength;
let currentLow=matrixLength-5;
let initialDreamOutputs;
let matrixLength;
let matrix=[];

constructMatrix();
function constructMatrix(){
    let matrixIndex=[];
    let matrixTitle=[];
    let matrixType=[];
    let matrixDate=[];
    let matrixFavorite=[];
    let matrixDescription=[];
        for (let i=0;i<matrixLength+1;i++) {
            matrixIndex.push(i);
            matrixTitle.push(localStorage.getItem("title"+i));
            matrixType.push(localStorage.getItem("type"+i));
            matrixDate.push(localStorage.getItem("date"+i));
            matrixFavorite.push(localStorage.getItem("favorite"+i));
            matrixDescription.push(localStorage.getItem("description"+i));
        }
    if(document.getElementById("Oldest").checked){
        matrixIndex.reverse();
        matrixTitle.reverse();
        matrixType.reverse();
        matrixDate.reverse();
        matrixFavorite.reverse();
        matrixdes.reverse();
    }if(document.getElementById("Favorite").checked){
        for (let i=0;i<matrixIndex.length;i++){
            if (matrixFavorite[i]==false){
                matrixIndex.splice(i,1);
                matrixTitle.splice(i,1);
                matrixType.splice(i,1);
                matrixDate.splice(i,1);
                matrixFavorite.splice(i,1);
                matrixDescription.splice(i,1);
            }
        }
    }
matrix.push(matrixIndex);
matrix.push(matrixTitle);
matrix.push(matrixType);
matrix.push(matrixDate);
matrix.push(matrixFavorite);
matrix.push(matrixDescription);
matrixLength=matrixIndex.length-1
}

initializeHistory();
function initializeHistory(){
    if(matrixLength>=4){
        initialDreamOutputs=5;
    }else{
        initialDreamOutputs=matrixLength+1;
    }
    for (let i=0;i<initialDreamOutputs;i++){
        document.getElementById("titleOutput"+i).value = matrix[1][matrixLength-i];
        //document.getElementById("typeOutput"+i)value = matrix[2][matrixLength-i];
        document.getElementById("dateOutput"+i).value = matrix[3][matrixLength-i];
        //document.getElementById("favoriteOutput"+i).setAttribute("value",localStorage.getItem("favorite"+(matrixLength-i)));
        document.getElementById("descriptionOutput"+i).value = matrix[5][matrixLength-i];
    }
}

document.getElementById("Newest").addEventListener("click", function(){
    constructMatrix();
    initializeHistory();
});
document.getElementById("Oldest").addEventListener("click", function(){

});
document.getElementById("Favorite").addEventListener("click", function(){

});

document.getElementById("increaseIndexBtn").addEventListener("click", function(){
    if(matrixLength>=5){
        let increaseAmmount;
        if(matrixLength-currentHigh>=4){
            increaseAmmount=4
        }else{
            increaseAmmount=matrixLength-currentHigh
        }
        for (let i=0;i<5;i++) {
            document.getElementById("titleOutput"+i).value = matrix[1][currentHigh+increaseAmmount-i];
            //document.getElementById("typeOutput"+i).value = matrix[2][currentHigh+increaseAmmount-i];
            document.getElementById("dateOutput"+i).value = matrix[3][currentHigh+increaseAmmount-i];
           // document.getElementById("favoriteOutput"+i).setAttribute("value",localStorage.getItem("favorite"+(currentHigh+increaseAmmount-i)));
            document.getElementById("descriptionOutput"+i).value = matrix[5][currentHigh+increaseAmmount-i];
        }
        currentHigh=currentHigh+increaseAmmount
        currentLow=currentLow+increaseAmmount
    }
});

document.getElementById("decreaseIndexBtn").addEventListener("click", function(){
    if(matrixLength>=5){
        let decreaseAmmount;
        if(currentLow>=4){
            decreaseAmmount=4
        }else{
            decreaseAmmount=currentLow
        }
        for (let i=4;i>-1;i--) {
            document.getElementById("titleOutput"+i).value = matrix[1][currentLow-decreaseAmmount-i+4];
            //document.getElementById("typeOutput"+i).value = matrix[2][currentLow-decreaseAmmount-i+4];
            document.getElementById("dateOutput"+i).value = matrix[3][currentLow-decreaseAmmount-i+4];
            //document.getElementById("favoriteOutput"+i).setAttribute("value",localStorage.getItem("favorite"+(currentLow-decreaseAmmount-i+4)));
            document.getElementById("descriptionOutput"+i).value = matrix[5][currentLow-decreaseAmmount-i+4];
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

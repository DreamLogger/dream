
pullDreamIndex();

let currentHigh;
let currentLow;
let matrixLargestIndex;

let matrix=[];

constructMatrix();
function constructMatrix(){
    let matrixIndex=[];
    let matrixTitle=[];
    let matrixType=[];
    let matrixDate=[];
    let matrixFavorite=[];
    let matrixDescription=[];
    matrix.splice(0,matrix.length);
        for (let i=0;i<dreamIndex+1;i++) {
            matrixIndex.push(i);
            matrixTitle.push(localStorage.getItem("title"+i));
            matrixType.push(localStorage.getItem("type"+i));
            matrixDate.push(localStorage.getItem("date"+i));
            matrixFavorite.push(localStorage.getItem("favorite"+i));
            matrixDescription.push(localStorage.getItem("description"+i));
        }
    if(document.getElementById("dropdown1").checked){
        matrixIndex.reverse();
        matrixTitle.reverse();
        matrixType.reverse();
        matrixDate.reverse();
        matrixFavorite.reverse();
        matrixDescription.reverse();
    }
    if(document.getElementById("dropdown2").checked){
        for (let i=0;i<matrixIndex.length;i++){
            if (matrixFavorite[i]=="false"){
                matrixIndex.splice(i,1);
                matrixTitle.splice(i,1);
                matrixType.splice(i,1);
                matrixDate.splice(i,1);
                matrixFavorite.splice(i,1);
                matrixDescription.splice(i,1);
                i--;
            }
        }
    }
matrix.push(matrixIndex);
matrix.push(matrixTitle);
matrix.push(matrixType);
matrix.push(matrixDate);
matrix.push(matrixFavorite);
matrix.push(matrixDescription);
matrixLargestIndex=matrixIndex.length-1;
currentHigh=matrixLargestIndex;
currentLow=matrixLargestIndex-5;
}

setHistory();
function setHistory(){
    for (let i=0;i<5;i++){
        if(matrix[0][i]==null){
        document.getElementById("titleOutput"+i).value = null;
        document.getElementById("typeOutput"+i).value = null;
        document.getElementById("dateOutput"+i).value = null;
        document.getElementById("descriptionOutput"+i).value = null;
        }else{
        document.getElementById("titleOutput"+i).value = matrix[1][matrixLargestIndex-i];
        document.getElementById("typeOutput"+i).value = matrix[2][matrixLargestIndex-i];
        document.getElementById("dateOutput"+i).value = matrix[3][matrixLargestIndex-i];
        document.getElementById("descriptionOutput"+i).value = matrix[5][matrixLargestIndex-i];
        }
    }
}

for (let i=0;i<3;i++) {
    document.getElementById("dropdown"+i).addEventListener("click", function(){
        constructMatrix();
        setHistory();
    });
}

document.getElementById("increaseIndexBtn").addEventListener("click", function(){
    if(matrixLargestIndex>=5){
        let increaseAmmount;
        if(matrixLargestIndex-currentHigh>=4){
            increaseAmmount=4;
        }else{
            increaseAmmount=matrixLargestIndex-currentHigh;
        }
        for (let i=0;i<5;i++) {
            document.getElementById("titleOutput"+i).value = matrix[1][currentHigh+increaseAmmount-i];
            document.getElementById("typeOutput"+i).value = matrix[2][currentHigh+increaseAmmount-i];
            document.getElementById("dateOutput"+i).value = matrix[3][currentHigh+increaseAmmount-i];
            document.getElementById("descriptionOutput"+i).value = matrix[5][currentHigh+increaseAmmount-i];
        }
        currentHigh=currentHigh+increaseAmmount;
        currentLow=currentLow+increaseAmmount;
    }
});

document.getElementById("decreaseIndexBtn").addEventListener("click", function(){
    if(matrixLargestIndex>=5){
        let decreaseAmmount;
        if(currentLow>=4){
            decreaseAmmount=4;
        }else{
            decreaseAmmount=currentLow;
        }
        for (let i=4;i>-1;i--) {
            document.getElementById("titleOutput"+i).value = matrix[1][currentLow-decreaseAmmount-i+4];
            document.getElementById("typeOutput"+i).value = matrix[2][currentLow-decreaseAmmount-i+4];
            document.getElementById("dateOutput"+i).value = matrix[3][currentLow-decreaseAmmount-i+4];
            document.getElementById("descriptionOutput"+i).value = matrix[5][currentLow-decreaseAmmount-i+4];
        }
        currentHigh=currentHigh-decreaseAmmount;
        currentLow=currentLow-decreaseAmmount;
    }
});

for (let i=0;i<5;i++) {
    document.getElementById("deleteBtn"+i).addEventListener("click", function(){
        let matrixIndex=matrix[0]
        deleteIndex=matrixIndex[currentHigh-i];
        if(deleteIndex>=0){
            pullLocalData();
            deleteEntry();
            storeLocalData();
            constructMatrix();
            setHistory();
        }
    });
}

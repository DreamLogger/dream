


//Defined Variables//
//hihest dream index displayed
let currentHigh;
//lowest dream index displayed
let currentLow;
//largest index in the current matrix
let matrixLargestIndex;
//2d array used to sort data
let matrix=[];
//Defined Variables



//Initialized Functions//
//pulls dream index on page startup
pullDreamIndex();
//constructs matrix for newest dreams
constructMatrix();
//applies matrix to output fields
setHistory();
//Innitialized Functions//



//Event Listeners//
//click listeners for all sorting dropdowns
for (let i=0;i<3;i++) {
    document.getElementById("dropdown"+i).addEventListener("click", function(){
        constructMatrix();
        setHistory();
    });
}

//click listener for increasing view with the left button
document.getElementById("increaseIndexBtn").addEventListener("click", function(){
    //determines how much the view can be increased
    if(matrixLargestIndex>=5){
        let increaseAmmount;
        if(matrixLargestIndex-currentHigh>=4){
            increaseAmmount=4;
        }else{
            increaseAmmount=matrixLargestIndex-currentHigh;
        }
        //displays increased view
        for (let i=0;i<5;i++) {
            document.getElementById("titleOutput"+i).value = matrix[1][currentHigh+increaseAmmount-i];
            document.getElementById("typeOutput"+i).value = matrix[2][currentHigh+increaseAmmount-i];
            document.getElementById("dateOutput"+i).value = matrix[3][currentHigh+increaseAmmount-i];
            document.getElementById("descriptionOutput"+i).value = matrix[5][currentHigh+increaseAmmount-i];
        }
        //increases tracking variables
        currentHigh=currentHigh+increaseAmmount;
        currentLow=currentLow+increaseAmmount;
    }
});

//click listener for decreasing view with right button
document.getElementById("decreaseIndexBtn").addEventListener("click", function(){
    //determines how much the view can be decreased
    if(matrixLargestIndex>=5){
        let decreaseAmmount;
        if(currentLow>=4){
            decreaseAmmount=4;
        }else{
            decreaseAmmount=currentLow;
        }
        //displays decreased view
        for (let i=4;i>-1;i--) {
            document.getElementById("titleOutput"+i).value = matrix[1][currentLow-decreaseAmmount-i+4];
            document.getElementById("typeOutput"+i).value = matrix[2][currentLow-decreaseAmmount-i+4];
            document.getElementById("dateOutput"+i).value = matrix[3][currentLow-decreaseAmmount-i+4];
            document.getElementById("descriptionOutput"+i).value = matrix[5][currentLow-decreaseAmmount-i+4];
        }
        //decreases tracking variables
        currentHigh=currentHigh-decreaseAmmount;
        currentLow=currentLow-decreaseAmmount;
    }
});

//click listeners for all delete buttons
for (let i=0;i<5;i++) {
    document.getElementById("deleteBtn"+i).addEventListener("click", function(){
        //retrieves index row from matrix and determines which index is being deleted
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
//Event Listeners//



//Functions//
//constructs and sorts the 2d array used to output data
function constructMatrix(){
    //defines variables used to construct matrix
    let matrixIndex=[];
    let matrixTitle=[];
    let matrixType=[];
    let matrixDate=[];
    let matrixFavorite=[];
    let matrixDescription=[];
    //resets current matrix
    matrix.splice(0,matrix.length);
    //pushes all local storage into matrix
    for (let i=0;i<dreamIndex+1;i++) {
        matrixIndex.push(i);
        matrixTitle.push(localStorage.getItem("title"+i));
        matrixType.push(localStorage.getItem("type"+i));
        matrixDate.push(localStorage.getItem("date"+i));
        matrixFavorite.push(localStorage.getItem("favorite"+i));
        matrixDescription.push(localStorage.getItem("description"+i));
    }
    //checks for "oldest" checked, if true sort oldest
    if(document.getElementById("dropdown1").checked){
        matrixIndex.reverse();
        matrixTitle.reverse();
        matrixType.reverse();
        matrixDate.reverse();
        matrixFavorite.reverse();
        matrixDescription.reverse();
    }
    //checks for "favorites" checked, if true sort favorites
    if(document.getElementById("dropdown2").checked){
        //checks if favorite is true for all dreams, if false remove from matrix
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
//pushes all arrays into 2d array
matrix.push(matrixIndex);
matrix.push(matrixTitle);
matrix.push(matrixType);
matrix.push(matrixDate);
matrix.push(matrixFavorite);
matrix.push(matrixDescription);
//updates tracking variables
matrixLargestIndex=matrixIndex.length-1;
currentHigh=matrixLargestIndex;
currentLow=matrixLargestIndex-5;
}

//outputs matrix data into output fields
function setHistory(){
    for (let i=0;i<5;i++){
        //checks if there is no data, if so value=null
        if(matrix[0][i]==null){
        document.getElementById("titleOutput"+i).value = null;
        document.getElementById("typeOutput"+i).value = null;
        document.getElementById("dateOutput"+i).value = null;
        document.getElementById("descriptionOutput"+i).value = null;
        //if there is data, display it
        }else{
        document.getElementById("titleOutput"+i).value = matrix[1][matrixLargestIndex-i];
        document.getElementById("typeOutput"+i).value = matrix[2][matrixLargestIndex-i];
        document.getElementById("dateOutput"+i).value = matrix[3][matrixLargestIndex-i];
        document.getElementById("descriptionOutput"+i).value = matrix[5][matrixLargestIndex-i];
        }
    }
}
//Functions//

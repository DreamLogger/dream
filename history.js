
//initialize 5 last dreams logged//
pullDreamIndex();
let currentHigh=dreamIndex;
let currentLow=dreamIndex-5;
let initialDreamOutputs;
if(dreamIndex>=4){
    initialDreamOutputs=5;
}else{
    initialDreamOutputs=dreamIndex+1;
}
for (let i=0;i<initialDreamOutputs;i++) {
    document.getElementById("titleOutput"+i).setAttribute("label",localStorage.getItem("title"+(dreamIndex-i)));
    document.getElementById("typeOutput"+i).setAttribute("label",localStorage.getItem("type"+(dreamIndex-i)));
    document.getElementById("dateOutput"+i).setAttribute("label",localStorage.getItem("date"+(dreamIndex-i)));
    document.getElementById("favoriteOutput"+i).setAttribute("label",localStorage.getItem("favorite"+(dreamIndex-i)));
    document.getElementById("descriptionOutput"+i).setAttribute("label",localStorage.getItem("description"+(dreamIndex-i)));
}
//initialize 5 last dreams logged//

document.getElementById("increaseIndexBtn").addEventListener("click", function(){
    if(dreamIndex>=5){
        let increaseAmmount;
        if(dreamIndex-currentHigh>=5){
            increaseAmmount=5
        }else{
            increaseAmmount=dreamIndex-currentHigh
        }
        for (let i=0;i<5;i++) {
            document.getElementById("titleOutput"+i).setAttribute("label",localStorage.getItem("title"+(currentHigh+increaseAmmount-i)));
            document.getElementById("typeOutput"+i).setAttribute("label",localStorage.getItem("type"+(currentHigh+increaseAmmount-i)));
            document.getElementById("dateOutput"+i).setAttribute("label",localStorage.getItem("date"+(currentHigh+increaseAmmount-i)));
            document.getElementById("favoriteOutput"+i).setAttribute("label",localStorage.getItem("favorite"+(currentHigh+increaseAmmount-i)));
            document.getElementById("descriptionOutput"+i).setAttribute("label",localStorage.getItem("description"+(currentHigh+increaseAmmount-i)));
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
        for (let i=4;i>0;i--) {
            document.getElementById("titleOutput"+i).setAttribute("label",localStorage.getItem("title"+(currentLow-decreaseAmmount+i-4)));
            document.getElementById("typeOutput"+i).setAttribute("label",localStorage.getItem("type"+(currentLow-decreaseAmmount+i-4)));
            document.getElementById("dateOutput"+i).setAttribute("label",localStorage.getItem("date"+(currentLow-decreaseAmmount+i-4)));
            document.getElementById("favoriteOutput"+i).setAttribute("label",localStorage.getItem("favorite"+(currentLow-decreaseAmmount+i-4)));
            document.getElementById("descriptionOutput"+i).setAttribute("label",localStorage.getItem("description"+(currentLow-decreaseAmmount+i-4)));
        }
        currentHigh=currentHigh-decreaseAmmount
        currentLow=currentLow-decreaseAmmount
    }
});

document.getElementById("deleteDreamBtn").addEventListener("click", function(){
    pullLocalData();
    deleteEntry();
    storeLocalData();
});


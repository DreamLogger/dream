
// when save button is clicked, pull local data, gather inputs, append inputs to data, store local data.
document.getElementById("saveBtn").addEventListener("click", function(){
    pullLocalData();
    gatherInputs();
    pushEntry();
    storeLocalData();
});



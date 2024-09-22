var counter = 0;
var output = document.getElementById("counterOutput");
function countClicks(){
    counter +=1;
    counterOutput.innerHTML = counter ;
}
function resetCounter(){
    counter=0;
    counterOutput.innerHTML = counter ;
}
var evenNums = document.forms["evenNums"];

var startNumber = document.getElementById("startingNum");
var endingNumber = document.getElementById("endingNum");
var stepNumber = document.getElementById("step");   
var pHolder = document.getElementById("pHolder");
var button = document.getElementById("displayBtn");
var resetBtn = document.getElementById("resetBtn");

function resetView() {
    evenNums.className = "needs-validation";
}

resetBtn.addEventListener("click" ,function(){
    location.reload();
    return false;
});


function validate() {


    evenNums.className = "needs-validation";

    if (!evenNums.checkValidity()) {
        evenNums.className = "was-validated";
        return false;
    }

    document.getElementById("stNum").innerText = startNumber.value;
    document.getElementById("enNum").innerText = endingNumber.value;
    document.getElementById("spNum").innerText = stepNumber.value;
    var startN = parseInt(startNumber.value, 10);
    var endN = parseInt(endingNumber.value, 10);
    var stepN = parseInt(stepNumber.value, 10);
    calculate(startN, endN, stepN);

    return false;
}

function calculate(a, b, c){
    var pElement;
    if(a<b && b>c){
    for(var i=a;i<=b;i+=c){
        if(i%2===0){
            pElement = document.createElement("P");
            pElement.innerText = (i);
            // pElement.classList.add("displayNums");
            pHolder.appendChild(pElement);
        }
    }
    document.getElementById("mess").style.display = "block";
    document.getElementById("errorMess").style.display = "none";
    pHolder.style.display = "block";
}else{
    document.getElementById("mess").style.display = "none";
    document.getElementById("errorMess").style.display = "block";
    pHolder.style.display = "none";
}
    
}
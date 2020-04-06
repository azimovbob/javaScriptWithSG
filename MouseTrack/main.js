var mouseX = document.getElementById("mouseX");
var mouseY = document.getElementById("mouseY");
var tracking = false;
// function toggle(){
//     if(!tracking){
//         this.classList.remove("btn-success");
//         this.classList.add("btn-danger");

//     }else{
//         this.classList.remove("btn-danger");
//         this.classList.add("btn-success");
//         mouseX.innerText = "Untracked";
//         mouseY.innerText = "Untracked";
//     }

//     tracking = !tracking;

// }


document.getElementById("btnToggle").addEventListener("click", function(){
    this.classList.remove("btn-success");
    this.classList.add("btn-danger");
    document.getElementById("stopBtnToggle").classList.remove("btn-danger");
    document.getElementById("stopBtnToggle").classList.add("btn-success");
    tracking = true;
});

document.getElementById("stopBtnToggle").addEventListener("click", function(){
    this.classList.remove("btn-success");
    this.classList.add("btn-danger");
    document.getElementById("btnToggle").classList.remove("btn-danger");
    document.getElementById("btnToggle").classList.add("btn-success");
    mouseX.innerText = "Untracked";
    mouseY.innerText = "Untracked";
    tracking = false;
});

document.addEventListener("mousemove", function(evt){
    if(tracking){
        mouseX.innerText = evt.clientX;
        mouseY.innerText = evt.clientY;
    }
});
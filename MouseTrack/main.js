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


// document.getElementById("trackingBox").addEventListener("mosemove", function(){
//     // this.classList.remove("btn-success");
//     // this.classList.add("btn-danger");
//     // document.getElementById("stopBtnToggle").classList.remove("btn-danger");
//     // document.getElementById("stopBtnToggle").classList.add("btn-success");
//     tracking = !tracking;
//     if(!tracking){
//         mouseX.innerText = "Untracked";
//         mouseY.innerText = "Untracked";
//     }
// });

document.getElementById("trackingBox").addEventListener("mousemove", function(evt){
    
        mouseX.innerText = evt.clientX;
        mouseY.innerText = evt.clientY;
    
});

document.getElementById("container").addEventListener("mousemove", function(evt){
    
    mouseX.innerText = "Untracked";
    mouseY.innerText = "Untracked";

});



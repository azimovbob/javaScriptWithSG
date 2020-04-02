let button = document.getElementById("button");
const dice1 = document.querySelector(".dice1");
const dice2 = document.querySelector(".dice2");

button.addEventListener("click", anim);



function anim(){
    let num1 = Math.floor(Math.random()*6+1);
    let num2 = Math.floor(Math.random()*6+1);
    
    dice1.classList.add('animated', 'flipOutX', 'faster');
    dice2.classList.add('animated', 'flipInX', 'faster');
    document.querySelector(".dice1").src = `dice-${num1}.gif`;
    document.querySelector(".dice2").src = `dice-${num2}.gif`;
    dice1.addEventListener('animationend', remAnim);
    dice2.addEventListener('animationend', remAnim);

}


function remAnim(){
    dice1.classList.remove('animated', 'flipOutX', 'faster');
    dice2.classList.remove('animated', 'flipInX', 'faster');
}


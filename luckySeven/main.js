
var playBtn = document.getElementById("button");
document.getElementById("trackTable").style.display = "none";

playBtn.addEventListener("click", calculate);

function calculate(){
    var bet = parseInt(document.getElementById("bet").value, 10);
    var startBet = bet;
    var dice1 = Math.floor(Math.random()*6+1);
    var dice2 = Math.floor(Math.random()*6+1);
    var diceCount = 0;
    var highestCount = 0;
    var highestAmount = 0;
    document.getElementById("startingBet").innerText = bet;

    while(bet>0){
        
        diceCount++;
        bet--;

        if(highestAmount<bet){
            highestAmount=bet;
            highestCount=diceCount;
        }
        if((dice1+dice2)===7){
            bet+=4;
        }
        
        dice1 = Math.floor(Math.random()*6+1);
        dice2 = Math.floor(Math.random()*6+1);
        
        }

    if(startBet<1){
        document.getElementById("trackTable").style.display = "none";
        document.getElementById("errorMsg").style.display = "block";
        document.getElementById("bet").value = '';
    }
    else{
        document.getElementById("errorMsg").style.display = "none";
        document.getElementById("trackTable").style.display = "block";
        document.getElementById("totalSpans").innerText = diceCount;
        document.getElementById("highestAmount").innerText = highestAmount;
        document.getElementById("rollCountAtHighestAmount").innerText = highestCount;
    }
}
let timer = 60;
let score = 0;
let hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector('#score').innerText = score;
}

function createBubble() {

    let clutter = "";
    for (let i = 1; i < 153; i++) {
        let rn = Math.floor(Math.random() * 10)
        clutter += `<div class = "bubble">${rn}</div> `

    }
    document.querySelector('.pbottom').innerHTML = clutter

}


function setTimer() {

    let timerint = setInterval(() => {
        if (timer > 0) {
            timer--
            document.querySelector('#timer').innerHTML = timer;
        }
        else {
            clearInterval(timerint)
            document.querySelector('.pbottom').innerHTML = `<h1> Game Over </h1>`;
           
        }
    }, 1000);
}


function hitNum() {
    hitrn = Math.floor(Math.random() * 10)
    document.querySelector('#Hit').innerHTML = hitrn;
}


function finalScore(){
    
    document.querySelector('.pbottom').addEventListener('click',function(details){
        var selectnum = Number(details.target.textContent);
        if(selectnum == hitrn){
            increaseScore();
            hitNum();
        }
    })
}

createBubble();
setTimer();
hitNum();
finalScore();
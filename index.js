let num_selected = -1;
let score = 0;
const dice = [
    "./dice/1.png",
    "./dice/2.png",
    "./dice/3.png",
    "./dice/4.png",
    "./dice/5.png",
    "./dice/6.png",
];
function select(num) {
    document.getElementById("guess").innerHTML = num;
    num_selected = num;
}

function updateScore() {
    document.getElementById("score").innerHTML = score;
}

function changeDice() {
    let x = Math.ceil(Math.random() * 6);
    document.getElementById("imgDice").src = dice[x - 1];
    document.getElementById("btext").innerHTML =
        "Next round will start in a few seconds!";
    if (num_selected == -1) {
        document.getElementById("restext").style.color = "yellow";
        document.getElementById(
            "restext"
        ).innerHTML = `You didnt make a guess.`;
    } else if (x == num_selected) {
        document.getElementById("restext").style.color = "lightgreen";
        document.getElementById("restext").innerHTML = `Your Guess was right.`;
        score += 10;
        updateScore();
    } else {
        document.getElementById("restext").style.color = "red";
        document.getElementById("restext").innerHTML = `Your guess was wrong.`;
    }
    setTimeout(game, 2000);
    num_selected = -1;
    document.getElementById("guess").innerHTML = "No guess";
}

function timer() {
    var num = 5;
    function countdown() {
        if (num == -1) {
            changeDice();
            return;
        }
        document.getElementById(
            "btext"
        ).innerHTML = `The dice will change in ${num} seconds.`;
        num--;
        setTimeout(countdown, 1000);
    }
    countdown();
}
function game() {
    document.getElementById("restext").innerHTML = ``;
    setTimeout(timer, 1000);
}

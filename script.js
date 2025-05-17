const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const hrLine = document.getElementById("line");
const guide = document.getElementById("guide");
const alertBox = document.getElementById("alertBox");
const winner = document.getElementById("winner");
const restartBtn = document.getElementById("restartBtn");

let player = 0;
        
function isChosen() {

    if (this.innerHTML === "") {
        player++;
        write(player, this);
        isWinning();
        isEnded();
    } else {
        alertBox.style.display = "block";
        restartBtn.style.display = "none";
        okBtn.style.display = "block";
        winner.innerHTML = "Choose another field!";
    }
}

function write (player, box) {
    if (player % 2 == 0) {
        box.textContent = "O";
        box.style.color = "var(--blue)";
        hrLine.style.border = "3px solid var(--pink)";
        guide.innerHTML = "Click on a field to place your <b>X</b> choice.";
    } else {
        box.textContent = "X";
        box.style.color = "var(--pink)"; 
        hrLine.style.border = "3px solid var(--blue)";
        guide.innerHTML = "Click on a field to place your <b>O</b> choice."
    }
}

const fields = [
    one,two,three,four,five,six,seven,eight,nine
]

fields.forEach(item => {item.addEventListener("click", isChosen)});

const winningCombos = [
    [one,two,three],
    [four,five,six], 
    [seven,eight,nine],
    [one,five,nine],
    [three,five,seven],
    [one,four,seven],
    [two,five,eight],
    [three,six,nine]
]

let hasWon = 0;
 
function isWinning () {
    for (let i = 0; i < winningCombos.length; i++) {
        let x1 = winningCombos[i][0].innerHTML;
        let x2 = winningCombos[i][1].innerHTML;
        let x3 = winningCombos[i][2].innerHTML;
        if (x1 == x2 && x2 == x3 && x1 !== "") {
            if (x1== "X") {
                hasWon = 1;
                alertBox.style.display = "block";
                restartBtn.style.display = "block";
                okBtn.style.display = "none";
                winner.textContent = "Pink has won!";
            } else {
                hasWon = 1;
                alertBox.style.display = "block";
                restartBtn.style.display = "block";
                okBtn.style.display = "none";
                winner.innerHTML = "Blue has won!";
            }
        }
    }
}

function okay() {
    alertBox.style.display = "none";
}

function restart () {
    fields.forEach(item => {item.innerHTML = ""});
    guide.innerHTML = "Click on a field to place your <b>X</b> choice.";
    hrLine.style.border = "3px solid var(--pink)";
    alertBox.style.display = "none";
    player = 0;
    hasWon = 0;
}

function isEnded () {
    if (hasWon === 0 && fields.every(box => box.innerHTML !== "")) {
        alertBox.style.display = "block";
        winner.textContent = "No winner this time!";
    }
}
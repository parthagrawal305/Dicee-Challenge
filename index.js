var dicenumber1 = Math.floor(Math.random() * 6) + 1;
var dicenumber2 = Math.floor(Math.random() * 6) + 1;
console.log("Player1 : ", dicenumber1, "\nPlayer2 : ", dicenumber2);

var image1 = "images/dice" + dicenumber1 + ".png";
var image2 = "images/dice" + dicenumber2 + ".png";

document.getElementById('img1').src = image1;
document.getElementById('img2').src = image2;

if (dicenumber1 > dicenumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
} else if (dicenumber1 < dicenumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}

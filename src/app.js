let myNumberArray = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

let myPintaArray = ["♥", "♣", "♠", "♦"];

let divPinta = document.querySelectorAll(".pinta");
let pPinta = document.createElement("p");
let divNumber = document.querySelector("#numero");
let pNumber = document.createElement("p");
divNumber.appendChild(pNumber);
divPinta.forEach(pPinta => {
  const p = document.createElement("p");
  pPinta.appendChild(p);
});
function getRandomNumber() {
  return myNumberArray[Math.floor(Math.random() * myNumberArray.length)];
}
document.querySelector("#numero").children[0].innerHTML = getRandomNumber();
function getRandomPinta() {
  return myPintaArray[Math.floor(Math.random() * myPintaArray.length)];
}
window.onload = () => {
  pinta;
};
let pinta = getRandomPinta();
if (pinta === "♥" || pinta === "♦") {
  document.querySelector("#pinta1").children[0].classList.add("red");
  document.querySelector("#pinta2").children[0].classList.add("red");
  document.querySelector("#numero").children[0].classList.add("red");
} else {
  document.querySelector("#pinta1").children[0].classList.add("black");
  document.querySelector("#pinta2").children[0].classList.add("black");
}
document.querySelector("#pinta1").children[0].innerHTML = pinta;
document.querySelector("#pinta2").children[0].innerHTML = pinta;

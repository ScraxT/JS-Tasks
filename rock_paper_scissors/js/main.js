let contestantOne;
let contestantTwo;
let contNumber = true;

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const contOneButton = document.getElementById('contestantOne');
const contTwoButton = document.getElementById('contestantTwo');
const resultButton = document.getElementById('result');

rockButton.addEventListener('click', () => {
    if (contNumber) {
        contestantOne = 'rock';}
    else {
        contestantTwo = 'rock';}
    console.log(contestantOne, contestantTwo);});

paperButton.addEventListener('click', () => {
    if (contNumber) {
        contestantOne = 'paper';}
    else {
        contestantTwo = 'paper';}
    console.log(contestantOne, contestantTwo);});

scissorsButton.addEventListener('click', () => {
    if (contNumber) {
        contestantOne = 'scissors';}
    else {
        contestantTwo = 'scissors';}
    console.log(contestantOne, contestantTwo);});

contOneButton.addEventListener('click', () => {
    contNumber = true;
    });

contTwoButton.addEventListener('click', () => {
    contNumber = false;
    });

resultButton.addEventListener('click', () => {
    if (contestantOne === contestantTwo && contestantOne !== undefined) {
        alert("It's a tie!");}
    else if ((contestantOne === 'rock' && contestantTwo === 'scissors') ||
             (contestantOne === 'paper' && contestantTwo === 'rock') ||
             (contestantOne === 'scissors' && contestantTwo === 'paper')) {
        alert("Contestant One wins!");}
    else if ((contestantTwo === 'rock' && contestantOne === 'scissors') ||
             (contestantTwo === 'paper' && contestantOne === 'rock') ||
             (contestantTwo === 'scissors' && contestantOne === 'paper')) {
        alert("Contestant Two wins!");}
    else {
        alert("Please make sure both contestants have made a choice.");}});
      
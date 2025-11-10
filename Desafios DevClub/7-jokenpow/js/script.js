const result = document.querySelector('.result');
const humanScoreSpan = document.getElementById('human-score');
const machineScoreSpan = document.getElementById('machine-score');

let humanScoreNumber = 0;
let machineScoreNumber = 0;


const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine());

}


const playMachine = () => {
    const choice = ['rock', 'paper', 'scissors'];

    const randomNumber = Math.floor(Math.random() * 3);

    return choice[randomNumber];
}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + ' Maquina: ' + machine);

    if (human === machine) {
        result.innerHTML = 'Empate!';
    } else if (
        (human === 'rock' && machine === 'scissors') ||
        (human === 'paper' && machine === 'rock') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++;
        humanScoreSpan.innerHTML = humanScoreNumber;
        result.innerHTML = 'Você ganhou!';
    } else {
        machineScoreNumber++;
        machineScoreSpan.innerHTML = machineScoreNumber;
        result.innerHTML = 'Você perdeu!';
    }

}

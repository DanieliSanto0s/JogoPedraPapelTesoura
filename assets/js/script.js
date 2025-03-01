let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    var escolha = ['pedra', 'papel', 'tesoura'];
    var sorteioPalavra = escolha[Math.floor(Math.random() * escolha.length)];
    return sorteioPalavra;
}

function getHumanChoice() {
    let escolhaHumano = prompt('Escolha entre pedra, papel ou tesoura!');
    if (!escolhaHumano) return ''; 
    return escolhaHumano.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if ((computerChoice === 'tesoura' && humanChoice === 'pedra') || 
        (computerChoice === 'papel' && humanChoice === 'tesoura') || 
        (computerChoice === 'pedra' && humanChoice === 'papel')) {

        console.log(`Você escolheu ${humanChoice}, o computador escolheu ${computerChoice}. Você venceu!`);
        humanScore++;

    } else if (computerChoice === humanChoice) {

        console.log(`Você escolheu ${humanChoice}, o computador escolheu ${computerChoice}. Empate!`);

    } else {

        console.log(`Você escolheu ${humanChoice}, o computador escolheu ${computerChoice}. Você perdeu!`);
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(`Rodada ${i + 1}`);
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log('\nResultado Final:');
    if (humanScore === computerScore) {
        console.log('Empate!!!');
    } else if (humanScore > computerScore) {
        console.log('Parabéns, você venceu!!!');
    } else {
        console.log('O computador venceu!!!');
    }
}

playGame();

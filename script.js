const choices = ['rock', 'paper', 'scissors'];
const resultText = document.getElementById('result-text');
const playerChoiceText = document.getElementById('player-choice');
const computerChoiceText = document.getElementById('computer-choice');

const buttons = document.querySelectorAll('.choice');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const playerChoice = this.id;
        const computerChoice = getComputerChoice();
        const winner = determineWinner(playerChoice, computerChoice);
        
        playerChoiceText.textContent = playerChoice;
        computerChoiceText.textContent = computerChoice;
        resultText.textContent = winner;
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock')
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

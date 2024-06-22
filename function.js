function paper() {
    document.getElementById('humanimagecont').innerHTML = '<img src="p1.png" alt="Paper">';
    document.getElementById('humanChoice').value = 'paper';
}

function rock() {
    document.getElementById('humanimagecont').innerHTML = '<img src="r1.png" alt="Rock">';
    document.getElementById('humanChoice').value = 'rock';
}

function scissor() {
    document.getElementById('humanimagecont').innerHTML = '<img src="s1.png" alt="Scissor">';
    document.getElementById('humanChoice').value = 'scissor';
}

function play() {
    const choices = ['rock', 'paper', 'scissor'];
    const botChoice = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById('bot').innerHTML = botChoice;

    if (botChoice === 'rock') {
        document.getElementById('imagecont').innerHTML = '<img src="r1.png" alt="Rock">';
    } else if (botChoice === 'paper') {
        document.getElementById('imagecont').innerHTML = '<img src="p1.png" alt="Paper">';
    } else {
        document.getElementById('imagecont').innerHTML = '<img src="s1.png" alt="Scissor">';
    }

    const humanChoice = document.getElementById('humanChoice').value;
    determineWinner(humanChoice, botChoice);
}

function determineWinner(humanChoice, botChoice) {
    if (humanChoice === botChoice) {
        document.getElementById('w1').innerHTML = 'TIE!';
        document.getElementById('w2').innerHTML = 'TIE!';
    } else if ((humanChoice === 'rock' && botChoice === 'scissor') || 
               (humanChoice === 'paper' && botChoice === 'rock') || 
               (humanChoice === 'scissor' && botChoice === 'paper')) {
        document.getElementById('w1').innerHTML = 'WINNER';
        document.getElementById('w2').innerHTML = '';
    } else {
        document.getElementById('w1').innerHTML = '';
        document.getElementById('w2').innerHTML = 'WINNER';
    }
}
const overlay = document.querySelector('#overlay');
const title = document.querySelector('.title');
const startButton = document.querySelector('.btn__reset');
const phraseDiv = document.querySelector('#phrase');
const phraseList = phraseDiv.querySelector('ul');
const letter = document.getElementsByClassName('letter');
const show = document.getElementsByClassName('show');
const qwertyDiv = document.querySelector('#qwerty');  
const letterButtons = qwertyDiv.querySelectorAll('button');
const scoreboard = document.querySelector('#scoreboard');
const scoreboardLi = scoreboard.querySelectorAll('.tries');
let missed = 0;
const phrases = [
    'JavaScript is the best programming language',
    'You dont know what you dont know',
    'Check out Peer Reviews',
    'No pain no gain',
    'CSS is fun',
];

function getRandomPhraseAsArray(array) {
    const randomPhrase = array[Math.floor(Math.random() * array.length)];
    return randomPhrase.toUpperCase().split('');
}

function addPhraseToDisplay(array) {   
    for (let i = 0; i < array.length; i++) {
        const listItem = document.createElement('li');
        phraseList.appendChild(listItem);
        listItem.textContent = array[i];
    
        if (array[i] !== ' ') {
            listItem.className = 'letter';
        } else {
            listItem.className = 'space';
        }
    }
}

function checkLetter(buttonClicked) {
    const letterClicked = buttonClicked.textContent.toUpperCase();
    let letterFound = false;

    for (let i = 0; i < letter.length; i++){
        if (letterClicked === letter[i].textContent) {
            letter[i].classList.add('show');
            letterFound = true;
        } 
    }
    
    return letterFound ? letterClicked : null;
}

function checkWin() {
    if (letter.length === show.length) {
        overlay.classList.add('win');
        overlay.style.display = '';
        title.textContent = "You win!"
        startButton.textContent = "Reset"
    }

    if (missed >= 5) {
        overlay.classList.add('lose');
        overlay.style.display = '';
        title.textContent = "You lose!"
        startButton.textContent = "Reset"
    }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

startButton.addEventListener('click', () => {  
    overlay.style.display = "none";
});

window.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.target.className = 'chosen';
        e.target.disabled = true;

        const letterFound = checkLetter(e.target);

        if (letterFound === null) {
            missed += 1;
        }

        if (missed >= 1 && missed <= 5){
            const heart = scoreboardLi[scoreboardLi.length-missed];
            heart.getElementsByTagName('img')[0].src = 'images/lostHeart.png';
        }
    }
    checkWin();
});

startButton.addEventListener('click', (e) => {
    if (e.target.textContent === 'Reset') {
        missed = 0;
        for (let i = 0; i < scoreboardLi.length; i++) {
            const img = scoreboardLi[i].getElementsByTagName('img')[0];
            img.src = 'images/liveHeart.png';
        }
        while (phraseList.children.length > 0) {
            phraseList.removeChild(phraseList.children[0]);
        }
        for (let i = 0; i < letterButtons.length; i++) {
            letterButtons[i].classList.remove('chosen');
            letterButtons[i].disabled = false;
        }
        overlay.classList.remove('win', 'lose');

        const newPhrase = getRandomPhraseAsArray(phrases);
        addPhraseToDisplay(newPhrase);
    }
});


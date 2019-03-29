const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const resetButton = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const phraseList = document.querySelector('#phrase ul');
const letter = document.getElementsByClassName('letter');
const key = document.getElementsByClassName('keyrow');
let missed = 0;

resetButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});

const phrases = [
    'JavaScript is the best programming language',
    'I love CSS',
    'Check out Peer Reviews',
    'Stack Overflow',
    'This is in the phrases array'
];

const getRandomPhraseAsArray = arr => {
    const randomNumber = arr[Math.floor(Math.random() * arr.length)];
     return randomNumber.split("");    
};

const addPhraseToDisplay = arr => {
    for (let i = 0; i < arr.length; i++) {
        const listItem = document.createElement('li');
        phraseList.appendChild(listItem);
        listItem.textContent = arr[i];

        if (arr[i] !== ' ') {
            listItem.className = ('letter');
        } else {
            listItem.className = ('space');
        }
    }
};

getRandomPhraseAsArray(phrases);
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

const checkLetter = buttonClick => {
    const clickLetter = letter.textContent;
    let letterMatch = false;

    for ( let i = 0; i < letter.length; i++ ) {
        if (clickLetter == letter[i].textContent) {
            letter[i].classList.add('show');
            letterMatch = true;
        } else {
            return letterMatch = null;
        }
    }
}

 keyboard.addEventListener ('click', (e) => {


    if (e.target.tagName === 'BUTTON') {
        e.target.className = 'chosen';
        e.target.disabled = true;

    const letterFound = checkLetter(e.target);

    if (letterFound === null) {
        missed += 1;
    }

    }
});
    

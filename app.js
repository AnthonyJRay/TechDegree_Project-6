const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const resetButton = document.querySelector('a.btn__reset');
const overlay = document.getElementById('overlay');

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
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const overlay = document.getElementById('overlay');
const reset = document.querySelector('a.btn__reset');
let missed = 0;

reset.addEventListener('click', () => {
    overlay.style.display = 'none';
});

const phrases = [
    [`JavaScript is the best programming language`],
    ['This is a Game Show App'],
    ['Thanks for playing'],
    ['Check out peer reviews'],
    ['The grind continues'],
    ['Failure is not an option'],
    ['This is an Array'],
]

function getRandomPhaseAsArray (arr) {

};


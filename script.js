var timer = 0;
const phrases = [
    "you don't mean that, stop it",
    "please?",
    "Thu I love you please",
    "STOP",
    "Fine, be that way.",
    "NO!"
];
let index = 0;

function selectOption(option) {
    if (option === 'yes') {
        document.getElementById('question').style.display = 'hehe <3';
        displayPonyo();
    } else if (option === 'no') {
        displayMad();
        document.getElementById('no-button').addEventListener('click', function() {
            index = (index + 1) % phrases.length;
            this.innerText = phrases[index];
        });
        timer = timer + 1; 
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 1.1;
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

function displayStand() {
    var imageContainer = document.getElementById('image-container');
    var PonyoStand = new Image();
    PonyoStand.src = 'PonyoStand.gif';
    PonyoStand.alt = 'Stand';
    PonyoStand.onload = function() {
        imageContainer.appendChild(PonyoStand);
    };
}

function displayPonyo() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var PonyoKiss = new Image();
    PonyoKiss.src = 'PonyoKiss.gif';
    PonyoKiss.alt = 'Ponyo Kiss';
    PonyoKiss.onload = function() {
        imageContainer.appendChild(PonyoKiss);
        document.getElementById('options').style.display = 'none';
    };
}

function displayMad() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var PonyoMad = new Image();
    PonyoMad.src = 'PonyoMad.gif';
    PonyoMad.alt = 'Ponyo Mad';
    PonyoMad.onload = function() {
        if (timer == 1) {
        imageContainer.appendChild(PonyoMad);
        imageContainer.removeChild(PonyoStand);
        } else {
            imageContainer.appendChild(PonyoMad);
        }
    };
}

displayStand();
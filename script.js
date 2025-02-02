
function selectOption(option) {
    if (option === 'yes') {
        document.getElementById('question').style.display = 'none';
        displayPonyo();
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
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

displayStand();

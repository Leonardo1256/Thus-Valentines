
function selectOption(option) {
    if (option === 'yes') {
        document.getElementById('question').style.display = 'none';
        displayPonyo();
    } else if (option === 'no') {
        displayMad();
        // Change text on the "No" button to "You sure?"
       // document.getElementById('no-button').innerText = 'TEST'; 
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 1.1;
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

function displayMad() {
    document.getElementById('no-button').innerText = 'TEST4';
    //document.getElementById('image-container').innerHTML = '';
    // var imageContainer = document.getElementById('image-container');
    var PonyoMad = new Image();
    PonyoMad.src = 'PonyoMad.gif';
    PonyoMad.alt = 'Ponyo Mad';
    PonyoMad.onload = function() {
        imageContainer.replaceChild(PonyoMad, PonyoStand);
    //    imageContainer.appendChild(PonyoMad);
//        document.getElementById('options').style.display = 'none';
    };
}
/*
function displayMad() {
    var imageContainer = document.getElementById('image-container');
    var PonyoMad = new Image();
    PonyoMad.src = 'PonyoMad.gif';
    PonyoMad.alt = 'Mad';
    PonyoMad.onload = function() {
        imageContainer.appendChild(PonyoMad);
    };
}
*/

displayStand();
var number = 0;//Variable counter outside 

// Event domcontentloaded 
document.addEventListener('DOMContentLoaded', function () {
    createAllElements();
    animateElements();
});



function createAllElements() {// This function is used to create the elements, inside a div container and a div row, dynamic
    const numberStart = 0;
    const smallDiv = createElement('div', 'container', '');
    const firstRow = createElement('div', 'row', '');
    firstRow.id = 'rowId';
    const buttonPlus = createElement('button', 'btn-plus btn-style col-lg-4', 'Clicca qui per incrementare (+)');
    buttonPlus.id = 'increase';
    const buttonMinus = createElement('button', 'btn-minus btn-style col-lg-4', 'Clicca qui per decrementare (-)');
    buttonMinus.id = 'decrease';
    const resetButton = createElement('button', 'btn-reset btn-style col-lg-6', 'Clicca qui per resettare il counter!');
    resetButton.id = 'reset';
    const textCounter = createElement('h1', 'text-styled col-lg-12', `Inizio : ${numberStart}`);
    textCounter.id = 'result';
    firstRow.appendChild(textCounter);
    firstRow.appendChild(buttonPlus);
    firstRow.appendChild(buttonMinus);
    smallDiv.appendChild(firstRow);
    document.body.appendChild(smallDiv);
    document.getElementById('rowId').appendChild(resetButton);

    
    // Event delegation on the wrapper div for the buttons
    document.getElementById('rowId').addEventListener('click', function (event) {
        if (event.target.matches('#increase')) {
            increaseNumber();
        } else if (event.target.matches('#decrease')) {
            decreaseNumber();
        } else if (event.target.matches('#reset')) {
            resetCounter();
        }
    });
}

function createElement(tag, className, innerHTML) {
    const element = document.createElement(tag);
    element.className = className;
    element.innerHTML = innerHTML;
    return element;
}

function resetCounter() {//This function is used to reset the counter
    if (number != 0) {
        number = 0;
        document.getElementById('result').innerHTML = `Hai resettato il counter a :  ${number}`;
    } else {
        document.getElementById('result').innerHTML = `Inizio : ${number}`;
    }
}

function increaseNumber() {//This function is used to increase by 1 the counter value.
    number++;
    document.getElementById('result').innerHTML = `Hai incrementato :  ${number}`;
}

function decreaseNumber() {//This function is used to decrease by 1 the counter value.
    if (number <= 0) {
        alert('Purtroppo il counter non fa credito, quindi niente numeri sotto lo 0.');
    } else {
        number--;
        document.getElementById('result').innerHTML = `Hai decrementato :  ${number}`;
    }
}


// Some animation & style
function animateElements() {
    setTimeout(function () {
        document.getElementById("result").style.opacity = 1;
    }, 1300);
    setTimeout(function () {
        document.getElementById("increase").style.opacity = 1;
    }, 1600);
    setTimeout(function () {
        document.getElementById("decrease").style.opacity = 1;
    }, 1900);
    setTimeout(function () {
        document.getElementById("reset").style.opacity = 1;
    }, 2500);
}
document.body.style.backgroundColor = "#F5F5F5";
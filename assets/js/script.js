document.body.style.backgroundColor = "#b0c4de"; //Some style 
var number = 0;//Variable counter outside 

//Event domcontentloaded + create functions
document.addEventListener('DOMContentLoaded', createCounterText());
document.addEventListener('DOMContentLoaded', createIncreaseButton());
document.addEventListener('DOMContentLoaded', createDecreaseButton());
//creating element function

function createCounterText() {  // This function is used to create the  counter inside a div
    let container = document.createElement("div");
    container.className = "container";
    let numberStart = 0;
    const textCounter = document.createElement('h1');
    textCounter.innerHTML = `Inizio : ${numberStart}`;
    textCounter.id = 'result';
    textCounter.type = 'text';
    textCounter.className = 'text-styled col-lg-12';
    container.appendChild(textCounter);
    document.body.appendChild(container);
}


function createIncreaseButton() { // This function is used to create the increment button
    let smallDiv = document.createElement('div');
    smallDiv.className = 'container';
    smallDiv.id = 'buttons';
    let firstRow = document.createElement('div');
    firstRow.className = 'row';
    firstRow.id = 'rowId' 
    smallDiv.appendChild(firstRow);
    document.body.appendChild(smallDiv);
    const buttonPlus = document.createElement('button');
    buttonPlus.type = 'button';
    buttonPlus.id = 'increase'
    buttonPlus.className = 'btn-plus btn-style col-lg-3';
    buttonPlus.innerHTML = 'Clicca qui per incrementare (+)';
    firstRow.appendChild(buttonPlus);
    document.body.appendChild(smallDiv);
    document.getElementById('increase').addEventListener('click', increaseNumber);
    /*This line (line 33) of code takes the id of the button element and from an onclick event
   which triggers the increaseNumber function*/
}
function createDecreaseButton() { // This function is used to create the decrement button
    const buttonMinus = document.createElement('button');
    buttonMinus.type = 'button';
    buttonMinus.id = 'decrease'
    buttonMinus.className = 'btn-minus btn-style col-lg-3';
    buttonMinus.innerHTML = 'Clicca qui per decrementare (-)';
    document.getElementById('rowId').appendChild(buttonMinus);
    document.getElementById('decrease').addEventListener('click', decreaseNumber);
    /*This line (line 46) of code takes the id of the button element and from an onclick event
  which triggers the decreaseNumber function*/
}



//Some math calculations

function increaseNumber() { //This function is used to increase by 1 the counter value.
    this.number = number++;
    document.getElementById('result').innerHTML = `Hai incrementato :  ` + number;
    console.log('increase = ' + number);

}
function decreaseNumber() { //This function is used to decrease by 1 the counter value.
    if (number <= 0) {
        alert('Purtroppo il counter non fa credito, quindi niente numeri sotto lo 0.');
        
    }
    else {
        this.number = number--;
        document.getElementById('result').innerHTML = 'Hai decrementato : ' + number;
    }
    console.log('decrease = ' + number);
}




//Some animation

setTimeout(function () {//Some transition animation 
    document.getElementById("result").style.opacity = 1;
}, 1300);
setTimeout(function () {//Same animation  later
    document.getElementById("increase").style.opacity = 1;
}, 1600);
setTimeout(function () {//Same animation  even later
    document.getElementById("decrease").style.opacity = 1;
}, 1800);

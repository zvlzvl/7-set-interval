/*
REIKALAVIMAI:
- rasti vieta/elementa
- istraukti skaiciu
- kas sekunde ta skaiciu mazinti iki nulio
- pasiekus nuli - parasyti FINITO
*/

let number = 0;

function counter(selector) {
    const DOM = document.querySelector(selector);
    number = parseInt(DOM.innerText);

    setTimeout(showMeNumber, 3000);
}

function showMeNumber() {
    console.log(number);
}

export { counter }
let inp = document.querySelector('input');
let btn = document.querySelector('button');
let elem = document.querySelector('p2');

btn.addEventListener('click' ,() => {
    elem.innerText = inp.value * 1.10;
} );
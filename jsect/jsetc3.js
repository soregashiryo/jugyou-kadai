let inp = document.querySelector('input');
let btn = document.querySelector('button');
let elem = document.querySelector('p2');

btn.addEventListener('click' ,() => {
    elem.innerText += MessageChannel;

    for(I=0 ; i<10 ; i+1 ){
        mes += 150;
        elem.innerText += "　⇒　"+ mes;
    }
    /*
    while(mes<10000){
        mes += 150;
        elem.innerText += " ⇒　" + mes;
    }
    */
} );
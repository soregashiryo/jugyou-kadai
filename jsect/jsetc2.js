let inp = document.querySelector('input');
let btn = document.querySelector('button');
let elem = document.querySelector('p2');

btn.addEventListener('click' ,() => {
    let age = parseInt(inp.value);
  if( age < 20 ){
      elem.innerText = "あなたは未成年です。";
  } else if( age >=65 ){
      elem.innerText = "あなたは高齢者です。"
  } else {
      elem.innerText ="あなたは成人です。";
  }
  } );
var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;



function increment(){
    currentNumber = currentNumber +1;
    currentNumberWrapper.innerHTML=currentNumber;

}
function decrement(){
    currentNumber = currentNumber -1;
    currentNumberWrapper.innerHTML=currentNumber;

}

// é utilizado o innerHTML para pegar o html que está dentro da variável. 

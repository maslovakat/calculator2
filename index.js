
let tmpArr = [];

const display = document.querySelector('.display');
const operation = document.querySelectorAll('.operations');
const digit = document.querySelectorAll('.digits');
const equal = document.querySelector('.equal');
const delSymbol = document.querySelector('.delSymbol');
const delAll = document.querySelector('.delAll');
const sqrof = document.querySelector('.sqrof');
const toSqr = document.querySelector('.toSqr');
const comma = document.querySelector('.comma');
const error = document.querySelector('.error');

operation.forEach( el => el.addEventListener('click', addOperation));
digit.forEach( el => el.addEventListener('click', addDigit));
equal.addEventListener('click', getResult);
delSymbol.addEventListener('click', deleteLastSymbol);
delAll.addEventListener('click', delAllSymbols);
sqrof.addEventListener('click', squareRootOf);
toSqr.addEventListener('click', toSqrNumber);
comma.addEventListener('click', addComma);

function addDigit(el){
    el.preventDefault();
    tmpArr.push(el.target.innerText);
    display.value = tmpArr.join("");
    console.log(tmpArr);
}
function addComma(el){
    el.preventDefault();
    tmpArr.push(el.target.innerText);
    if(tmpArr[tmpArr.length-2] === "."){
        tmpArr.splice(tmpArr.length -2, 1);
    }
    display.value = tmpArr.join("");
    console.log(tmpArr);
}
function addOperation(el){
    el.preventDefault();
    tmpArr.push(el.target.innerText);
    if(tmpArr[tmpArr.length-2] === "-" || tmpArr[tmpArr.length-2] === "+" || tmpArr[tmpArr.length-2] === "*" || tmpArr[tmpArr.length-2] === "/"){
        tmpArr.splice(tmpArr.length -2, 1);
    }
    display.value = tmpArr.join("");
    console.log(tmpArr);
}
function deleteLastSymbol(el){
    el.preventDefault();
    tmpArr.splice(tmpArr.length-1, 1);
    display.value = tmpArr.join("");
    console.log(tmpArr);
}
function delAllSymbols(el){
    el.preventDefault();
    tmpArr.splice(0, tmpArr.length+1);
    display.value = tmpArr.join("");
    console.log(tmpArr);
}
function squareRootOf(el){
    el.preventDefault();
    display.value = Math.sqrt(display.value);
    tmpArr = display.value.split("");
    console.log(tmpArr);
}
function toSqrNumber(el){
    el.preventDefault();
    display.value = Math.pow(display.value,2);
    tmpArr = display.value.split("");
    console.log(tmpArr);
}
function getResult(el){
    el.preventDefault();
    for(let i = 0; i < tmpArr.length; i++){
        if(tmpArr[i] === "0" && tmpArr[i-1] === '/' ){
            display.value = 0;
            error.innerHTML = "На 0 делить нельзя";
        }else {
            display.value = eval(display.value);
            error.innerHTML = '';
        }
    }
    tmpArr = display.value.split("");
    console.log(tmpArr);
}

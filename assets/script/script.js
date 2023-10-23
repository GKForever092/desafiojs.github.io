var number = document.querySelector("#numero")
var valorap = document.querySelector("#tpagar")
var pbase = document.querySelector ("#pbase")
function suma(){
    var numberFormated = parseInt(number.innerText)
    number.innerText = numberFormated + 1

    var valorapFormated = parseInt(valorap.innerText)
    valorap.innerText = number.innerText * 400000
    
}

function resta(){
    var numberFormated = parseInt(number.innerText)
    number.innerText = numberFormated - 1

    var valorapFormated = parseInt(valorap.innerText)
    valorap.innerText = number.innerText * 400000
}



console.log(index)
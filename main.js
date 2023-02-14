function inserir(num){
    let output = document.getElementById("printresult");
    let lastChar = output.innerHTML.slice(-1);
    if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/" || lastChar === "0") {
        if (num === "+" || num === "-" || num === "*" || num === "/" || num === "0" ) {
            return;
        }
    }
    output.innerHTML += num;
}

function excluir(){
    document.getElementById("printresult").innerHTML = ""
}

function apagar(){
    var resultado = document.getElementById('printresult').innerHTML;
    document.getElementById('printresult').innerHTML = resultado.substring(0, resultado.length -1);
}

function calculo(){
    let printresult = document.getElementById('printresult').innerHTML;
    if(printresult){
        document.getElementById('printresult').innerHTML = eval(printresult)
}
    else{
        document.getElementById('printresult').innerHTML = 0
    }
}

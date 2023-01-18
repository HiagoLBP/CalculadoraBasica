function inserir(num){
    let numero = document.getElementById("printresult").innerHTML
    document.getElementById("printresult").innerHTML = numero + num
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
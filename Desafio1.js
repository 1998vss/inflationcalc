function calculoAleatorio(){
    let valorInicial = parseFloat(document.getElementById("valorInicial").value)
    let periodoInicial = parseFloat(document.getElementById("periodoInicial").value)
    let periodoDesejado = parseFloat(document.getElementById("periodoDesejado").value)
    
    let resultado = valorInicial * periodoInicial / periodoDesejado
    console.log(resultado)
    
    document.getElementsById("resultado").innerHTML = resultado;
}


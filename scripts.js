var result;
var form = document.getElementById("formulario");    
var  quant;

function myFunction(){
    quant = document.getElementById('numeros').value;
    var y = document.getElementById("conteudo2");
    var x = document.getElementById("conteudo");
    y.style.display = "none";

    if (quant > 0){
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
     
    }
}
}

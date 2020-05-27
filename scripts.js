var result;
var form = document.getElementById("formulario");    
var  quant;

function myFunction(){
    quant = document.getElementById('numeros').value;
    var y = document.getElementById("conteudo2");
    var x = document.getElementById("conteudo");
    y.style.display = "block";
    x.style.display = "none";  
}
function voltar(){

  var x = document.getElementById('conteudo');
  var y = document.getElementById('conteudo2');
  y.style.display = "none";
  x.style.display = "block";
}

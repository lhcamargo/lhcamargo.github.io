var result;
var form = document.getElementById("formulario");
var quant;

function myFunction() {
    quant = document.getElementById('numeros').value;
    var y = document.getElementById("conteudo2");
    var x = document.getElementById("conteudo");
    y.style.display = "block";
    x.style.display = "none";
}

//Efeito gay

let XAngle = 5;
let YAngle = 0;
const Z = 50;

const world = document.getElementById("world")
world.addEventListener("mousemove", function(e) {
    YAngle = -(0.5 - (e.x / world.clientWidth)) * 5;
    XAngle = (1 - (e.y / world.clientHeight)) * 5 + 1;
    world.style.transform = "rotateX(" + -XAngle + "deg) rotateY(" + YAngle + "deg)"
})

function calculo(){
//Variaveis.
var cont =0;
var n;
var i = 0;
var maior = 0;
var menor = 0;
var k = 0;
var c = 0;
var at = 0;
var array = new Array(n);

//Quantidade de elementos sera a mesma quatidade do vetor
n = parseFloat(prompt('Digite a quantidade de amostragem'));

//Recebendo os valores aos elementos
for (i = 0; i < n; i++) {
  array[i] = parseFloat(prompt('Digite o numero: '));
  if (i != 0) {

    if (array[i] > maior) {
      maior = array[i];
    }
    if (array[i] < menor) {
      menor = array[i];
    }
  } else {
    maior = array[i];
    menor = array[i];
  }
}

//RESULTADOS DE Nº MAIOR E MENOR.
document.write('<br>'+'Numero de Amostras: ' + array);
document.write('<br>O Maior Numero: ' + maior);
document.write('<br>O Menor Numero: ' + menor);

//CALCULO DO AT,K,C.
at = maior - menor; //Amplitude Total
k = Math.sqrt(n); //Numero de Classes
c = at / k; //Amplitude da Classe

//Exibindo os resultados
document.write('<h3>Amplitude Total : </h3>', at);
document.write('<h3>Numero de Classe : </h3>', k);
document.write('<h3>Amplitude da Classe: </h3>', c);

//Verificação de numeros repetidos no array.
//document.write('<br><br> Elementos repetidos');
for(var j = 0; j < array.length; j++){
	for(var l = j+1; l < array.length; l++){
		if(array[j] == array[l]){
			cont++;
			//document.write('<br> Array'+array[l] + 'Cont: '+cont);
			//document.write('<br> Cont'+cont);
		}
	}
}
}


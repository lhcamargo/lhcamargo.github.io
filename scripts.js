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
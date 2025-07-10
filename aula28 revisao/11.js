const prompt = require('prompt-sync')();

//11-verifique se a temperatura esta acima de 30 graus
let temperatura = 0;
temperatura = prompt("Digite a temperatura: ");
if (temperatura>=30) {
    console.log("Mais de 30 graus, calor do djiabo");
} else {
    console.log("Menos de 30 graus");
}
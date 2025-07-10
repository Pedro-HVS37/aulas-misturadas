//questao 19 da prova
const prompt = require('prompt-sync')();
let numeros = [];
let contPares = 0;
let somaImpares = 0;
let numero = 0;
for (let i = 0; i < 6; i++) {
    numero = parseInt(prompt("Digite um numero: "));
    numeros.push(numero);
    if (numeros[i]%2=== 0) {
        contPares++
    }else{
        somaImpares += numeros[i]
    };
}
console.log(` - Numeros pares: ${contPares} 
 - Soma dos numeros impares: ${somaImpares}`);


const prompt = require('prompt-sync')();

//2-verifique se um numero é par
let numero = 0;
numero = prompt("Digite um numero: ");
if (numero%2===0) {
    console.log(` - ${numero} é par`);
}else{
    console.log(` - ${numero} não é par`);
}
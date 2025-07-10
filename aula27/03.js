const prompt = require('prompt-sync')();
let numeros = [];
let somaMaioresDeDez = 0;
let numero;
let media = [];
let pares = 0;

for (let i = 0; i < 5; i++){
	numero = parseInt(prompt("Digiter o primeiro numero: "));
	numeros.push(numero);
	if (numeros[i] > 10){
	somaMaioresDeDez += numeros[i]
	}else if(numeros[i]%2===0){
	media.push(pares);
    pares = pares + numeros[i]
	};
	
};
pares = pares / media.length
console.log(` - Soma dos números maiores de 10: ${somaMaioresDeDez}
 - Media dos números pares: ${pares}`)
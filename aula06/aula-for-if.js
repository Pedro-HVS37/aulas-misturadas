// let idade = 18;

// if(idade >=18){
//     console.log("É maior de idade!")
// }else{
//     console.log("SOME DAQUI!");
// };


// let numero = 15;

// if (numero % 5 === 0) {
//     console.log("É multiplo de 5");
// }else{
//     console.log("Não é multiplo de 5");
// };

// operadores logicos
// && (e)   || (ou)   ! (nao)

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// let numeros = [2, 5, 7, 8, 10];

// if(numeros[4] % 2 === 0){
//     console.log(`${numeros[4]} é par`);
    
// }

let numeros = [2, 5, 7, 8, 10];

for (let i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 === 0) {
        console.log(`${numeros[i]} é par`);
    }else {
        console.log(`${numeros[i]} não é par`);
    }
};
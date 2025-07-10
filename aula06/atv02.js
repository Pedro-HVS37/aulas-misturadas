// somente numeros impares de 1 a 10

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; 1 < numeros.length; i++) {
    if (numeros[i] % 3 === 0) {
        console.log(`${numeros[i]}`);
    }
}
//uma estrutura de dados homogenea e heterogenea
//um array homogeneo
let frutas = ["maçã", "banana", "laranja"];

console.log(frutas[1]);

let numeros = [1, 2, 3];
//adicionar um novo elemento ao array
numeros.push(4); //adicionar um elemento ao final do array
console.log(numeros);

numeros.pop() //remove o ultimo elemento do array
console.log(numeros);

numeros.unshift(4); //adicionar um elemnto no inicio do array
console.log(numeros);

numeros.shift(); //remove o primeiro elemento do array
console.log(numeros);

console.log(numeros.length); //retorna o valor dos elemntos

let estados = ["SP", "RN", "PE", "RS", "RJ"];
console.log(estados.indexOf("PE")) //retornar o indice do valor ou -1 se nao for encontrado

console.log(estados.includes("PI")); //verifica se um valor existe em uma array (true/false)

estados.reverse(); //imverte o array
console.log(estados);

//funçoes interessantes e importantes

let nomes = ["Lucas", "Ana", "João", "Pedro", "Aline"];
nomes.sort(); //ordenaçao
console.log(nomes);

//funçao que serve para percorrer o array
nomes.forEach((n,i)=>{
console.log(i, n);
});

let number = [1, 2, 3, 4, 5]

console.log(number);
let numbers2 = number.map(x => x + 2);
console.log(numbers2);

let valores = [10,20,30,40];
let maiores = valores.filter(x=> x > 25); //filtrar e retornar valores maiores de 25
console.log(maiores);

console.log(number.find(x=> x>=20)); //retorna o primeiro valor encontrado no array

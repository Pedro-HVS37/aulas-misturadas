//sintaxe basica

/*function nome(parametros){
    return
}
*/

function saudacao(){
    console.log("Vai se cuidar");
}

saudacao(); //realizar a chamada da funçao

function saudacao02(nome) {
    console.log(`Hello world, ${nome}`);
}

saudacao02("Bozo") //realizar a chamada da funçao com parametro

function somar(a, b) {
    return a+b; //retorna o valor da soma
}

let total = somar(7,8);
console.log(total);


function potenciacao(base, expoente) {
    return base**expoente //retorna o valor da potencia
}

let resultado = potenciacao(2,3);
console.log(resultado);


//funçoes da seta array functions
let dobro = (x) => x*2;
console.log(dobro(5));


let games = ["Dora aventureira", "GTA", "spider man"]
function exibirArray(array) {
    array.forEach(item => {
        console.log(item);
    });
}
exibirArray(["Banana", "Maça", "Laranja", "Uva"]);
exibirArray(games)
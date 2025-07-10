//senha segura


// forma incorreta:

// const senha = 1234
// do {
//     let prompt = require('prompt-sync')();
// let numero = Number(prompt('Digite sua senha: '));
// if
// } while (numero === senha);




// forma correta: 

let numero;
const senha = 1234;

do {
    let prompt = require('prompt-sync')();
    numero = parseInt(prompt("Digite sua senha: "));

    if (numero !== senha) {
        console.log("Tente novamente");
    }else{
        console.log("Acesso permitido");
        
    }
} while (numero !== senha);
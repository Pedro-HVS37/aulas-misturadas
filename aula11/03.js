const prompt = require('prompt-sync')();
let senha = 0;

do {
    senha = Number(prompt("Digite a senha: "));
    if (senha !== 1234) {
        console.log("Senha incorreta");
        
    } else {
        console.log("Acesso permitido");
        
    }
} while (senha !== 1234);
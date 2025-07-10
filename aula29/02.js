const prompt = require('prompt-sync')();
letra = prompt("Digite uma letra (M, V ou N): ");
if (letra=='M' && letra=='m'){
    console.log("Matutino");
}else if(letra=='V' && letra=='v'){
    console.log("Vespertino");
}else if(letra=='N' && letra=='n'){
    console.log("Nortuno");
};
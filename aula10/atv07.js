//contador de passos

let passos = 0;
const meta = 10000;

do {
    console.log(passos)
    passos=passos+1000
    if (passos<=meta) {
    }else{
    console.log("Meta alcançada!");
    }
} while (passos<=meta);
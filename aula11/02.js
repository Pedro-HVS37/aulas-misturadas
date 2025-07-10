let total = 0;
let semana = 0

while (total < 100) {
    total += 10;
    semana++;

    console.log(`Semana ${semana}: R$ ${total}`);

    if (total >= 100) {
        console.log("Meta alcançada!");
        
    }
    
}
//economizando para um sonho

let economizado = 0; semana = 0;

while (economizado<=100) {
    console.log(`Semana ${semana} - ${economizado}`);
    economizado=economizado+10
    semana++
    if (economizado>=101) {
        console.log("Meta alcançada!");
        
    }
}
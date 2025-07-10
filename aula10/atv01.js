//contando os dias da semana

let semana = ["segunda", "terça", "quarta", "quinta", "sexta", "sabado", "domingo"];

for (let i = 0; i < semana.length; i++) {
    if (i+1 == 6 || i+1 == 7) {
        console.log(`${i+1} - ${semana[i]} fim de semana`);
        
    }else{
        console.log(`${i+1} - ${semana[i]} dia util`);
        
    }
}
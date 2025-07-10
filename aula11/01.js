let dias = ["segunda", "terça", "quarta", "quinta", "sexta", "sabado", "domingo"];

for (let i = 0; i < dias.length; i++) {
    if (dias[i] === "sabado" || dias[i] === "domingo") {
        console.log(`${i+1} - ${dias[i]} - fim de semana`);
    } else {
        console.log(`${i+1} - ${dias[i]}`);
    }
}
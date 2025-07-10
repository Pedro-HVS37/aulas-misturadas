// agenda de comrpomissos

let horarios = ["08:00", "08:30", "09:00", "09:30", "10:00"]
let dias = ["segunda", "terça", "quarta", "quinta", "sexta", "sabado", "domingo"]

for (let i = 0; i < dias.length; i++) {
    for (let j = 0; j < horarios.length; j++) {
        console.log(dias[i], ": ", horarios[j]);
        
    }
}
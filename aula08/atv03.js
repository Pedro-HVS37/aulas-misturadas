//cardapio de combinaçoes

let pratos = ["hamburguer", "cheeseburguer", "pizza"]
let acompanhamentos = ["batata frita", "nuggets", "mini coxinhas"]

for (let i = 0; i < pratos.length; i++) {
    for (let j = 0; j < acompanhamentos.length; j++) {
        console.log(pratos[i], "e", acompanhamentos[j]);
        
    }
}
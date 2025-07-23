class Mamifero{
    #tipoPelo;
    #habitat;

    constructor(nome, idade, tipoPelo, habitat){
        setTipoPelo(tipoPelo){
            this.#tipoPelo = tipoPelo;
        }
        getTipoPelo(){
            return this.#tipoPelo;
        }
        setHabitat(habitat){
            this.#habitat = habitat;
        }
        gethabitat(){
            return this.#habitat;
        }
    }
}
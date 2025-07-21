class Dado{
    #face;
    constructor(face){
        let faceRandom = Math.floor(Math.random()*6 + 1)
        this.#face = faceRandom;
        Object.freeze(this);
    }
    setFace(face){
        this.#face = face;
    }
    getFace(){
        return this.#face;
    }
}
module.exports = {Dado};

let d1 = new Dado(8);
d1.face2 = 4
console.log(d1.face2);
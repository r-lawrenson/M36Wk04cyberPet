// 

class Cyberpet{
    constructor(name){
    this._name = name
    this._energy = 100
    this._board = 100
    this._fix = 100
    }
    get name(){
        return this._name;}
    get energy(){
        return this._energy;}
    get board(){
        return this._play;}
    get fix(){
        return this._fix;}

    consume(){
        this._energy;
    }
    
    play(){
        this._energy--;
    }

}

const cat = new Cyberpet("GiGi");

console.log(cat.name)

console.log(`Energy is at ${cat.energy}`);

console.log(cat.fix)
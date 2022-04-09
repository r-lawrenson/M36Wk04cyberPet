

let min = 15
let max = 30

// // different number range for creating cyberpet
let createMin = 2
let createMax = 60

function randNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

class Cyberpet{
    constructor(name, type){
        this._name = name;
        this._type = type;
        this._hunger = randNumber(createMin, createMax); //
        this._thirst = randNumber(createMin, createMax); //
        this._boredom = randNumber(createMin, createMax); //
    }
    get name(){
    return this._name;
    }    
    get type(){
        return this._type;
    }
    get hunger(){
        return this._hunger;
    }
    get thirst(){
        return this._thirst;
    }
    get boredom(){
        return this._boredom;// spelling
    }
    eat(){
        // what do we want eat to do
        this._hunger += randNumber(min, max);
    }
    drink(){
        this._thirst += randNumber(min, max);
    }
    play(){
        this._boredom += randNumber(min, max);
        this._hunger -= randNumber(min, max);
    }
}

module.exports = {
    Cyberpet,
    Cat,
    Dog,
    Rabbit,
    myPetCreate,
    chooseAction,
    typeWriter,

}
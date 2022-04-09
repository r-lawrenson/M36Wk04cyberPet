// let pet = require("./funcs")

//SFX

let petPlay = new Audio("sounds/play.wav");
let petDrink = new Audio("sounds/drink.wav");
let petFeed = new Audio("sounds/feed.wav");
let petMeow = new Audio("sounds/sleep.wav");
let petWoof = new Audio("sounds/woof.wav");
let power = new Audio("sounds/power.wav");

//Music

let bgm1 = new Audio("sounds/bgm1.mp3");
let bgm2 = new Audio("sounds/bgm2.mp3");
let bgm3 = new Audio("sounds/bgm3.mp3");
let bgm4 = new Audio("sounds/bgm4.mp3");

// get elements by id name

let hungerValue = document.getElementById("hungerValue");
let thirstValue = document.getElementById("thirstValue");
let boredomValue = document.getElementById("boredomValue");
let petNameType = document.getElementById("petNameType")



let min = 5;
let max = 25;

// // different number range for creating cyberpet
let createMin = 30;
let createMax = 70;

function randNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
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
        return this._boredom;
    }
    eat(){
        // what do we want eat to do
        this._hunger += randNumber(min, max);
        this._thirst -= (min);
        this._boredom -= (min);
        logOutput();
    }
    drink(){
        this._hunger -= (min);
        this._thirst += randNumber(min, max);
        this._boredom -= (min);
        logOutput();
    }
    fun(){
        this._hunger -= (min);
        this._thirst -= (min);
        this._boredom += randNumber(min, max);
        logOutput();
    }
}
class Cat extends Cyberpet {
    constructor(name, meow){
        super(name);
        this._meow = meow;
    }
    get meow(){
        return this._meow;
    }
    speak(){
        petMeow.play();
        petMeow.currentTime = 0;
        console.log("cat says meow");
        // textContent = "MEOWWWW!"
    }
}
class Dog extends Cyberpet{
    constructor (name,woof){
        super(name);
        this._woof = woof;
    }
    get woof(){
        return this._woof;
    }
    speak(){
        petWoof.play();
        petWoof.currentTime = 0;
        console.log("dog is barking mad")
    }
}

class Rabbit extends Cyberpet{
    constructor (name,woof){ // change woof
        super(name);
        this._woof = woof;
    }
    get woof(){
        return this._woof;
    }
    speak(){
        petWoof.play();
        petWoof.currentTime = 0;
        comsole.log("dog is barking mad")
    }
}

let pet = "";
let action = "";
let petName = "";
let petType = "";
let myPetCreated = 0;

function chooseAction(){
    if(action == "c"){
        myPetCreate();
    }
    if  (action == "p"){
        myPet.fun();
        petPlay.play();
        petPlay.currentTime = 0;
    }
    else if(action == "e"){
        myPet.eat();
        petFeed.play();
        petFeed.currentTime = 0;
    }
    else if(action == "d"){
        myPet.drink();
        petDrink.play();
        petDrink.currentTime = 0;
    }
    else if(action == "s"){
        myPet.speak();
    }
    action = "";
}

function myPetCreate(){
    if(myPetCreated == 0){
        petType = prompt("Select Cyberpet Type: 1 for a Dog, 2 for a Cat, Any other key for a Rabbit");
        if(petType == 1){
            pet = "Dog";
            myPet = new Dog(petName, pet);
        }
        else if(petType == 2){
            pet = "Cat";
            myPet = new Cat(petName, pet);
        }
        else{
            pet = "Rabbit";
            myPet = new Rabbit(petName, pet);
        }
        console.log(`pet type is ${petType}`);
        console.log(`pet is a ${pet}`);
        
        petName = prompt(`Please name your ${pet}`)
        
        console.log(`starting hunger is ${myPet.hunger}`);
        petNameType.textContent = `${petName} the ${pet}`
        logOutput()    }
    else{
        console.log(`You have already created a pet named ${petName}`);
    }
}

function logOutput(){

    hungerValue.textContent = `${myPet.hunger}`;    console.log(`hunger is ${myPet.hunger}`);
    thirstValue.textContent = `${myPet.thirst}`;    hungerValue.textContent = `${myPet.hunger}`
    boredomValue.textContent = `${myPet.boredom}`;;;
    thirstValue.textContent = `${myPet.thirst}`;    checkStatLimit()

    boredomValue.textContent = `${myPet.boredom}`;}

let statMsg = "";

// // change message depending on value
function checkStatLimit(){
    if(myPet.hunger >= 100){
        statMsg = `${petName} : "I'm bloody stuffed!"`;
    }
    else if(myPet.hunger > 1 && myPet.hunger <= 15){
        statMsg = `${petName} : "Please feed me..."`;
    }
    else if(myPet.hunger <= 0){
        statMsg = `${petName} is starving.`;
    }
    else{
    statMsg = `${petName} : "I don't need feeding"`;
    }
    console.log(`${statMsg}`);
}

document.addEventListener("keydown", (event) => {
    action = event.key;
    console.log(action);
    chooseAction();
})

let i = 0;
let txt = "Press C Key to START";
const speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

let element = document.getElementById("disappear");
element.remove();

oc




// let text = "CYBERPET.TM"
// function typeWriter() {
//     if (i < txt.length) {
//       document.getElementById("logo").innerHTML += text.charAt(i);
//       i++;
//       setTimeout(typeWriter, speed);
//     }
//   }


// // old functions for prompt

// function askForAction(){
//     action = prompt(`What would you like to do?:\np for play, e to feed, d to give a drink.\nOR any other key to end the game`)
//     chooseAction()
// }ument.getElementById("disappear");
element.remove();
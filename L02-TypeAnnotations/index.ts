let userName: string = "Sathish";
console.log(userName);
// userName = 10;

let age: number = 10;
console.log(age);

// age="36";

let isAdult: boolean = age >= 18;

console.log(isAdult);

//Any
let unknown: any = 10;

unknown = "hello";

unknown = false;

console.log(unknown);

//Null

let nothing: null = null;
console.log(nothing);

//undefined

let nothingelse: undefined;

console.log(nothingelse);

//Type Inference(Meaning which value is assigned to the variable it will automatically assign the type(string,number,boolean))
let collegeName = "Anna University";
let bankBalance = 600000;
let isActive = true;

//Union Type
let billAmount: number | string = 100;
billAmount = "10000";
console.log(billAmount);

//Literal value type
let trafficSignal: "red" | "yellow" | "green";
trafficSignal = "red";
console.log(trafficSignal);

let rollDice: 1 | 2 | 3 | 4 | 5 | 6;
rollDice = 5;
console.log(rollDice);

//Object
let vechile: { model: string; topspeed: number; isProduction: boolean } = {
  model: "BMW",
  topspeed: 180,
  isProduction: false,
};

//Object Destructuring

const { model, topspeed }: { model: string; topspeed: number } = vechile;

console.log(model, topspeed);

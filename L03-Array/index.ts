let colors: string[] = ["green", "red", "blue"];
console.log(colors);

let myNumbers: number[] = [1, 2, 3];
console.log(myNumbers);

let truths: boolean[] = [true, false, true];
console.log(truths);

let data: any[] = ["green", 10, "true"];
console.log(data);

//tuple
let dataOne: [number, string, boolean] = [10, "green", true];
console.log(dataOne);

let carBrands: string[] = ["Audi", "Honda", "ford"];
carBrands.map((car: string) => {
  console.log(car);
});

//Object
const pepsi = {
  color: "black",
  sugar: 40,
};

const sprite = {
  color: "white",
  sugar: 30,
};

const coke = {
  color: "brown",
  sugar: 50,
};

let drinks: { color: string; sugar: number }[] = [pepsi, sprite, coke];

console.log(drinks);

drinks.map((x: { color: string; sugar: number }) => {
  console.log(x);
});

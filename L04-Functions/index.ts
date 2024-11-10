//Named Functions

function welcome(message: string): void {
  console.log(`Welcome to typescript ${message}`);
}

welcome("sathish");

function add(x: number, y: number): boolean {
  if (x > y) {
    return true;
  }
  return false;
}
console.log(add(20, 30));

//Arrow function

const logger = (logmessage: string): void => {
  console.log(logmessage);
};

logger("Error,404 page not found");

//Anonymous Function
const multiply = function (a: number, b: number) {
  return a * b;
};
console.log(multiply(3, 2));

//Union Type

function chatBot(input: string | number): void {
  if (typeof input === "number") {
    console.log(input * 3);
  }
  console.log(input);
}
chatBot("hello");
chatBot(20);

//Object
function registerEmployee({
  username,
  age,
}: {
  username: string;
  age: number;
}): { username: string; age: number; isValid: boolean } {
  return { username, age, isValid: age > 18 };
}
console.log(registerEmployee({ username: "Sathish", age: 38 }));
console.log(registerEmployee({ username: "Pream", age: 17 }));

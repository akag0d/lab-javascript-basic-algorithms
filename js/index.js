// Iteration 1: Names and Input
let hacker1 = "Ruben";
console.log(`The drivers name is ${hacker1}`);
let hacker2 = "Joao";
console.log(`The navigator name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver name has the longest name, it has ${hacker1.length} characters`)
} else if (hacker2.length > hacker1.length){
    console.log(`The navigator name has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`)
}
// Iteration 3: Loops
let newDriversName = "";
for(let i=0; i < hacker1.length; i++) {
  newDriversName += hacker1[i].toUpperCase() + " ";
}
console.log(newDriversName);
let newNavigatorsName = "";
for(let i = hacker2.length - 1; i >= 0; i--) {
  newNavigatorsName += hacker2[i];
}
console.log(newNavigatorsName);
if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.")
  }
  else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.")
  }
  else {
    console.log("What?! You both have the same name?")
  }
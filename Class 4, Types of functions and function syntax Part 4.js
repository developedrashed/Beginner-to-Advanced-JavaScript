function ageCal(name, year) {
  return `Hi ${name}, Your are ${2021 - year} years old`;
} // function Declarason

console.log(ageCal('Haq', 1990));

//

let agecal = function (name, year) {
  return `Hi ${name}, Your are ${2021 - year} years old`;
}; // function Expreson

console.log(agecal('Haq', 1990));

//

let ageCal = (name, year) => {
  return ` Hi ${name}, Your are ${2021 - year} years old`;
}; // Aray Function

console.log(ageCal('Haq', 1990));
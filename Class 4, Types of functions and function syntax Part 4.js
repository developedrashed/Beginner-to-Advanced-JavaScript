function ageCal(name, year) {
  return `Hi ${name}, Your are ${2021 - year} years old`;
}

console.log(ageCal('Haq', 1990));

let ageCal = function(name, year){

  return `Hi ${ name }, Your are ${ 2021 - year } years old`;

}

console.log(ageCal('Haq', 1990));

let ageCal = (name, year) => {
  return `Hi ${name}, Your are ${2021 - year} years old`;
};

console.log(ageCal('Haq', 1990));

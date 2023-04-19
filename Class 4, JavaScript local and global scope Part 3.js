let name = 'Asraful Haque'; // Golobal Vareable

function info(name, age, skill) {
  let food = 'bereyani';
  let play = 'PUBG';

  console.log(play); // Lookal Vareable
  console.log(food);
}
info();

console.log(name);

//

let naam = 'Asraful Haque';

function info(name, age, skill) {
  
  let naam = 'kasem';

  return `My name is ${ naam }`;
}

console.log(info());

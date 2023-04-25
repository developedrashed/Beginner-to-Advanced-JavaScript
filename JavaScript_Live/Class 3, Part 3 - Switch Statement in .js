const pet = 'lizard';

if (pet === 'lizard') {
  console.log('I own a lizard');
} else if (pet === 'dog') {
  console.log('I own a dog');
} else if (pet === 'cat') {
  console.log('I own a cat');
} else if (pet === 'snake') {
  console.log('I own a snake');
} else if (pet === 'parrot') {
  console.log('I own a parrot');
} else {
  console.log("I don't own a pet");
}

let num = parseFloat(prompt());

switch (num) {
  case 3:
    console.log('Apni amader company silver');
    break;

  case 6:
    console.log('Apni amader company Tama');
    break;

  case 10:
    console.log('Apni amader company Loha');
    break;
  default:
    console.log("I Don't No");
    break;
}

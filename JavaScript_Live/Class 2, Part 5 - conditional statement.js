let age = 20;

if( age >= 18 ){
    console.log('Apnar jnnoe to ato ayojon , , , chole ason, , khaya daoya koron');
}else{
    console.log('Baccha , , ,  ghore fere jao , , , boro hole pore aeisoo');
}

let age = prompt('Age plz');

if (age >= 18) {
  console.log(`Apu apnar beyar boyos hoiycha , , , nischinte beya koron`);
} else {
  console.log(
    `Shabdhan , , , apnar akhono boyos hoinee , , doya kore ${ 18 - age } opekkha kron`);
}

let first_name = prompt('FirstName');

let last_name = prompt('LastName');

if( last_name == 'haq' ){
  console.log(`My name is ${ first_name } ${last_name} , Haq Vai ki khobor`);

}else{
  console.log(`My name is ${ first_name } ${last_name}`);

}

let marks = prompt('Put your marks');

if (marks >= 0 && marks <= 32) {
  console.log(`Apni fail korechen , , , riksha chalan`);
} else if (marks >= 33 && marks <= 40) {
  console.log('Apni D payachen');
} else if (marks >= 40 && marks < 50) {
  console.log('Apni C Payachen');
} else if (marks >= 50 && marks < 60) {
  console.log('Apni B Payachen');
} else if (marks >= 60 && marks < 70) {
  console.log('Apni A- Payachen');
} else if (marks >= 70 && marks < 80) {
  console.log('Apni A Payachen');
} else if (marks >= 80 && marks < 100) {
  console.log('Apni A+ Payachen');
} else if (marks == 100) {
  console.log('Apni vai uraiya felsen 100 haka 100 paisen');
} else {
  console.log('vai apni ki porikkha disilen');
}

let age = 15;

switch (age) {
  case 5:
    console.log('Apnar boyos 5');
    break;

  case 10:
    console.log(`Apni 10 bosor hoyasq`);
    break;

  case 15:
    console.log(`Apni 15 bosor hoyasq`);
    break;

  default:
    console.log('kono case paoya jai ni');
}


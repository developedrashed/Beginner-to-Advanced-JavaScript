let name = prompt('Name');
let roll = prompt('Roll');

let bn = parseFloat(prompt('Bangla'));
let en = parseFloat(prompt('English'));
let math = parseFloat(prompt('math'));
let s = parseFloat(prompt('Science'));
let ss = parseFloat(prompt('Social Science'));
let rel = parseFloat(prompt('Religion'));

let total = bn + en + math + s + ss + rel;
let cgpa = total / 6;

console.log(`
   
  Student Name   : ${name}
  Student Roll   : ${roll}
   
  Bangla        : ${bn}
  English       : ${en}
  Math          : ${math}
  Science       : ${s}
  S Science     : ${ss}
  Religion      : ${rel}
  ------------------------------
  Total GPA     : ${total}
  CPGA          : ${cgpa}

`);
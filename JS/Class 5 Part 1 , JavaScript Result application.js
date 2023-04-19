// aap.js

let name = prompt('Student Name');
let roll = prompt('Roll');

let bn = Number(prompt('Bangla'));
let en = Number(prompt('English'));
let math = Number(prompt('Math'));
let s = Number(prompt('Science'));   
let ss = Number(prompt('Social Science'));
let rel = Number(prompt('Religion'));


console.log(`

    Student name : ${name}
    Student Roll : ${roll}

    Subject      Marks     GPA               Grade
    Bangla       ${bn}     ${gpa(bn)}        ${ grade(bn)}  
    English      ${en}     ${gpa(en)}        ${ grade(en)}
    Math         ${math}   ${gpa(math)}      ${ grade(math)}  
    Science      ${s}      ${gpa(s)}         ${ grade(s)}
    Social       ${ss}     ${gpa(ss)}        ${ grade(ss)} 
    Religion     ${rel}    ${gpa(rel)}       ${ grade(rel)} 
    -------------------------------------------------------------
                           cgpa = ${ cgpa( gpa(bn), gpa(en), gpa(math), gpa(s), gpa(ss), gpa(rel))}                  
`);


// function

function gpa(marks){
    
  let gpa;

  if( marks >= 0 && marks <= 32 ){
      gpa = 0;
  }else if( marks >= 33 && marks < 40 ){
      gpa = 1;
  }else if( marks >= 40 && marks < 50 ){
      gpa = 2;
  }else if( marks >= 50 && marks < 60 ){
      gpa = 3;
  }else if( marks >= 60 && marks < 70 ){
      gpa = 3.5;
  }else if( marks >= 70 && marks < 80){
      gpa = 4;
  }else if( marks >= 70 && marks < 100){
      gpa = 5;
  } 
  
  return gpa;

}

// GPA Calculator

function grade(marks){
  
  let grade;
  
  if( marks >= 0 && marks <= 32 ){
      grade = 'F';
  }else if( marks >= 33 && marks < 40){
      grade = 'D';
  }else if( marks >= 40 && marks < 50){
      grade = 'C';
  }else if( marks >= 50 && marks < 60){
      grade = 'B';
  }else if( marks >= 60 && marks < 70){
      grade = 'A-';
  }else if( marks >= 70 && marks < 80){
      grade = 'A';
  }else if( marks >= 80 && marks < 100){
      grade = 'A+';
  }

  return grade;

}


// CGPA

let cgpa = (bn, en, math, s, ss, rel) => {

  let total_gpa = ( bn + en + math + s + ss + rel );

  let cgpa = total_gpa/6;

  if( bn == 0 || en == 0 || math == 0 || s == 0 || ss == 0 || rel == 0){

      return "You are failed";
     
  }else{

      return `Your cgpa ${cgpa}`;
      
  }

}
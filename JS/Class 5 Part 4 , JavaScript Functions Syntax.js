function Asraf() {
  this.name = 'Asraful Haq';
  this.age = 10;
  this.skill = 'Go Lang';

  this.akas = function () {
    return 'Ami akash , , , tomi batas , , , amra sobai asraf vaier soinik';
  };

  this.batas = function () {
    return `Asraf vai er marka , , , JS marka , , ,`;
  };
}

let asraf = new Asraf();

console.log(asraf.batas());

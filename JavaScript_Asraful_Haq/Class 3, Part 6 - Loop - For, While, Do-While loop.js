let age = 10;

    age++;
    age++;
    age++;
    age++;
    age++;

    age--;
    age--;
    age--;

console.log(age);

for (let i = 0; i < 10; i++) {
  console.log('I love Js :' + i);
}

for (let i = 0; i <= 1000; i++) {
  console.log(i);
}

for (let i = 5000; i <= 5100; i++) {
  console.log(i);
}

for (let i = 1000; i < 1500; i++) {
  console.log(i);


for (let i = 1000; i > 300; i--) {
  console.log(i);
}

let count = 1;
for (let i = 1; i <= 100; i++) {
  if (i % 2 != 0) {
    console.log(i + '' + count);
    count++;
  }
}

for (let i = 1; i <= 100; i++) {
  if (i % 5 == 0) {
    console.log(i);
  }
}

for (let i = 1; i <= 100; i++) {
  if (i >= 70) {
    if (i % 3 == 0) {
      console.log(i);
    }
  }
}

for (let i = 1; i <= 100; i++) {
  console.log(i);

  if (i == 100) {
    for (let a = 100; a > 0; a--) {
      console.log(a);
    }
  }
}

for( let i = 1 <= 10; i++){
  console.log(i);
}

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

let i = 70;
do {
  console.log(i);

  i++;
} while (i <= 10);

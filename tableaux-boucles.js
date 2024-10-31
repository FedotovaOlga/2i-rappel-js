// en JS module = un fichier avec du code JS

const numbers = [2, 3, 8, 5, 1];
console.log(numbers);
console.table(numbers);

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// ES 6 : forof

for (const element of numbers) {
  console.log(element);
}

// forEach

numbers.forEach((element) => {
  console.log(element);
});

console.log("numbers pairs avec boucle while");

let i = 0;
while (i < numbers.length) {
  if (numbers[i] % 2 == 0) {
    console.log(numbers[i]);
  }
  i++;
}

console.log("numbers pairs avec boucle dowhile");

i = 0;
do {
  if (numbers[i] % 2 == 0) {
    console.log(numbers[i]);
  }
  i++;
} while (i < numbers.length);

console.log("numbers pairs avec boucle for");

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element % 2 == 0) {
    console.log(element);
  }
}

console.log("numbers pairs avec boucle forof");

for (const element of numbers) {
  if (element % 2 == 0) {
    console.log(element);
  }
}

console.log("numbers avec indice pair, boucle while avec if");

i = 0;
while (i < numbers.length) {
  if (i % 2 == 0) {
    console.log(numbers[i]);
  }
  i++;
}

console.log("numbers avec indice pair, boucle while sans if");

i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i = i + 2;
}

console.log("numbers avec indice pair, boucle for sans if (plus optimisé! 3 itérations au lieu de 5) et avec +=");

for (let i = 0; i < numbers.length; i += 2) {
  const element = numbers[i];
  console.log(element);
}

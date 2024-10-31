const numbers = [2, 3, 8, 5, 1];

console.log(numbers.indexOf(3));
console.log(numbers.indexOf(13));
console.log(numbers.indexOf(2, 3)); // chercher un elem a partir de index...

// numbers.push(10, 20);
// console.log(numbers);

// splice : multi-tâches
// ajouter dans un tableau

numbers.splice(2, 0, 10, 20); // 2ième param : remplacer combien d'elements; premier param : index de début d'operation; dernier param : elems à ajouter)
console.log(numbers);

// supprimer
numbers.splice(2, 2);
console.log(numbers);

// ajouter + supprimer ( = remplacer)
const values = numbers.splice(2, 1, 10, 20);
console.log(numbers);
console.log(values); // donc splice retourne les valeurs supprimés

// foreach
console.log("foreach :");

// callback
numbers.forEach(print);

function print(elt) {
  console.log(elt);
}

// fonction anonyme
numbers.forEach(function (elt) {
  console.log(elt);
});

// arrow function
numbers.forEach((elt) => console.log(elt));
numbers.forEach((elt) => console.log(elt));

// map : fonction de transformation (mais enregistre une copie, ne modifie pas les valeurs d'origine)
console.log("map");

numbers.map((elt) => elt + 3).forEach((elt) => console.log(elt));

// filter : fonction qui garde des éléments selon une condition
console.log("filter");

numbers.filter((elt) => elt % 2 == 0).forEach((elt) => console.log(elt)); // après forEach on peut plus rien appliquer

// exo
console.log("exo");

const marques = ["ford", "peugeot", "mercedes", "fiat", "skoda"];
// afficher les maques de nbr pair de caracteres

marques
    .filter((elt) => elt.length % 2 == 0)
    .forEach((elt) => console.log(elt));

console.log(numbers);

let result = numbers.reduce((prev, curr) => prev + curr);
console.log(result);

// afficher le nbr total de caracteres de marques contenant un nbr pair de caracteres (16)

console.log("exo2 marques");

let totalChar = marques
    .filter((elt) => elt.length % 2 == 0)
    .reduce((prev, curr) => prev + curr);

console.log(totalChar.length);

// on pouvait aussi calculer .length avec map ou bien sans map mais mettre .length dans filter

// et ici on rajoute 0 comme valeur initiale pour reduce
console.log("avec initialValue");

totalChar = marques
    .filter((elt) => elt.length % 2 == 0)
    .reduce((prev, curr) => prev + curr.length, 0);
    console.log(totalChar);

// find

console.log("find");

const firstValue = numbers.find(elt => elt % 2 == 0); // si pas possible => retourne Undifined
console.log(firstValue);

// le nom de la premiere parque qui commence par 'f'
console.log("exo3 marques");

const firstF = marques.find(elt => elt[0] == 'f')
console.log(firstF);

console.log("avec startsWith :");

// ES 6 avec verbe bouleen : startsWith, endsWith, includes
console.log(marques.find(elt => elt.startsWith('f')));

// ES 6 => findIndex :
console.log("findIndex :");

const firstIndex = numbers.findIndex(elt => elt % 2 == 0)
console.log(firstIndex);

// every et some = all et any en C# et Java
console.log("every et some :");

console.log(numbers.every(elt => elt % 2 == 0)); // false
console.log(numbers.some(elt => elt % 2 == 0)); // true

// Existe-t-il une marque qui commence par 'p' et se termina par 't' et contenant un nbr impair de caracteres?
console.log("exo4 marques");
console.log(marques.some(elt =>
    elt.length % 2 !== 0
    && elt.startsWith ('p')
    && elt.endsWith('t')))










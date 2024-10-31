// déstructuration
const numbers1 = [1, 2, 3, 4];
const [first, second] = numbers1; // => const first = numbers[0]; const second = numbers[1]
console.log(first, second); // on récupère les éléments dans l'ordre

const object = {
    nom: "Doe",
    age: 45,
  };

  const {nom, age} = object; // => const nom = object.nom; const age = object.age
  console.log(nom, age);
  

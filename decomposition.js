// spread operator : décomposition

const numbers1 = [1, 2, 3, 4];
const numbers2 = [10, ...numbers1, 20]; // "..." pour pas avoir un tableau dans un tableau

console.log(numbers2);

const object = {
    nom: "Doe",
    age: 45,
  };

  const object2 = {...object, prenom: "John"} // ajoute une cle-valeur dans l'objet
  console.log(object2);
  
  const key = "Ville";
  const object3 = {
    ...object,
    // computed property (propriété calculé) => c'est pour ça qy'il y a des crochets, ceci n'est pas un tableau
    [key]: "Marseille" // ça sert si on récupère cette clé dynamiquement par l'utilisateur par ex.
  };

  console.log(object3);
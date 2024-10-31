"use strict"
const object = {
    nom: undefined,
    age: 45,
  };

//   let nom = null;
//   if (object.nom != null && object.nom != undefined) {
//     nom = object.nom;
//   }
//   else {
//     nom = "Doe";
//   }

// Nullish coalescing : ES 2020
const nom = object.nom ?? "Doe"; // remplace toutes les lignes 6 - 12 ;
// vérifie si c'est null ou undefined, alors met Doe, sinon object.nom
  console.log(nom);
  
  let personne = undefined;

  if (2 > 3) {
    personne = {
        nom: "Wick",
        age: 45,
    }
  } // erreur si on fait pas ce qui est plus bas

//   if (personne != null)
//   {
//     console.log(personne.nom);
//   }

// chainage optionnel
console.log(personne?.nom); // même chose que plus haut mais ES 2020 (plus court)

console.log("string template");


const firstname = "John";
const lastname = "Wick";

const message = "Hello " + firstname + " " + lastname;
console.log(message);
// ES 5 : String template
const msg = `Hello ${firstname} ${lastname}!
Comment allez vous?`
console.log(msg);

// let x = 2;

// if (x > 0)
// {
//     let y = "positif"
// }
// console.log(y);

// let : portée locale; var => portée globale ed la variable
// on peut pas redéclarer une variable qui a déjà été déclaré avec let

z = 10;
console.log(z); // undefined parce qu'on a rajouté "use strict" au début => pareil dans Angular et React
var z; // pas d'err parce que =>
// JS : Hoisting (la remontée, la remontada) => JS remonte les déclarations vers le haut
// et avec "let" ça fonctionne pas

// contexte global => var
// sinon => let



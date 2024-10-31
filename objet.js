const object = {
  nom: "Doe",
  age: 45,
};

console.log(object.nom);
console.log(object["age"]);

// for in => object; for of => tableau

for (const key in object) {
  console.log(key, object[key]);
}

console.log(Object.keys(object));
console.log(Object.values(object));
console.log(Object.entries(object)); // retourne tableau de tableau

// donc ici on utilise for of :
for (const [key, value] of Object.entries(object)) {
  console.log(key, value);
}

// deux objetcs utilisant le même espace mémoire :
// const object2 = object; // (c'est pas comme avec les variables)

// clonage (reconstruction d'un nouvel objet à l'aide de décomposition avec ...) :
console.log("clone :");
const object2 = { ...object };
object2.nom = "Travolta";
console.log(object.nom);

console.log("avec funct et this :");
const alien = {
  name: "Tom",
  color: "white",
  sayHello: function() {
      console.log("Hello " + this.name);
  },
//   sayHello: () => {
//     console.log("Hello " + this.name);
//   },
};
console.log(alien.name);
alien.sayHello();

// fonct fleché ne peut pas utiliser this => ne pas utiliser les fonctions flechés dans les objets

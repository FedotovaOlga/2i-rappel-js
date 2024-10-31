// déclaration d'une fonction
// fonction nommée
function somme(a, b) {
    return a + b;
}

// appel d'une focntion
console.log(somme(2,3));

// fonction anonyme
const produit = function (a, b) {
    return a * b;
}

console.log(produit(2,3));

// ES 5: 2009
// Arrow function (si une seule instruction => pas besoin d'accolades et return explicite; des qu'il y a return => ajouter accolades)
//const soustraction = (a, b) => a - b;

const soustraction = (a, b) => {return a - b};

console.log(soustraction(2,3));
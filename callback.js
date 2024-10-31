function somme(a = 0, b = 0) {
  return a + b;
}

function produit(a = 0, b = 0) {
  return a * b;
}

function operation(a, b, func) {
  return func(a, b);
}

console.log("callback :");


// on peut passer une fonction comme un param d'une autre: callback
// callback : fonction de retour / fonction de rappel
console.log(operation(2, 3, somme));
console.log(operation(2, 3, produit));

console.log("avec deux fonctions en params :");


// déclarer une fonction operation2 pour qu'elle accepte 5 params : a, b, c, func1 et func2
// operation2(2, 3, 5, somme, produit) => (2 + 3) * 5 => 25
// operation2(2, 3, 5, produit, somme) => (2 * 3) + 5 => 11

function operation2(a, b, c, func1, func2){
    return func2(func1(a, b), c)
}

console.log(operation2(2, 3, 5, somme, produit));
console.log(operation2(2, 3, 5, produit, somme));
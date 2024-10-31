// function somme(a = 0, b = 0) {
//   return a + b;
// }

console.log(somme(2, 3));
console.log(somme(2)); // NaN, sauf si y a params par défaut (a = 0, b = 0)
console.log(somme()); // NaN, sauf si y a params par défaut (a = 0, b = 0)

// maximum2(a, b) retourne le max

console.log("exo maximum 2");

function maximum2(a, b) {
  if (a > b) return a;
  return b;
}

console.log(maximum2(4, 7));
console.log(maximum2(4, 4));

const maximum2v2 = (a, b) => (a > b ? a : b); // avec condition ternaire et fonction anonyme

console.log(maximum2v2(4, 6));
console.log(maximum2v2(5, 5));

console.log("maximum3");

function maximum3(a, b, c) {
  if (a > b) {
    return maximum2(a, c);
    // if ( a > c)
    //     return a;
    // return c;
  } else {
    return maximum2(b, c);
    // if (b > c)
    //     return b;
    // return c;
  }
}

console.log(maximum3(2, 3, 4));
console.log(maximum3(4, 3, 2));
console.log(maximum3(3, 4, 2));
console.log(maximum3(2, 4, 3));

console.log("max3 sur une ligne");

const maximum3v2 = (a, b, c) => maximum2(c, maximum2(a, b));

// const maximum3v2 = (a, b, c) => {
//     const tmp = maximum2(a,b);
//     return maximum2(c, tmp);
// }

console.log(maximum3v2(2, 3, 4));
console.log(maximum3v2(4, 3, 2));
console.log(maximum3v2(3, 4, 2));
console.log(maximum3v2(2, 4, 3));

console.log("varargs");

// ...params : paramètres restants
// Varargs : Variable number of arguments
function somme(...params) {
  let result = 0;
  for (const param of params) {
    result += param; // result = result + param;
  }
  return result;
}

console.log(somme(2, 3));
console.log(somme(2)); // NaN, sauf si y a params par défaut (a = 0, b = 0)
console.log(somme()); // NaN, sauf si y a params par défaut (a = 0, b = 0)
console.log(somme(2, 3, 10));

console.log("compter le total des caracteres");

function total(...params) {
  let result = 0;
  for (const param of params) {
    result += param.length; // result = result + param;
  }
  return result;
}

console.log(total("az", "qsd"));

// décomposition
console.log("décomposition: console.log(somme(...nombres))");

const nombres = [1, 2, 3];
console.log(somme(...nombres)); // si on fait sans "...", la somme(...params) s'attend à un tableau,
// et on passe un tableau dans un tableau => faux

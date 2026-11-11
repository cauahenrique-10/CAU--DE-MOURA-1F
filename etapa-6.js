function dobro(x) {
  return x * 2;
}

const media = (lista) => {
  let soma = 0;
  for (const n of lista) {
    soma += n;
  }
  return soma / lista.length;
};

function ehPar(n) {
  return n % 2 === 0;
}

function somaCorrigida(a, b) {
  return a + b;
}

console.log(dobro(21));
console.log(media([8, 6.5, 9, 4]));
console.log(ehPar(4));
console.log(ehPar(7));
console.log(somaCorrigida(2, 3));

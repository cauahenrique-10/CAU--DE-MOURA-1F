for (let i = 1; i <= 5; i++) {
  console.log(`Linha ${i}`);
}

const notas = [8, 6.5, 9, 4];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}

console.log(soma / notas.length);

notas.push(7);
console.log(notas.length);

for (const n of notas) {
  console.log(n);
}

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

let total = 0;
for (let i = 1; i <= 4; i++) {
  total += i;
}
console.log(total);

const NOTA_MINIMA = 6;

function calcularMedia(n1, n2) {
  return (n1 + n2) / 2;
}

function notaValida(n) {
  return !Number.isNaN(n) && n >= 0 && n <= 10;
}

const botaoCalcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

botaoCalcular.addEventListener("click", () => {
  const texto1 = document.getElementById("nota1").value;
  const texto2 = document.getElementById("nota2").value;
  const n1 = Number(texto1);
  const n2 = Number(texto2);

  console.log("Digitado:", texto1, texto2, typeof texto1);

  // TODO 3 (seção 8.5): validar as notas
  // TODO 4 (seção 8.5): calcular e mostrar o resultado
});

const NOTA_MINIMA = 6;

function calcularMedia(n1, n2) {
  // TODO 1 (seção 8.3)
}

function notaValida(n) {
  // TODO 2 (seção 8.4)
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

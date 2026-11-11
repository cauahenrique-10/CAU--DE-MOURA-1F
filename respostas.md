# Respostas da atividade: Introdução ao JavaScript

**Aluno:** Cauã Henrique de Moura
**Turma:** 1F, Técnico Integrado em Informática para Internet
**Disciplina:** Desenvolvimento Web I, Prof. Hewerton Enes de Oliveira

Aqui estão as respostas dos checkpoints de cada etapa, escritas com as minhas palavras. O código de cada etapa está nos arquivos etapa-0.html e etapa-0.js, etapa-1.html e etapa-1.js, e assim por diante, até a etapa-8-5. Cada arquivo html carrega o js que tem o mesmo nome. Antes de escrever as respostas, executei o código de cada etapa e conferi o que apareceu no console.

---

## Etapa 0: Preparando o ambiente

**1. Em qual aba das ferramentas do desenvolvedor a mensagem apareceu?**

Apareceu na aba **Console**. O texto "Olá, JavaScript!" não aparece na página, só ali.

**2. Por que o defer vai ser importante quando o script precisar mexer na página?**

O defer faz o navegador ler o HTML inteiro antes de rodar o script. Se o script rodasse antes, os elementos da página ainda não existiriam, e o JavaScript não conseguiria encontrar o parágrafo "mensagem" para mudar o texto dele.

**3. E se o HTML chamasse codigo.js mas o arquivo se chamasse script.js?**

O navegador não ia achar o arquivo. Aparece um erro 404 ("Failed to load resource") no console, o script não roda e nada é impresso. Foi por isso que a apostila insiste em conferir se os nomes estão exatamente iguais.

---

## Etapa 1: O que é JavaScript

Preenchi a tabela com o que apareceu no console:

| Expressão | Resultado observado |
|---|---|
| 2 + 3 | 5 |
| "Web" + " I" | "Web I" |
| "5" + 3 | "53" |
| "5" - 3 | 2 |
| 2 + 3 * 4 | 14 |
| (2 + 3) * 4 | 20 |

**1. Por que "5" + 3 e "5" - 3 dão resultados tão diferentes?**

Quando um dos lados do + é texto, o JavaScript entende que é para juntar textos, então o 3 vira texto e sai "53". O - só serve para números, então ele transforma o "5" em número 5 e faz a conta: 5 - 3 = 2.

**2. Por que 2 + 3 * 4 e (2 + 3) * 4 dão resultados diferentes?**

Porque a multiplicação é feita antes da soma, igual na matemática. Em 2 + 3 * 4, primeiro vem 3 * 4 = 12 e depois 2 + 12 = 14. Com os parênteses, a soma é feita primeiro: 5 * 4 = 20.

---

## Etapa 2: Variáveis e tipos

**1. O que as quatro linhas com typeof vão imprimir?**

Na ordem, vão aparecer: string, number, boolean e undefined.

A escola é um texto, a nota1 é um número, o aprovado é verdadeiro ou falso, e o sobrenome foi criado sem nenhum valor, então é undefined.

**2. Qual erro apareceu na última linha? Por quê?**

Apareceu "TypeError: Assignment to constant variable". A variável escola foi criada com const, e uma const não aceita receber outro valor depois. Se eu quisesse trocar, teria que ter usado let.

**3. Quais nomes de variável são válidos?**

Os válidos são nota_final e $total. Os inválidos são:

- 3nota, porque nome de variável não pode começar com número;
- nota-final, porque o hífen é lido como o sinal de menos;
- class, porque é uma palavra reservada da linguagem.

**4. O que o código da idade imprime?**

O código começa com idade valendo 15, depois faz idade = idade + 1 e imprime. Sai **16**. O computador calcula 15 + 1 e guarda o resultado de volta na própria idade.

**O que testei por conta própria:**

- Coloquei um console.log da nota1 antes da linha do erro e apareceu **9**, porque o let deixa trocar o valor.
- Mudei a nota1 para "8.5" (com aspas) e o typeof passou a imprimir **string**, porque com aspas o valor vira texto.

---

## Etapa 3: Operadores, conversão e texto com variáveis

**1. Saída prevista de cada console.log (8 linhas):**

- 9 5 14
- 3.5
- 1
- 49
- Olá, Ana! 7 dividido por 2 é 3.5.
- 8.5
- 7.51
- NaN

Depois de executar, conferi e bateu com a minha previsão.

**2. Qual a diferença entre Number("7.5") + 1 e "7.5" + 1?**

No primeiro, o Number() transforma o texto em número, então a conta dá **8.5**. No segundo, o "7.5" continua sendo texto, então o JavaScript junta os dois e sai o texto **"7.51"**.

Isso importa muito para formulários, porque tudo o que a pessoa digita chega ao JavaScript como texto. Se eu não converter com Number(), as notas seriam coladas uma na outra em vez de somadas.

**3. Contas feitas sem executar:**

| Expressão | Resultado | Como pensei |
|---|---|---|
| 10 % 3 | 1 | 10 dividido por 3 dá 3 e sobra 1 |
| 2 ** 3 | 8 | 2 elevado a 3 |
| 10 / 4 | 2.5 | divisão normal |

---

## Etapa 4: Condicionais

**1. Com temperatura = 20 e com 30, qual mensagem aparece?**

- Com **20** aparece "Agradável". A primeira condição (maior ou igual a 30) é falsa, mas a segunda (maior ou igual a 20) é verdadeira, porque 20 é maior *ou igual* a 20.
- Com **30** aparece "Calor". A primeira condição já é verdadeira, então o resto nem é testado.
- Testei também com **19** e apareceu "Frio", porque nenhuma das duas condições foi verdadeira.

**2. Saídas das quatro últimas linhas e por que usar ===:**

- 5 == "5" dá true
- 5 === "5" dá false
- 0 == false dá true
- 0 === false dá false

O == tenta converter os tipos antes de comparar, e por isso acha que o número 5 é igual ao texto "5", e que o 0 é igual a false. Isso pode causar resultados surpreendentes. O === só diz que é igual se o valor **e** o tipo forem iguais, então o resultado é mais previsível. Por isso a regra é usar sempre === e !==.

**3. Condição que é verdadeira só quando a nota está entre 0 e 10 (inclusive):**

nota >= 0 && nota <= 10

Ou seja, a nota tem que ser maior ou igual a 0 **e** menor ou igual a 10, as duas coisas ao mesmo tempo.

---

## Etapa 5: Repetição e listas

**1. Qual valor o segundo bloco imprime (a média das quatro notas)?**

Somei 8 + 6.5 + 9 + 4 = 27.5 e dividi por 4. A média é **6.875**.

**2. Qual é o índice do primeiro e do último elemento da lista notas?**

O primeiro tem índice **0**. O último tem índice **length - 1**. Na lista original, que tem 4 notas, o último é o índice 3.

**3. Laço for que imprime os pares de 2 a 10:**

for (let i = 2; i <= 10; i += 2) { console.log(i); }

Ele começa o i em 2, repete enquanto o i for menor ou igual a 10, e a cada volta soma 2. Imprime 2, 4, 6, 8 e 10.

**4. Teste de mesa:**

O código começa com total valendo 0 e, para o i de 1 até 4, soma o i no total.

| Volta | i | total depois da volta |
|---|---|---|
| 1 | 1 | 1 |
| 2 | 2 | 3 |
| 3 | 3 | 6 |
| 4 | 4 | 10 |

O que será impresso é **10**.

---

## Etapa 6: Funções

**1. O que a função soma imprime? Qual é o erro?**

A função faz a conta a + b, mas só isso, sem devolver nada. Por isso o console.log imprime **undefined**. O erro é a falta do return. Para corrigir, basta escrever return a + b; dentro da função. Assim soma(2, 3) devolve **5**.

**2. Função ehPar(n):**

function ehPar(n) { return n % 2 === 0; }

Ela devolve true quando o resto da divisão de n por 2 é zero, e false nos outros casos. Testei ehPar(4), que devolveu true, e ehPar(7), que devolveu false.

**3. Qual a diferença entre console.log(x) e return x dentro de uma função?**

O console.log(x) só **mostra** o valor no console, para eu poder ver. A função continua sem devolver nada. Já o return x **devolve** o valor para quem chamou a função e encerra a função. Esse valor pode ser guardado em uma variável ou usado em outra conta.

**O que testei no console do navegador:** dobro(5) devolveu 10 e media([10, 6]) devolveu 8.

---

## Etapa 7: Mexendo na página (DOM e eventos)

**1. O que acontece se eu tirar o defer do script?**

Aparece o erro "TypeError: Cannot set properties of null (setting 'textContent')". Sem o defer, o script roda antes de o navegador ler o corpo da página. Nesse momento o parágrafo ainda não existe, então o getElementById("mensagem") devolve null (nada encontrado), e a linha que muda o textContent tenta mexer em algo que não existe.

**2. O que acontece, passo a passo, a cada clique no botão?**

1. O navegador percebe o clique e executa a função que foi registrada com o addEventListener.
2. A linha cliques++ soma 1 na variável cliques.
3. A linha que muda o textContent do contador mostra o novo número dentro do span, e o contador da página sobe.
4. A linha que muda o textContent do botão troca o texto dele para "Clicado!".

**3. Por que a variável cliques foi declarada com let e não com const?**

Porque o valor dela muda a cada clique. Se fosse const, o cliques++ daria o erro "Assignment to constant variable".

**As duas alterações que fiz por conta própria (no etapa-7.js):**

- Usei mensagem.style.color = "green" para deixar a mensagem verde.
- Dentro da função do clique, usei botao.textContent = "Clicado!" para trocar o texto do botão.

---

## Etapa 8: Mini-projeto, calculadora de média

Fiz o projeto em partes, como a apostila pede, testando cada uma antes de passar para a próxima. Cada parte tem o seu par de arquivos, de etapa-8-1 a etapa-8-5, e cada um mostra o código até onde aquela seção termina.

### 8.1: Montar a página (HTML)

Arquivos etapa-8-1.html e etapa-8-1.js. A página tem dois campos numéricos (nota1 e nota2), o botão "calcular" e um parágrafo "resultado" ainda vazio. O botão ainda não faz nada. Os id são a ponte que o JavaScript usa para encontrar cada elemento.

### 8.2: Esqueleto e leitura dos campos

Arquivos etapa-8-2.html e etapa-8-2.js. O js tem a constante NOTA_MINIMA, as duas funções ainda vazias e o evento de clique, com os quatro TODO. Digitei 8 e 7, cliquei em Calcular e o console mostrou "Digitado: 8 7 string".

Isso confirma que o valor lido de um campo (o .value) é **texto**. Por isso o código converte com Number().

### 8.3: TODO 1, calcular a média

Arquivos etapa-8-3.html e etapa-8-3.js. A função calcularMedia recebe n1 e n2 e devolve (n1 + n2) / 2.

Testes no console: calcularMedia(8, 7) devolveu 7.5, calcularMedia(10, 5) devolveu 7.5 e calcularMedia(6, 6) devolveu 6.

**Por que não dá para escrever n1 + n2 / 2?**

Porque a divisão é feita antes da soma. Com 8 e 6, n1 + n2 / 2 vira 8 + 3 = 11, mas a média certa é (8 + 6) / 2 = 7. Os parênteses são necessários.

### 8.4: TODO 2, verificar se a nota é válida

Arquivos etapa-8-4.html e etapa-8-4.js. A função notaValida devolve o resultado de: não é NaN, e é maior ou igual a 0, e é menor ou igual a 10. No código fica !Number.isNaN(n) && n >= 0 && n <= 10.

Testes no console: notaValida(5) e notaValida(10) devolveram true. notaValida(11), notaValida(-1) e notaValida(NaN) devolveram false.

### 8.5: TODO 3 e 4, validar, calcular e mostrar

Arquivos etapa-8-5.html e etapa-8-5.js, que são a versão final da calculadora. O código completo está no arquivo, e o raciocínio que usei foi este:

1. Se algum campo estiver vazio ou alguma nota for inválida, mostro "Informe duas notas entre 0 e 10." no resultado e paro a função com um return.
2. Se estiver tudo certo, calculo a média com a função calcularMedia.
3. Se a média for maior ou igual a NOTA_MINIMA, a situação é "Aprovado". Se não, é "Abaixo da média".
4. Mostro no resultado o texto "Média: 7.5 - Aprovado" (por exemplo), usando toFixed(1) para sempre aparecer uma casa decimal.

Algumas coisas que aprendi nessa parte:

- Testo o campo vazio antes de confiar na conversão, porque Number("") vale 0 e um campo vazio viraria uma nota zero "válida".
- O return dentro do if encerra a função, então o resto do código só roda quando as notas estão corretas.
- Os atributos min e max do HTML não impedem de digitar 11, por isso a validação em JavaScript continua sendo necessária.
- Na versão final tirei o console.log de apoio que usei na 8.2.

### 8.6: Teste da solução

| Nota 1 | Nota 2 | Resultado esperado | Resultado obtido | Deu certo? |
|---|---|---|---|---|
| 8 | 7 | Média: 7.5 - Aprovado | Média: 7.5 - Aprovado | Sim |
| 5 | 6 | Média: 5.5 - Abaixo da média | Média: 5.5 - Abaixo da média | Sim |
| 6 | 6 | Média: 6.0 - Aprovado (limite) | Média: 6.0 - Aprovado | Sim |
| 10 | 10 | Média: 10.0 - Aprovado | Média: 10.0 - Aprovado | Sim |
| (vazio) | 5 | Mensagem de erro | Informe duas notas entre 0 e 10. | Sim |
| 11 | 5 | Mensagem de erro | Informe duas notas entre 0 e 10. | Sim |

### Checkpoint final

**1. Por que a média foi calculada em uma função separada (calcularMedia)?**

Porque assim o cálculo fica escrito uma vez só e pode ser reaproveitado em outros lugares. Também consigo testar a função sozinha no console, como fiz com calcularMedia(8, 7), e o código do clique fica mais curto e mais fácil de ler.

**2. Se o professor mudasse a média mínima de 6 para 7, quantas linhas eu precisaria alterar?**

Só **uma**: a linha que cria a constante NOTA_MINIMA. O resto do código usa o nome NOTA_MINIMA, então não preciso sair procurando o número 6 pelo programa.

---

## Autoavaliação

Consigo fazer sem consultar o material:

- [x] Explicar o que o JavaScript faz em uma página, em comparação com HTML e CSS.
- [x] Abrir o console e ler uma mensagem de erro.
- [x] Escolher entre let e const e identificar o tipo de um valor.
- [x] Converter texto em número e explicar por que isso é necessário com formulários.
- [x] Escrever if/else e usar ===.
- [x] Percorrer uma lista com for.
- [x] Criar uma função com parâmetros e return.
- [x] Selecionar um elemento, mudar seu texto e reagir a um clique.

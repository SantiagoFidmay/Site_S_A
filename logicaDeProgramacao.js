// Questão 5
function ordenarNumeros() {
  let res = document.getElementById("res5");
  let arr = [];
  for (let i = 1; i <= 20; i++) {
    arr.push(i);
  }
  res.innerHTML = "Crescente: " + arr + "<br>";
  res.innerHTML += "Decrescente: " + arr.slice().reverse();
}

// Questão 6 (BubbleSort)
function bubbleSortAleatorios() {
  let res = document.getElementById("res6");
  let arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 20) + 1);
  }

  let qtde = arr.length;
  for (let j = 0; j < qtde - 1; j++) {
    for (let i = 0; i < qtde - j - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let aux = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = aux;
      }
    }
  }

  res.innerHTML = "Array ordenado (BubbleSort): " + arr;
}

// Questão 7 (Somar 10 aleatórios 1..220)
function somarAleatorios() {
  let res = document.getElementById("res7");
  let arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 220) + 1);
  }
  let soma = arr.reduce((acc, val) => acc + val, 0);

  res.innerHTML = "Números: " + arr + "<br>";
  res.innerHTML += "Soma: " + soma;
}

// Questão 8 (Matriz 3x3)
function gerarMatriz() {
  let res = document.getElementById("res8");
  let mat = [];
  for (let i = 0; i < 3; i++) {
    mat[i] = [];
    for (let j = 0; j < 3; j++) {
      mat[i][j] = Math.floor(Math.random() * 20) + 1;
    }
  }

  res.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    res.innerHTML += mat[i].join(", ") + "<br>";
  }
}

// Questão 9/12 (IMC)
function calcularIMC() {
  let res = document.getElementById("res9");
  let altura = Number(document.getElementById("altura").value);
  let peso = Number(document.getElementById("peso").value);

  if (!altura || altura <= 0) {
    res.innerHTML = "Altura inválida!";
    return;
  }
  if (!peso || peso <= 0) {
    res.innerHTML = "Peso inválido!";
    return;
  }

  let imc = peso / (altura * altura);
  res.innerHTML = "IMC = " + imc.toFixed(2);
}

// Questão 10 (Conversão)
function converterTemperatura() {
  let res = document.getElementById("res10");
  let conversao = document.getElementById("conversao").value.trim().toUpperCase();
  let temperatura = Number(document.getElementById("temperatura").value);

  if (isNaN(temperatura)) {
    res.innerHTML = "Temperatura inválida!";
    return;
  }

  if (conversao === "C") {
    let resultado = (temperatura - 32) * (5 / 9);
    res.innerHTML = temperatura + " °F → " + resultado.toFixed(2) + " °C";
  } else if (conversao === "F") {
    let resultado = (temperatura * 9 / 5) + 32;
    res.innerHTML = temperatura + " °C → " + resultado.toFixed(2) + " °F";
  } else {
    res.innerHTML = "Digite 'C' ou 'F'.";
  }
}

// Questão 11 (Busca linear)
function buscaLinear() {
  let res = document.getElementById("res11");
  let arr = [3, 7, 10, 15, 20, 25, 30];
  let valor = Number(document.getElementById("buscaValor").value);

  if (isNaN(valor)) {
    res.innerHTML = "Digite um número válido.";
    return;
  }

  let encontrado = arr.indexOf(valor);
  if (encontrado !== -1) {
    res.innerHTML = "Valor " + valor + " encontrado na posição " + encontrado;
  } else {
    res.innerHTML = "Valor não encontrado!";
  }
}
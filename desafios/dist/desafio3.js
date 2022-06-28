"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
let botaoAtualizar = document.getElementById("atualizar-saldo");
let botaoLimpar = document.getElementById("limpar-saldo");
let soma = document.getElementById("soma");
let campoSaldo = document.getElementById("campo-saldo");
campoSaldo.innerHTML = "0";
let acc = 0;
function somarAoSaldo(somaa) {
    acc += somaa;
    campoSaldo.innerHTML = acc.toString();
}
function limparSaldo() {
    campoSaldo.innerHTML = "";
    acc = 0;
}
botaoAtualizar.addEventListener("click", function () {
    somarAoSaldo(parseInt(soma.value));
});
botaoLimpar.addEventListener("click", function () {
    limparSaldo();
});

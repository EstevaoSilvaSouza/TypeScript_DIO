"use strict";
// Como podemos melhorar o esse código usando TS?
// Podemos melhorar criando uma interface a ela e aplicando..
var Profissao;
(function (Profissao) {
    Profissao["Jogador"] = "Jogador de fotebol";
    Profissao["Professor"] = "Engenheiro de dado";
    Profissao["Engenheiro"] = "Engenheiro de Producao";
    Profissao["atriz"] = "de filmes adulto";
})(Profissao || (Profissao = {}));
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Profissao.Engenheiro;
let pessoa2 = {};
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Profissao.Jogador;
let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: Profissao.Jogador,
};
let pessoa4 = {
    nome: "Luan",
    idade: 23,
    profissao: Profissao.Jogador,
};
console.log(pessoa4);

// Como podemos melhorar o esse código usando TS?

// Podemos melhorar criando uma interface a ela e aplicando..

enum Profissao {
  "Jogador" = "Jogador de fotebol",
  "Professor" = "Engenheiro de dado",
  "Engenheiro" = "Engenheiro de Producao",
  "atriz" = "de filmes adulto",
}

type profissoes = {
  exercida: Profissao;
};

interface IHumano {
  nome: string;
  idade: number | string;
  profissao: Profissao;
}

let pessoa1 = {} as IHumano;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Profissao.Engenheiro;

let pessoa2 = {} as IHumano;
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Profissao.Jogador;

let pessoa3: IHumano = {
  nome: "laura",
  idade: "32",
  profissao: Profissao.Jogador,
};

let pessoa4: IHumano = {
  nome: "Luan",
  idade: 23,
  profissao: Profissao.Jogador,
};

console.log(pessoa4);

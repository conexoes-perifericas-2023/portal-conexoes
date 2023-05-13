const cidades = [
  {
    nome: "Recife",
    populacaoTotal: 1653461,
    anoFundacao: 1537
  },
  {
    nome: "Olinda",
    populacaoTotal: 397268,
    anoFundacao: 1535
  },
  {
    nome: "Caruaru",
    populacaoTotal: 363369,
    anoFundacao: 1857
  },
  {
    nome: "Petrolina",
    populacaoTotal: 343023,
    anoFundacao: 1895
  },
  {
    nome: "Garanhuns",
    populacaoTotal: 140577,
    anoFundacao: 1879
  }
];

const tabelaCidades = document.getElementById("tabela-cidades");

function carregaCidades() {
  cidades.forEach((cidade) => {
    const tr = document.createElement("tr");
    const tdNome = document.createElement("td");
    const tdPopulacao = document.createElement("td");
    const tdAnoFundacao = document.createElement("td");

    tdNome.textContent = cidade.nome;
    tdPopulacao.textContent = cidade.populacaoTotal;
    tdAnoFundacao.textContent = cidade.anoFundacao;

    tr.appendChild(tdNome);
    tr.appendChild(tdPopulacao);
    tr.appendChild(tdAnoFundacao);

    tabelaCidades.appendChild(tr);
  });
}

const artistas = [
  {
    artista: "Liniker",
    musicaHit: "Zero",
    idade: 26
  },
  {
    artista: "As Bahias e a Cozinha Mineira",
    musicaHit: "Mãe",
    idade: 32
  },
  {
    artista: "Linn da Quebrada",
    musicaHit: "Bixa Preta",
    idade: 31
  },
  {
    artista: "Johnny Hooker",
    musicaHit: "Alma Sebosa",
    idade: 33
  },
  {
    artista: "Elza Soares",
    musicaHit: "A Carne",
    idade: 92
  },
  {
    artista: "Criolo",
    musicaHit: "Não Existe Amor em SP",
    idade: 46
  },
  {
    artista: "Lincoln Olivetti",
    musicaHit: "Aeromoça",
    idade: 64
  },
  {
    artista: "Jaloo",
    musicaHit: "Ah! Dor!",
    idade: 32
  },
  {
    artista: "Jup do Bairro",
    musicaHit: "Luta por Mim",
    idade: 28
  },
  {
    artista: "Don L",
    musicaHit: "Essa é Pros Amigos",
    idade: 39
  }
];

function carregaArtistas() {
  
}
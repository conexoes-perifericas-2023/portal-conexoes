const turnos = [
  'manhã',
  'tarde',
  'noite',
  'madrugada'
]

var inputTurno = document.getElementById('inputTurno')
var respostaTurno = document.getElementById('respostaTurno')

function filtraTurnos() {
  var resultado = turnos.filter(turno => turno === inputTurno.value)
  respostaTurno.innerText = resultado
}

const nomesArtistas = [
  "Liniker",
  "As Bahias e a Cozinha Mineira",
  "Linn da Quebrada",
  "Johnny Hooker",
  "Elza Soares",
  "Criolo",
  "Lincoln Olivetti",
  "Jaloo",
  "Jup do Bairro",
  "Don L"
];


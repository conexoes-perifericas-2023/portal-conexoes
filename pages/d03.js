// guarda a referência de elementos html em variáveis
var inputTresMaiusculas = document.getElementById('inputTresMaiusculas')
var respostaTresMaiusculas = document.getElementById('respostaTresMaiusculas')

function transformaTresMaiusculas () {
  var palavra = inputTresMaiusculas.value
  var primeiras3Letras = palavra.slice(0, 3)
  var primeiras3LetrasMaiusculas = primeiras3Letras.toUpperCase()
  var restoDaPalavra = palavra.slice(3)
  var palavraCapitalizada = primeiras3LetrasMaiusculas + restoDaPalavra
  respostaTresMaiusculas.innerText = palavraCapitalizada
}
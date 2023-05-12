// Guarda a referência dos elemento em variáveis 
var usuarioMaiuscula = document.getElementById('usuarioMaiuscula')
var respostaMaiuscula = document.getElementById('respostaMaiuscula')




function converteMaiuscula () {
  var texto = usuarioMaiuscula.value
  respostaMaiuscula.value = texto.toUpperCase()
}
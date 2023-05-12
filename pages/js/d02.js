// guarda a referência de elementos html em variáveis
var listaFrutas = document.getElementById('listaFrutas')
var inputFruta = document.getElementById('inputFruta')


function adicionaFruta () {
  // captura o valor digitado no inputFruta no momento do click
  var valorDigitado = inputFruta.value
  
  // cria um elemento de lista => <li></li>
  var itemLista = document.createElement('li')

  // adiciona o texto digitado da tag li criada => <li>Fruta</li>
  itemLista.innerText = valorDigitado

  // adiciona o elemento <li>Fruta</li> como filho de listaFrutas
  listaFrutas.appendChild(itemLista)
}
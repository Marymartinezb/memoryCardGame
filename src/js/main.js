// ToDo: debe de replicar el array de imagenes, luego unificarlo y por ultimo desordenarlo
var images = ['berengena.png', 'mario.png', 'luigui.png', 'zanahoria.png', 'honguito.png', 'cherry.png', 'pacman.png', 'pacwoman.png', 'ghost1.png', 'ghost2.png']
var bgImages = images.concat(images)
var cardContainer = document.getElementById('cardContainer')
var cards = cardContainer.children

var randomCards = bgImages.sort(function () {
  return 0.5 - Math.random()
})

// ToDo: Hacer que la carta despues de un tiempo se vuelva.
var turnCard = function turnCard (_self) {
  _self.classList.remove('front')
  _self.style.backgroundImage = 'none'
}

// ToDo: al iniciar debe de  acomodar las imagenes random por cada carta y mostrarlas por 5s
var setImage = function setImage (card, index) {
  card.classList.add('front')
  card.style.backgroundImage = 'url("../img/' + randomCards[index]
  setTimeout(turnCard, 2000, cards[index])
}

// ToDo: cuando le de click a la carta  debe de cambiar el display de la carta
var clikedCard = function clikedCard (card, index) {
  card.addEventListener('click', function () {
    setImage(this, index)
    // currentCardId = event.target.id
    // currentCard = document.getElementById(currentCardId)
  })
}

var init = function init () {
  for (let index = 0; index < cards.length; index++) {
    let cardsId = cards[index].id
    let card = document.getElementById(cardsId)
    setImage(card, index)
    clikedCard(card, index)
  }
}
init()

// Todo: que sea posible solo clickear 2 cartas a la vez.
// ToDo: cuando 2 cartas coincidan deben ser eliminadas.
// ToDo: cuando las cartas coincidan ganar 100 pts, cuando no coindidan perder 50 pts
// ToDo: Transition para cuando se borra.

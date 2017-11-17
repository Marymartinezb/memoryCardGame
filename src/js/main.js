// ToDo: debe de replicar el array de imagenes, luego unificarlo y por ultimo desordenarlo
var images = ['berengena.png', 'mario.png', 'luigui.png', 'zanahoria.png', 'honguito.png', 'cherry.png', 'pacman.png', 'pacwoman.png', 'ghost1.png', 'ghost2.png']

var duplicateImg = images.slice()

var bgImages = images.concat(duplicateImg)

var randomCards = bgImages.sort(function () {
  return 0.5 - Math.random()
})

// ToDo: cuando le de click a la carta  debe de cambiar el display de la carta
// ToDo: debe de  acomodar las imagenes random por cada carta

var clikedCard = function clikedCard () {
  var cardContainer = document.getElementById('cardContainer')
  var cards = cardContainer.children
  // console.log(cards.length)
  for (let index = 0; index < cards.length; index++) {
    var cardsId = cards[index].id
    // console.log(cardsId)
    var card = document.getElementById(cardsId)
    card.addEventListener('click', function () {
      this.classList.add('front')
      this.style.backgroundImage = 'url("../img/' + randomCards[index]
      setTimeout(turnCard, 2000, this)
    })
  }
}
clikedCard()

// ToDo: Hacer que la carta despues de clickeada se vuelva.
// ToDo: Transition para cuando se borra.
var turnCard = function turnCard (_self) {
  _self.classList.remove('front')
  _self.style.backgroundImage = 'none'
  document.body.removeEventListener('click', clikedCard)
}

// Todo: que sea posible solo clickear 2 cartas a la vez.
// ToDo: cuando 2 cartas coincidan deben ser eliminadas.

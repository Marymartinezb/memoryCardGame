// ToDo: debe de replicar el array de imagenes, luego unificarlo y por ultimo desordenarlo
var images = [{src: 'berengena.png', id: 1}, {src: 'mario.png', id: 2}, {src: 'luigui.png', id: 3}, {src: 'zanahoria.png', id: 4}, {src: 'honguito.png', id: 5}, {src: 'cherry.png', id: 6}, {src: 'pacman.png', id: 7}, {src: 'pacwoman.png', id: 8}, {src: 'ghost1.png', id: 9}, {src: 'ghost2.png', id: 10}]
var bgImages = images.concat(images)
var cardContainer = document.getElementById('cardContainer')
var cards = cardContainer.children
var yourScore = document.getElementById('yourScore')
var score = 0
var previousCard
var currentCard

var randomObj = bgImages.sort(function () {
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
  card.style.backgroundImage = 'url("../img/' + randomObj[index].src
  setTimeout(turnCard, 2000, cards[index])
}

// ToDo: cuando 2 cartas coincidan deben quedar visibles
// ToDo: cuando las cartas coincidan ganar 100 pts, cuando no coindidan perder 50 pts
var verifingCard = function verifingCard () {
  // prevenir que la carta se vuelva
  // colocar las clases para que se queden fijas al coincidir
  if (previousCard === currentCard) {
    console.log('Coinciden')
    score = score + 100
    yourScore.innerHTML = score
    // pensar mejor
  } else {
    console.log('No Coinciden')
    if (score > 0) {
      score = score - 50
      yourScore.innerHTML = score
    }
    // pensar mejor
  }
}

// ToDo: cuando le de click a la carta debe de cambiar el display de la carta
var clikedCard = function clikedCard (card, index) {
  card.addEventListener('click', function () {
    setImage(this, index)
    previousCard = currentCard
    currentCard = randomObj[index].id
    verifingCard()
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

// ToDo: que sea posible solo clickear 2 cartas a la vez.

// ToDo: debe de replicar el array de imagenes, luego unificarlo y por ultimo desordenarlo
var images = [{src: 'berengena.png', id: 1}, {src: 'mario.png', id: 2}, {src: 'luigui.png', id: 3}, {src: 'zanahoria.png', id: 4}, {src: 'honguito.png', id: 5}, {src: 'cherry.png', id: 6}, {src: 'pacman.png', id: 7}, {src: 'pacwoman.png', id: 8}, {src: 'ghost1.png', id: 9}, {src: 'ghost2.png', id: 10}]
var bgImages = images.concat(images)
var cardContainer = document.getElementById('cardContainer')
var cards = cardContainer.children
var yourScore = document.getElementById('yourScore')
var score = 0
var previousCard
var currentCard
var clickedCard = []
var clikedCounter = 0
var currentNodeCard
var previousNodeCard

var randomObj = bgImages.sort(function () {
  return 0.5 - Math.random()
})

// ToDo: Hacer que la carta despues de un tiempo se vuelva.
var turnCard = function turnCard (card) {
  setTimeout(function () {
    card.style.backgroundImage = 'none'
    card.classList.remove('front')
  }, 2000)
}

// ToDo: al iniciar debe de  acomodar las imagenes random por cada carta y mostrarlas por 5s
var setImage = function setImage (card, index) {
  card.classList.add('front')
  card.style.backgroundImage = 'url("../img/' + randomObj[index].src
}

// ToDo: cuando las cartas coincidan ganar 100 pts, cuando la carta haya sido vista y no coincida perder 50 pts
// ToDo: cuando 2 cartas coincidan deben quedar visibles
var verifingCard = function verifingCard (card, cardId) {
  // prevenir que la carta se vuelva y que verifique en el primer click
  if (previousCard === currentCard) {
    score = score + 100
    yourScore.innerHTML = score
    // ToDo quitarles el evento, tratar de eliminar el stop propagation o el prevent default
    previousNodeCard.style.display = 'none'
    currentNodeCard.style.display = 'none'
  } else {
    clickedCard.forEach((card) => {
      if (card === cardId) {
        score = score - 50
        yourScore.innerHTML = score
      }
    })
    turnCard(card)
  }
}

// ToDo: cuando le de click a la carta debe de cambiar el display de la carta
var clikedCard = function clikedCard (card, index) {
  card.addEventListener('click', function () {
    setImage(this, index)
    previousCard = currentCard
    currentCard = randomObj[index].id
    previousNodeCard = currentNodeCard
    currentNodeCard = this
    verifingCard(card, card.id)
    clickedCard.push(card.id)
    clikedCounter = clikedCounter + 1

    if (clikedCounter >= 2) {
      previousCard = NaN
      console.log('previousCard ' + previousCard)
    }
    console.log('clikedCounter ' + clikedCounter)
  })
}

var init = function init () {
  for (let index = 0; index < cards.length; index++) {
    let cardsId = cards[index].id
    let card = document.getElementById(cardsId)
    setImage(card, index)
    turnCard(card)
    clikedCard(card, index)
  }
}
init()

// ToDo: que sea posible solo clickear 2 cartas a la vez.

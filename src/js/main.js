// ToDo: debe de replicar el array de imagenes, luego unificarlo y por ultimo desordenarlo
var images = [{src: 'berengena.png', gameId: 1}, {src: 'mario.png', gameId: 2}, {src: 'luigui.png', gameId: 3}, {src: 'zanahoria.png', gameId: 4}, {src: 'honguito.png', gameId: 5}, {src: 'cherry.png', gameId: 6}, {src: 'pacman.png', gameId: 7}, {src: 'pacwoman.png', gameId: 8}, {src: 'ghost1.png', gameId: 9}, {src: 'ghost2.png', gameId: 10}]
var bgImages = images.concat(images)
var cardContainer = document.getElementById('cardContainer')
var cards = cardContainer.children
var yourScore = document.getElementById('yourScore')
var score = 0
var cardsLog = []
var clikedCounter = 0
var clickedCards = []

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
  if (clickedCards[1] !== undefined && clickedCards[0].gameId === clickedCards[1].gameId) {
    score = score + 100
    yourScore.innerHTML = score
    clickedCards.forEach(obj => {
      obj.node.classList.add('hidden')
    })
    clickedCards = []
    clikedCounter = -1
  } else if (clikedCounter === 1) {
    clikedCounter = -1
    cardsLog.forEach((card) => {
      if (card === cardId) {
        score = score - 50
        yourScore.innerHTML = score
        // borre la ultima que clickeo
      }
    })
    clickedCards.forEach(obj => {
      turnCard(obj.node)
    })
    clickedCards = []
  }
}

// ToDo: cuando le de click a la carta debe de cambiar el display de la carta
// ToDo: Arreglar clicker counter
var clikedCard = function clikedCard (card, index) {
  card.addEventListener('click', function () {
    clickedCards.push({'node': card, 'gameId': randomObj[index].gameId})
    if (clickedCards[1] !== undefined && clickedCards[0].node.id === clickedCards[1].node.id) {
      alert('Clickee otra carta papita')
      turnCard(clickedCards[1].node)
      clickedCards = []
      return true
    }
    setImage(card, index)
    verifingCard(card, card.id)
    clikedCounter = clikedCounter + 1 // Trabajarlo
    cardsLog.push(card.id)
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

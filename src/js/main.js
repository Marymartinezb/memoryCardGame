// var bgImages = ['berengena.png', 'mario.png', 'luigui.png', 'zanahoria.png', 'honguito.png', 'cherry.png', 'pacman.png', 'pacwoman.png', 'ghost1.png', 'ghost2.png']
// var card = document.getElementById('front')
// var random = function random () {
// var num = Math.floor((Math.random() * 10) + 1)
// var img = bgImages[num]
//   console.log(img)
//   card.style.backgroundImage = 'url("../img/' + img
// }
// random()

// ToDo: cuando le de click a la carta  debe de cambiar el display de la carta

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
    })
  }
}
clikedCard()
// ToDo: debe de replicar el array de imagenes, luego unirficarlo y por ultimo desordenarlo

// ToDo: debe de  acomodar las imagenes random por cada carta
// ToDo: cuando 2 cartas coincidan deben ser eliminadas

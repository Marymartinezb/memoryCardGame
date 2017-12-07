const images = [{ src: 'berengena.png', gameId: 1 }, { src: 'mario.png', gameId: 2 }, { src: 'luigui.png', gameId: 3 }, { src: 'zanahoria.png', gameId: 4 }, { src: 'honguito.png', gameId: 5 }, { src: 'cherry.png', gameId: 6 }, { src: 'pacman.png', gameId: 7 }, { src: 'pacwoman.png', gameId: 8 }, { src: 'ghost1.png', gameId: 9 }, { src: 'ghost2.png', gameId: 10 }];
const bgImages = images.concat(images);
const cardContainer = document.getElementById('cardContainer');
const cards = cardContainer.children;
const yourScore = document.getElementById('yourScore');
const finalScore = document.getElementById('bestScore');
let score = 0;
const cardsLog = [];
let clikedCounter = 0;
let clickedCards = [];
let stopClick = false;
let pushToLog = false;
let success = false;
let successPair = 0;

const randomObj = bgImages.sort(() => {
  return 0.5 - Math.random();
});

const turnCard = function turnCard(card) {
  setTimeout(() => {
    card.style.backgroundImage = 'none';
    card.classList.remove('front');
    stopClick = false;
    clikedCounter = 0;
  }, 1500);
};

const setImage = function setImage(card, index) {
  card.classList.add('front');
  card.style.backgroundImage = `url("../img/${randomObj[index].src}`;
};

const verifingCard = function verifingCard() {
  if (clickedCards[1] !== undefined && clickedCards[0].gameId === clickedCards[1].gameId) {
    success = true;
    score += 100;
    yourScore.innerHTML = score;
    clickedCards.forEach((obj) => {
      obj.node.classList.add('hidden');
    });
    clickedCards = [];
    clikedCounter = 0;
    successPair += 1;
  } else if (clikedCounter === 2) {
    success = false;
    clickedCards.forEach((obj) => {
      turnCard(obj.node);
    });
    clickedCards = [];
  }
};

const verifiedCardLog = function verifiedCardLog(cardId) {
  if (cardsLog.length) {
    cardsLog.forEach((card) => {
      if (card === cardId && !success) {
        score -= 50;
        yourScore.innerHTML = score;
        const arrIdx = cardsLog.indexOf(card);
        cardsLog.splice(arrIdx, 1);
      } else {
        pushToLog = true;
      }
    });
    if (pushToLog) {
      cardsLog.push(cardId);
      pushToLog = false;
    }
  } else {
    cardsLog.push(cardId);
  }
};

const clikedCard = function clikedCard(card, index) {
  card.addEventListener('click', () => {
    if (stopClick) {
      return false;
    }
    clikedCounter += 1;
    clickedCards.push({ node: card, gameId: randomObj[index].gameId });
    if (clickedCards[1] !== undefined && clickedCards[0].node.id === clickedCards[1].node.id) {
      alert('Por favor haga click sobre otra carta');
      turnCard(clickedCards[1].node);
      clickedCards = [];
      return true;
    }
    setImage(card, index);
    verifingCard();
    verifiedCardLog(card.id);
    if (clikedCounter >= 2) {
      stopClick = true;
    }
    if (successPair === 10) {
      console.log('score', score);
      localStorage.setItem('finalStore', score);
      alert('Usted ha ganado por favor haga click en REINICIAR');
    }
    return true;
  });
};

const init = function init() {
  for (let index = 0; index < cards.length; index += 1) {
    const cardsId = cards[index].id;
    const card = document.getElementById(cardsId);
    setImage(card, index);
    turnCard(card);
    clikedCard(card, index);
  }
};
init();

finalScore.innerHTML = localStorage.getItem('finalStore');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      console.log('SW registered: ', registration);
    }).catch((registrationError) => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

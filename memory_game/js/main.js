const cards = [
  {
      rank: "queen",
      suit: "hearts",
      cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "Diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

let cardsInPlay = [];


function createBoard()
{
  // let cardElement = [];
  for(let i=0;i<cards.length;i++)
  {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', "images/back.png");
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById("game-board").appendChild(cardElement);
  }
}

function checkForMatch()
{
  if(cardsInPlay[0] === cardsInPlay[1])
  {
    alert('You found a match!');
  }
  else {

    alert('sorry, try again');
  }
}

function flipCard()
{
  let cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
  if(cardsInPlay.length === 2)
  {
    checkForMatch();
  }

}

createBoard();

let elements = [];
function resetBoard()
{
  let board = document.getElementById("game-board");
  let children = board.childNodes;

  for (let i=0; i<board.childNodes.length; i++) {
    let child = board.childNodes[i];
    if (child.nodeType == 1) {
      // elements.push(child)
      if(child.nodeName === 'IMG')
      {
        child.setAttribute('src', 'images/back.png');
      }
    }
  }
  cardsInPlay = [];
}
console.log(elements);

// let cardOne = "queen";
// let cardTwo = "king";
// let cardThree = "king";
// let cardFour = "queen";

let cards = ["queen", "queen", "king", "king"];

let cardsInPlay = [];
let cardOne = cards[0];
let cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if(cardsInPlay.length === 2)
{
  if(cardsInPlay[0] === cardsInPlay[1])
  {
    alert("Match!");
  }
  else {

  }
}
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

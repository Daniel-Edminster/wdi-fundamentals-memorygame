// let cardOne = "queen";
// let cardTwo = "king";
// let cardThree = "king";
// let cardFour = "queen";

let cards = ["queen", "queen", "king", "king"];

let cardsInPlay = [];


cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);





function checkForMatch()
{
    if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
    }
    else {
      console.log("Sorry, try again.");
    }
}
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

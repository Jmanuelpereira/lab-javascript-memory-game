class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked;
    this.pairsGuessed;
    // add the rest of the class properties here
  }
  shuffleCards() {


    for (const i of this.cards) {
      
    }
  


  }
  checkIfPair(card1, card2) {

    let result = false;

    if(card1 === card2)
     return result = true;
    else
    return "marico"


  }
  isFinished() {}
}
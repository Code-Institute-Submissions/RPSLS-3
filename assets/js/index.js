
// dictionary for user picks
const handOptions = {
    "rock": "assets/images/Rock.png",
    "paper": "/assets/images/Paper.png", 
    "scissors": "/assets/images/Scissors.png",
    "lizard": "/assets/images/Lizard.png",
    "spock": "/assets/images/Spock.png"
}

let SCORE = 0;

const pickUserHand = (hand) => {
    console.log(hand);
    // hide current page when user makes choice
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
    
    // show the win/lose/draw page when user makes choice
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    //show correct choice on win/lose/draw section when user choice made
    document.getElementById("userPickImage").src = handOptions[hand];

    let cpHand = pickComputerHand();

}

// function and array for computer picks
const pickComputerHand = () => {
    let hands = ["rock", "paper", "scissors", "lizard", "spock"]
    let cpHand = hands[Math.floor(Math.random() * 5)]


  //show correct choice on win/lose/draw section when computer choice made
  document.getElementById("computerPickImage").src = handOptions[cpHand];

  return cpHand;

}

//functionality to decide who has won when user picks rock

const referee = (userHand, cpHand) => {

    if(userHand == "rock" && cpHand == "rock"){
        setDecision("IT'S A TIE!")
    }
    if(userHand == "rock" && cpHand == "paper"){
        setDecision("YOU LOSE!")
    } 
    if(userHand == "rock" && cpHand == "scissors"){
        setDecision("YOU WIN!!!")
        setScore(SCORE + 1)
    } 
    if(userHand == "rock" && cpHand == "lizard"){
        setDecision("YOU WIN!!!")
        setScore(SCORE + 1)
    }  
    if(userHand == "rock" && cpHand == "spock"){
        setDecision("YOU LOSE!")
    }
}

const setDecision = (decision) => {
    console.log(decision)
}

const setScore = (score) => {
    console.log(score)
}
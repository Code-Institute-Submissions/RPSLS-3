
// dictionary for user picks
const handOptions = {
    "rock": "assets/images/Rock.png",
    "paper": "/assets/images/Paper.png", 
    "scissors": "/assets/images/Scissors.png",
    "lizard": "/assets/images/Lizard.png",
    "spock": "/assets/images/Spock.png"
}

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

    pickComputerHand();

}

// function and array for computer picks
const pickComputerHand = () => {
    let hands = ["rock", "paper", "scissors", "lizard", "spock"]
    let cpHand = hands[Math.floor(Math.random() * 5)]

}
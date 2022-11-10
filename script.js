// FUNCTIONS

    // Module - Gameboard Object that stores the gameboard
    
    // Factory - Players object

    // Module - Display Controller - Object to control the flow of the game


// USER INTERFACE

    // Global DOM variables

const nameContainer = document.querySelector("#nameContainer");

    // Adversary choice

const opponentChoice = (() => {
    let userChoice = document.querySelector("#userChoice");
    let AIChoice = document.querySelector("#AIChoice");

    const userAdversary = document.querySelector("#userAdversary");
    const AIAdversary = document.querySelector("#AIAdversary");

    const chooseContainer = document.querySelector("#chooseContainer");

    userChoice.addEventListener("click", () => {
        userAdversary.style.display = "flex";
        AIAdversary.style.display = "none";
        chooseContainer.style.display = "none";
        nameContainer.style.display = "flex";
    });

    AIChoice.addEventListener("click", () => {
        AIAdversary.style.display = "flex";
        userAdversary.style.display = "none";
        chooseContainer.style.display = "none";
        nameContainer.style.display = "flex";
    });
})();

    // Names choice

const nameChoice = (() => {
    const name1 = document.querySelector("#name1");
    const name2 = document.querySelector("#name2");
    const startGame = document.querySelector("#startGame");

    const titlePlayer1 = document.querySelector("#titlePlayer1");
    const titlePlayer2 = document.querySelector("#titlePlayer2");

    let player1 = "Player 1";
    let player2 = "Player 2";

    startGame.addEventListener("click", () => {
        if (name1.value !== "") {
            player1 = name1.value;
            titlePlayer1.innerText = player1;
        } 
        if (name2.value !== "") {
            player2 = name2.value;
            titlePlayer2.innerText = player2;
        } 
        nameContainer.style.display = "none";
    });
})();

    // Render the contents of the gameboard array

    // Interaction with gameboard

    // Check for Game Over

    // Clean the Interface, users names, button to start/ restart the game / congratulation winner

// IA    
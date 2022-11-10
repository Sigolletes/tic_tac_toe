// FUNCTIONS

    // Module - Gameboard Object that stores the gameboard
    
    // Factory - Players object

    // Module - Display Controller - Object to control the flow of the game


// USER INTERFACE

    // User chooice

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
    });

    AIChoice.addEventListener("click", () => {
        AIAdversary.style.display = "flex";
        userAdversary.style.display = "none";
        chooseContainer.style.display = "none";
    });
})();

    // Render the contents of the gameboard array

    // Interaction with gameboard

    // Check for Game Over

    // Clean the Interface, users names, button to start/ restart the game / congratulation winner

// IA    
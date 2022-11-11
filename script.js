// GLOBAL LOGICAL VARIABLES

let player1 = "Player 1";
let player2 = "Player 2";

let userTurn = player1;

// FUNCTIONS

    // Module - Gameboard Object that stores the gameboard

const gameboardModule = (function() {
    let gameboard = ["","","X","","","","O","",""];

    const mark = (index) => {
        if (userTurn === player1) {
            gameboard[index] = "X";
        } else {
            gameboard[index] = "O";
        }
    }

    return {
        gameboard,
        mark
    }
})();
let board = gameboardModule;

    
    // Factory - Players object

const playerFactory = (name, human) => {

    let points = 0;

    const addPoints = () => this.points = points++;

    const winner = () => {
        const winnerText = document.querySelector("#winnerText");
        winnerText.innerText = this.name;
    }

    return { name, human, points, addPoints, winner };
}


    // Module - Display Controller - Object to control the flow of the game


// USER INTERFACE

    // Global DOM variables

const nameContainer = document.querySelector("#nameContainer");

        // Board positions
const p0 = document.querySelector("#p0");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");
const p4 = document.querySelector("#p4");
const p5 = document.querySelector("#p5");
const p6 = document.querySelector("#p6");
const p7 = document.querySelector("#p7");
const p8 = document.querySelector("#p8");

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

const renderGameboard = (() => {
    function render() {
        p0.innerText = board.gameboard[0];
        p1.innerText = board.gameboard[1];
        p2.innerText = board.gameboard[2];
        p3.innerText = board.gameboard[3];
        p4.innerText = board.gameboard[4];
        p5.innerText = board.gameboard[5];
        p6.innerText = board.gameboard[6];
        p7.innerText = board.gameboard[7];
        p8.innerText = board.gameboard[8];
    }

    function cleanGameboard() {
        board.gameboard[0] = "";
        p1.innerText = "";
        p2.innerText = "";
        p3.innerText = "";
        p4.innerText = "";
        p5.innerText = "";
        p6.innerText = "";
        p7.innerText = "";
        p8.innerText = "";
    }

    return {
        render,
        cleanGameboard
    }
})();
renderGameboard.cleanGameboard();

    // Interaction with gameboard

const gameboardInteraction = (() => {
    function changeTurn() {
        if (userTurn === player1) {
            userTurn = player2;
        } else {
            userTurn = player1;
        }
    }

    function movement(index, position) {
   
        board.mark(index);
        renderGameboard.render();
        position.onclick = null;
        changeTurn();
/* SOLVE THE PROPAGATION .............................................................*/
        e.preventDefault();
        console.log(userTurn);
        
    }

    p0.addEventListener("click", movement(0, p0), false);
    
    p0.onclick = movement(0, p0);
    p1.onclick = movement(1, p1);
    p2.onclick = movement(2, p2);
    p3.onclick = movement(3, p3);
    p4.onclick = movement(4, p4);
    p5.onclick = movement(5, p5);
    p6.onclick = movement(6, p6);
    p7.onclick = movement(7, p7);
    p8.onclick = movement(8, p8);
})();

    // Check for Game Over

    // Clean the Interface, users names, button to start/ restart the game / congratulation winner

// IA    
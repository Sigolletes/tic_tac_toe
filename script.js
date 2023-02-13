// Global DOM variables

const nameContainer = document.querySelector("#nameContainer");
const winnerContainer = document.querySelector("#winnerContainer");

// Global logical variables

let firstTurn = "";
let userTurn = "";

// FUNCTIONS

    // Module - Gameboard Object that stores the gameboard

const gameboardModule = (function() {
    let gameboard = ["","","","","","","","",""];

    const mark = (index) => {
        if (userTurn === player1.name) {
            gameboard[index] = player1.mark;
        } else {
            gameboard[index] = player2.mark;
        }
    }
    return {
        gameboard,
        mark
    }
})();
let board = gameboardModule;

    // Factory - Players object

const playerFactory = (name, human, mark) => {
    let points = 0;

    const winner = () => {
        const winnerText = document.querySelector("#winnerText");
        winnerText.innerText = name;
    }
    return { name, human, mark, points, winner };
}
let player1 = playerFactory("Player 1", true, "X");
let player2 = playerFactory("Player 2", false, "O");
firstTurn = player1.name;

    // Module - Display Controller - Object to control the flow of the game

const controller = (function() {
    function gameTurn() {
                    console.log('gameTurn init', firstTurn, userTurn);
        if (firstTurn === player1.name) {
            firstTurn = player2.name;
            userTurn = player2.name;
        } else {
            firstTurn = player1.name;
            userTurn = player1.name;
        }
                    console.log('gameTurn final', firstTurn, userTurn);
    }

    /* function randomTurn() {
        let randomNumber = Math.floor(Math.random() * 2);
        console.log(randomNumber);
        if (randomNumber === 1) {
            userTurn = player1.name;
        } else {
            userTurn = player2.name;
        }
    } */

    function checkWinner(user) {
        if (board.gameboard[0] === user && board.gameboard[1] === user && board.gameboard[2] === user || 
            board.gameboard[3] === user && board.gameboard[4] === user && board.gameboard[5] === user || 
            board.gameboard[6] === user && board.gameboard[7] === user && board.gameboard[8] === user || 
            board.gameboard[0] === user && board.gameboard[3] === user && board.gameboard[6] === user || 
            board.gameboard[1] === user && board.gameboard[4] === user && board.gameboard[7] === user || 
            board.gameboard[2] === user && board.gameboard[5] === user && board.gameboard[8] === user || 
            board.gameboard[0] === user && board.gameboard[4] === user && board.gameboard[8] === user || 
            board.gameboard[2] === user && board.gameboard[4] === user && board.gameboard[6] === user) {

                if (user === player1.mark) {
                    player1.points = player1.points + 1;
                    scoreboard.scoreboardUpdate();
                    renderGameboard.cleanGameboard();
                    gameTurn();
                    gameboardInteraction.setTurn();
                    player1.winner();
                    winnerContainer.style.display = "flex";
                } else {
                    player2.points = player2.points + 1;
                    scoreboard.scoreboardUpdate();
                    renderGameboard.cleanGameboard();
                    gameTurn();
                    gameboardInteraction.setTurn();
                    player2.winner();
                    winnerContainer.style.display = "flex";
                }
        }
    }
    return {
        checkWinner,
        gameTurn
    }
})();

// USER INTERFACE

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
        player2.human = true;
    });
    AIChoice.addEventListener("click", () => {
        AIAdversary.style.display = "flex";
        userAdversary.style.display = "none";
        chooseContainer.style.display = "none";
        nameContainer.style.display = "flex";
        player2.human = false;
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
            player1.name = name1.value;
            titlePlayer1.innerText = player1.name;
        } 
        if (name2.value !== "") {
            player2.name = name2.value;
            titlePlayer2.innerText = player2.name;
        } 
        nameContainer.style.display = "none";
        gameboardInteraction.boardEvent();
        controller.gameTurn();
        gameboardInteraction.setTurn();
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
        board.gameboard[1] = "";
        board.gameboard[2] = "";
        board.gameboard[3] = "";
        board.gameboard[4] = "";
        board.gameboard[5] = "";
        board.gameboard[6] = "";
        board.gameboard[7] = "";
        board.gameboard[8] = "";
        p0.style.cursor = "pointer";
        p1.style.cursor = "pointer";
        p2.style.cursor = "pointer";
        p3.style.cursor = "pointer";
        p4.style.cursor = "pointer";
        p5.style.cursor = "pointer";
        p6.style.cursor = "pointer";
        p7.style.cursor = "pointer";
        p8.style.cursor = "pointer";
    }
    return {
        render,
        cleanGameboard
    }
})();

    // Interaction with gameboard

const gameboardInteraction = (() => {
    const turn1 = document.querySelector("#turn1");
    const turn2 = document.querySelector("#turn2");
    const side1 = document.querySelector("#side1");
    const side2 = document.querySelector("#side2");

    function setTurn() {
        if (userTurn === player2.name) {
            turn1.style.display = "none";
            turn2.style.display = "flex";
            side1.classList.remove("turn");
            side2.classList.add("turn");
        } else {
            turn2.style.display = "none";
            turn1.style.display = "flex";
            side2.classList.remove("turn");
            side1.classList.add("turn");
        }
    }

    function changeTurn() {
        if (userTurn === player1.name) {
            userTurn = player2.name;
        } else if (userTurn === player2.name) {
            userTurn = player1.name;
        }
        setTurn();
    }

    function movement(index, position) {
                    console.log('movement init', userTurn);
        board.mark(index);
        renderGameboard.render();
        position.style.cursor = "default";
        changeTurn();
                    console.log('movement final', userTurn);
        controller.checkWinner(player1.mark);
        controller.checkWinner(player2.mark);
    }

    function boardEvent() {
        p0.addEventListener("click", () => {
            movement(0, p0);  
        }, { once: true });
        p1.addEventListener("click", () => {
            movement(1, p1);
        }, { once: true });
        p2.addEventListener("click", () => {
            movement(2, p2);
        }, { once: true });
        p3.addEventListener("click", () => {
            movement(3, p3);
        }, { once: true });
        p4.addEventListener("click", () => {
            movement(4, p4);
        }, { once: true });
        p5.addEventListener("click", () => {
            movement(5, p5);
        }, { once: true });
        p6.addEventListener("click", () => {
            movement(6, p6);
        }, { once: true });
        p7.addEventListener("click", () => {
            movement(7, p7);
        }, { once: true });
        p8.addEventListener("click", () => {
            movement(8, p8);
        }, { once: true });
    }
    return {
        boardEvent,
        setTurn
    }
})();

    // Scoreboard display

const scoreboard = (() => {
    const points1 = document.querySelector("#points1");
    const points2 = document.querySelector("#points2");

    function scoreboardUpdate() {
        points1.innerText = player1.points;
        points2.innerText = player2.points;
    }
    return {
        scoreboardUpdate
    }
})();

    // Return button from winner container

const returnButton = (() => {
    const returnBttn = document.querySelector("#return");

    returnBttn.addEventListener("click", () => {
        winnerContainer.style.display = "none";
        renderGameboard.render();
        gameboardInteraction.boardEvent();
    })
})();

    // Check for Game Over

    // Clean the Interface, users names, button to start/ restart the game / congratulation winner

// IA    
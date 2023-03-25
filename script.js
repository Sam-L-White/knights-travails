const gameBoard = (() => {

    let boardArray = [

        ["w", "b", "w", "b", "w", "b", "w", "b"],
        ["b", "w", "b", "w", "b", "w", "b", "w"],
        ["w", "b", "w", "b", "w", "b", "w", "b"],
        ["b", "w", "b", "w", "b", "w", "b", "w"],
        ["w", "b", "w", "b", "w", "b", "w", "b"],
        ["b", "w", "b", "w", "b", "w", "b", "w"],
        ["w", "b", "w", "b", "w", "b", "w", "b"],
        ["b", "w", "b", "w", "b", "w", "b", "w"],

    ];

    return {boardArray}
})();

const displayController = (() => {


    const displayBoard = () => {

        let gameContainer = document.querySelector(".gameboard")

        for(x=0; x<8; x++){
            for(y=0; y<8; y++){
                let divClass = gameBoard.boardArray[x][y]
                let div = document.createElement("div")
                div.classList.add(`${divClass}`)
                div.id = `${y},${x}`
                gameContainer.appendChild(div)
            }
        }
    }

    return{displayBoard}

})()

const eventController = (() => {

    let knightSquare
    let targetSquare

    const addKnightEvents = () => {

        let boardSquares = document.querySelectorAll(".gameboard div")
        boardSquares.forEach(square => {

            square.addEventListener("click", (e) => {

                e.target.textContent = "♞"
                let oldBoard = document.querySelector(".gameboard")
                let newBoard = oldBoard.cloneNode(true);
                oldBoard.parentNode.replaceChild(newBoard, oldBoard);
                knightSquare = e.target.id
                addTargetEvents()
            })
        })
    }

    const addTargetEvents = () => {
        let boardSquares = document.querySelectorAll(".gameboard div")
        boardSquares.forEach(square => {

            square.addEventListener("click", (e) => {

                e.target.textContent = "T"
                //Remove event listeners
                let oldBoard = document.querySelector(".gameboard")
                let newBoard = oldBoard.cloneNode(true);
                oldBoard.parentNode.replaceChild(newBoard, oldBoard);
                targetSquare = e.target.id
                gameController.gameStart(knightSquare, targetSquare)
                
            })
        })
    }

    return{addKnightEvents, knightSquare}
})()

const gameController = (() => {
    displayController.displayBoard()
    eventController.addKnightEvents()

    const gameStart = (knightSquare, targetSquare) => {
        console.log(knightSquare)
        console.log(targetSquare)
    }
    return{gameStart}
})()


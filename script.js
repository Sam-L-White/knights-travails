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

                //Remove event listeners
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

    let boardMap = new Map()

    let allMoves = [
        [1, -2],
        [2, -1],
        [2, 1],
        [1, 2],
        [-1, 2],
        [-2, 1],
        [-2, -1],
        [-1, -2]
    ]

    let possibleLocations = []

    const gameStart = (knightSquare, targetSquare) => {
        let pathArray = knightMoves(knightSquare, targetSquare)
        console.log(allMoves)
        createMap()
    }

    const knightMoves = (knightSquare, targetSquare) => {

    }

    const createMap = () => {
        for(x = 0; x < 8; x++){
            for(y = 0; y < 8; y++){
                allMoves.forEach(move => {
                    let xLocation = x + move[0]
                    let yLocation = y + move[1]
                    if(xLocation >= 0 && yLocation >= 0){
                        if(xLocation <= 7 && yLocation <= 7){
                            possibleLocations.push([xLocation, yLocation])
                        }
                    }
                })

                boardMap.set(`${[x,y]}`, possibleLocations)
                possibleLocations = []
            }
        }
        console.log(boardMap)
    }



    return{gameStart}
})()


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
                div.id = `${x},${y}`
                gameContainer.appendChild(div)
            }
        }
    }

    return{displayBoard}

})()

displayController.displayBoard()
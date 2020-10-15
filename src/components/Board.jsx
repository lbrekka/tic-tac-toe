import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Square from './Square'

const Board = () => {
    const [boardArray, setBoardArray] = useState(Array(9).fill(null))
    const [XNext, setXNext] = useState(true)

    // sjekker om noen har vunnet hver gang brettet rendres
    useEffect(() => {
        debugger;

        let winner = checkWinner()

        if (winner === '0') {
            alert('0 vant')
        } else if (winner === 'X') {
            alert('X vant')
        } else if (!(boardArray.includes(null)) && winner === null) {
            alert("Ingen vinner");
        }
    })


    const handleClick = (number) => {

        // nytt array som skal returneres
        const newArray = boardArray.slice()
        let square = newArray[number]

        // sjekker om square har verdi fra før
        if (square === null) {
            // setter ny verdi i arrayet
            if (XNext) {
                newArray[number] = 'X'
            } else {
                newArray[number] = '0'
            }
            setXNext(!XNext)
        }

        // oppdaterer state
        setBoardArray(newArray)
    }

    // returnerer square-komponenten
    // props: value = verdien av tilsvarende firkant i boardArrayet
    //        handleClick = sender handleclickfunksjonen med verdien til arrayet
    const newSquare = (number) => {
        console.log(boardArray);
        return <Square
            value={boardArray[number]}
            handleClick={() => handleClick(number)}
        />
    }

    // returnerer x, y eller null
    const checkWinner = ()  => {
        // debugger;
        const winnerLines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [2,4,6],
            [0,4,8]
        ]

        for (let i = 0; i < winnerLines.length; i++) {
            let linje = winnerLines[i]
            
            let firstValue = boardArray[linje[0]]
            let secondValue = boardArray[linje[1]]
            let thirdValue = boardArray[linje[2]]

            if (firstValue !== null && secondValue !== null && thirdValue !== null) {
                if (firstValue === secondValue && secondValue === thirdValue) {
                    if (firstValue === 'X') { 
                        return 'X'
                    } else {
                        return '0'
                    }
                }
            }
        }
        return null;
    }
    
    return (
        <div className="board">
            {newSquare(0)}
            {newSquare(1)}
            {newSquare(2)}
            {newSquare(3)}  
            {newSquare(4)}
            {newSquare(5)}
            {newSquare(6)}
            {newSquare(7)}
            {newSquare(8)}
        </div>
    ) 
}

export default Board
import React from 'react'
import ReactDOM from 'react-dom'

const Square = ({handleClick, value}) => {
    return (
        <div className="square"
        // når en klikker på en square kjøres handleclickfunksjonen i Board som vi sendte som prop
        onClick={handleClick}>
            {value}
        </div>
    )
}

export default Square
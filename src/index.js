import React from 'react'
import ReactDOM from 'react-dom'
import Board from './components/Board'
import Square from './components/Square';
import './index.css';



const App = () => {
  return (
    <div>
      <h1>Tic-tac-toe</h1>
      <Board/> 
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
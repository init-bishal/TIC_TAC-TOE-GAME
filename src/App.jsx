import './styles.scss'
import Board from './components/Board'
import {calculateWinner} from './components/winner'
import { useState } from 'react'
import StatusMessage from './components/StatusMessage'
function App() {
  const [squares, setSquares]=useState(Array(9).fill(null))
  const [isXNext,setIsXNext]=useState(false)
  const winner=calculateWinner(squares)

   const handleSquareClick=(position)=>{
      if(squares[position] || winner)
      {
        return
      }
      console.log(`you clickedn ${position}`)
      console.log(squares)
      setSquares((current)=>{
          return current.map((i,pos)=>{
                if(pos==position)
                {
                  return isXNext ? 'O' : 'X'
                }
                return i
          })
      })
      setIsXNext((current)=>!current)
    }
  return (
    <div className='app' >
      <StatusMessage winner={winner} isXNext={isXNext} squares={squares}/>
      {/* {winner?<h2>Winner is {winner}</h2>:<h2>Next player is {isXNext?'O':'X'}</h2>} */}
        <Board squares={squares} handleSquareClick={handleSquareClick}/>
    </div>
  )
}

export default App

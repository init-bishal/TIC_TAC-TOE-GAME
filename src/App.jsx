import './styles.scss'
import Board from './components/Board'
import {calculateWinner} from './components/winner'
import { useState } from 'react'
import StatusMessage from './components/StatusMessage'
import History from './components/History'
function App() {
  const [history,setHistory]=useState([{squares:Array(9).fill(null),isXNext:false }])
  const [currentMove,setCurrentMove]=useState(0)
  const gamingBoard=history[currentMove]
  const winner=calculateWinner(gamingBoard.squares)
  const handleSquareClick=(position)=>{
      if(gamingBoard.squares[position] || winner)
      {
        return
      } 
      setHistory((current)=>{
 
        const isTraversing=currentMove+1 !== current.length
        const lastGamingState=isTraversing ? current[currentMove]:current[current.length-1]
        const nextSquareState=lastGamingState.squares.map((i,pos)=>{
                  if(position==pos)
                  {
                    return lastGamingState.isXNext?'X':'O'
                  }
                  return i
        })
        const base=isTraversing ? current.slice(0,current.indexOf(lastGamingState)+1):current
        return base.concat({
          squares:nextSquareState, 
          isXNext:!lastGamingState.isXNext
        })
      })
      setCurrentMove(i=>i+1)
    } 
  const moveTo=(move)=>{
       setCurrentMove(move)
  }
  return (
    <div className='app' >
      <StatusMessage winner={winner} gamingBoard={gamingBoard}/>
      {/* {winner?<h2>Winner is {winner}</h2>:<h2>Next player is {isXNext?'O':'X'}</h2>} */}
      <Board squares={gamingBoard.squares} handleSquareClick={handleSquareClick} />
      <h2>Current game history</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove}/>
    </div>
  )
}

export default App

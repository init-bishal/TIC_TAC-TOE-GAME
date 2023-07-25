import './styles.scss'
import Board from './components/Board'
import {calculateWinner} from './components/winner'
import { useState } from 'react'
import StatusMessage from './components/StatusMessage'
import History from './components/History'
import { normalizePath } from 'vite'
const NEW_GAME=[{squares:Array(9).fill(null),isXNext:false}]
function App() {
  const [history,setHistory]=useState(NEW_GAME)
  const [currentMove,setCurrentMove]=useState(0)
  const gamingBoard=history[currentMove]
  const {winner,winnerSquares}=calculateWinner(gamingBoard.squares)
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
  const onNewGameStart=()=>{
    setHistory(NEW_GAME)
    setCurrentMove(0)

  }
  return (
    <div className='app' >
      <h1><span className='text-orange'>TIC</span> <span >TAC</span> <span className='text-green' >TOE</span></h1>
      <StatusMessage winner={winner} gamingBoard={gamingBoard}/>

      <Board squares={gamingBoard.squares} handleSquareClick={handleSquareClick} winnerSquares={winnerSquares}/>
      <h2 style={{fontWeight:'normal' }}>Current game history</h2>
      <button type="button" className={`btn-reset ${winner ? 'active':'' }`}
       onClick={onNewGameStart}>Start new game</button>
      <History history={history} moveTo={moveTo} currentMove={currentMove}/>
    </div>
  )
}
export default App

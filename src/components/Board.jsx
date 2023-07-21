import { useState } from 'react'
import Square from './Square'
const Board = () => {
  const [squares, setSquares]=useState(Array(9).fill(null))
   const handleSquareClick=(position)=>{
      console.log(`you clickedn ${position}`)
      console.log(squares)
      setSquares((current)=>{
          return current.map((i,pos)=>{
                if(pos==position)
                {
                  return 'x'
                }
                return i
          })
      })





   }
   const renderSquare=(position)=>{
    return(
      <Square value={squares[position]} clickIt={()=>{handleSquareClick(position)}}/>
    )
         
   }
  return (
    <div className='board'>
        <div className='board-row'>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className='board-row'>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
            
        </div>
        <div className='board-row'>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>

       
    </div>
  )
}

export default Board

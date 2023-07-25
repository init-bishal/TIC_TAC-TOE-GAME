import React from 'react'
import Square from './Square'
const StatusMessage = ({winner, gamingBoard}) => {
  const {squares,isXNext}=gamingBoard
  const noNodesLeft=squares.every(i=>i!=null )
  const renderStatusMessage=()=>{
       if(winner)
       {
          return(<h2 className='status-message'>Winner is <span className={isXNext?'text-green':'text-orange'}>{winner}</span> 
          </h2>)
       }
       else if(!winner && noNodesLeft)
       {
         return (<h2 className='status-message'>Game is Draw</h2>)
       }
       else if(!winner && !noNodesLeft)
       {
         return (<h2 className='status-message'>Next player is <span className={isXNext?'text-green':'text-orange'}>{isXNext ? 'X' :'O' }</span></h2>)
       }
  }
  return (
    <>
      {renderStatusMessage()}
      {/* {winner && <h2>Winner is {winner}</h2>}
      {!winner && noNodesLeft && <h2>Game is Draw</h2>}
       {!winner && !noNodesLeft && <h2>Next player is {isXNext ? 'O' : 'X'}</h2>} */}
    </>
  )
}

export default StatusMessage

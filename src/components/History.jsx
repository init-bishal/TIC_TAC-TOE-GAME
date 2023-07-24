import React from 'react'

const History = ({history,moveTo,currentMove}) => {
  return (
    <div className='history-wrapper'>
       <ul className='history'>
          { 
            history.map((i,pos)=>(
                <li key={pos}>
                <button type="button" className={`btn-move ${currentMove===pos?'active':''}`} onClick={()=>{moveTo(pos)}}>{pos===0  ? 'New game':
                `Go to move #${pos}`}</button>
                
                </li>
                )
                
                )

          }
       </ul>
    </div>
  )
}

export default History

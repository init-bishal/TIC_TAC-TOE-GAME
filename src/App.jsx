import './styles.scss'
import Board from './components/Board'
import { useState } from 'react'
function App() {
   let [counter,setCounter]=useState(0)
   const onBtnClick=()=>{
         setCounter((i)=>{
             return i+1
         })
   }
  return (
    <div className='app' >
        <button onClick={onBtnClick}>Click me please</button>
        <div>{counter}</div>
        {/* <Board/> */}
    </div>
  )
}

export default App

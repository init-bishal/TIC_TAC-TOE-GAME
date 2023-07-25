import logo from '../../public/vite.svg'
const Square = ({value,clickIt,isWinningSquare}) => {
  const colorClassName=value==='X'?'text-green':'text-orange'
  const winningClassName=isWinningSquare? 'winning':''
  return (
    <button type="button" className={`square ${colorClassName} ${winningClassName}`} onClick={clickIt} >
       <span >{value}</span>
    </button>
  )
}

export default Square

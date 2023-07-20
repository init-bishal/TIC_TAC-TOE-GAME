
import logo from '../../public/vite.svg'
const Square = (props) => {
  return (
    <button type="button" className='square'>
       {props.value}
    </button>
  )
}

export default Square

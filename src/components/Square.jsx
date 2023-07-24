import logo from '../../public/vite.svg'
const Square = ({value,clickIt}) => {
  return (
    <button type="button" className='square' onClick={clickIt} >
       <span >{value}</span>
    </button>
  )
}

export default Square

import './dice.css'

function Dice(props) {
  const { value } = props

  return (
    <div className='dice-face'>
      <h2 className='dice-num'>{value}</h2>
    </div>
  )
}

export default Dice

import './dice.css'

function Dice(props) {
  const { value, isHeld } = props

  const style = {
    background: isHeld ? '#59E391' : 'white'
  }

  return (
    <div className='dice-face' style={style}>
      <h2 className='dice-num'>{value}</h2>
    </div>
  )
}

export default Dice

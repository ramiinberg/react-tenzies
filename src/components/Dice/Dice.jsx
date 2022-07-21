import './dice.css'

function Dice(props) {
  const { value, isHeld, holdDice, id } = props

  const style = {
    background: isHeld ? '#59E391' : 'white'
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      holdDice()
    }
  }

  return (
    <div
      className='dice-face'
      style={style}
      onClick={holdDice}
      onKeyDown={handleKeyDown}
      role='button'
      tabIndex={id}
    >
      <h2 className='dice-num'>{value}</h2>
    </div>
  )
}

export default Dice

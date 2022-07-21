import { useState } from 'react'

import './App.css'
import Dice from './components/Dice'

function App() {
  const allNewDice = (diceCount = 10) => {
    const diceArray = [...Array(diceCount).keys()]
    return diceArray.map(id => ({
      id,
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false
    }))
  }

  const [diceArray, setDiceArray] = useState(allNewDice())

  const diceElements = diceArray.map(die => (
    <Dice key={die.id} value={die.value} isHeld={die.isHeld} />
  ))

  const rollNewDices = () => {
    const newDices = allNewDice()
    setDiceArray(newDices)
  }

  return (
    <main>
      <div className='container'>{diceElements}</div>
      <button className='btn-roll-dice' type='button' onClick={rollNewDices}>
        Roll dice
      </button>
    </main>
  )
}

export default App

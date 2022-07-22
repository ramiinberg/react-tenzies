import { useState, useEffect } from 'react'

import './App.css'
import Dice from './components/Dice'

function App() {
  const rollNewDie = () => Math.floor(Math.random() * 6) + 1
  const allNewDice = (diceCount = 10) => {
    const diceArray = [...Array(diceCount).keys()]
    return diceArray.map(id => ({
      id: id + 1,
      value: rollNewDie(),
      isHeld: false
    }))
  }

  const [diceArray, setDiceArray] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const allHeld = diceArray.every(die => die.isHeld)
    const firstValue = diceArray[0].value
    const allSameValue = diceArray.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true)
    }
  }, [diceArray])

  const holdDice = id => {
    setDiceArray(prevState =>
      prevState.map(die =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    )
  }

  const diceElements = diceArray.map(die => (
    <Dice
      key={die.id}
      id={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ))

  const rollNewDices = () => {
    setDiceArray(stateDie =>
      stateDie.map(die => (die.isHeld ? die : { ...die, value: rollNewDie() }))
    )
  }

  return (
    <main>
      <h1 className='title'>Tenzies</h1>
      <p className='instructions'>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className='container'>{diceElements}</div>
      <button className='btn-roll-dice' type='button' onClick={rollNewDices}>
        Roll dice
      </button>
    </main>
  )
}

export default App

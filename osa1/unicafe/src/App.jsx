import { useState } from 'react'

const Button = (props) => (
<button onClick={props.handleClick}> {props.text} </button>
)

const Statistics = (props) => {
  return (
  <div>
    <StatisticLine text="good" value = {props.value1}/>
    <StatisticLine text="neutral" value = {props.value2}/>
    <StatisticLine text="bad" value = {props.value3}/>
    <StatisticLine text="total" value = {props.value4}/>
    <StatisticLine text="average" value = {props.value5}/>
    <StatisticLine text="positive" value = {props.value6}/>
  </div>
  )
}

const StatisticLine = (props) => {
  return (
    <div>
      {props.text} {props.value}
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [all, setAll] = useState(0)
  const [pos, setPos] = useState(0)

  const increaseGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setAll(all + 1)
    setPos(pos + 1)
    setTotal(bad + neutral + updatedGood)
  }

  const increaseBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setAll(all - 1)
    setTotal(good + neutral + updatedBad)
  }

  const increaseNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(good + bad + updatedNeutral)
  }

  if (total === 0) {
    return (
      <div>
      <h1>give feedback</h1>

      <Button handleClick={increaseGood} text="good" />
      <Button handleClick={increaseNeutral} text="neutral" />
      <Button handleClick={increaseBad} text="bad" />

      <h1>statistics</h1>
      <div>No feedback given</div>
    </div>
    )
  }

  return (
    <div>
      <h1>give feedback</h1>

      <Button handleClick={increaseGood} text="good" />
      <Button handleClick={increaseNeutral} text="neutral" />
      <Button handleClick={increaseBad} text="bad" />

      <h1>statistics</h1>
      
      <Statistics value1={good} value2={neutral} value3={bad} 
      value4={total} value5={all/total} value6={pos/total * 100 + " %"}/>
    </div>
  )
}

export default App

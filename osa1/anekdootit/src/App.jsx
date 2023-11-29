import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
  <button onClick={handleClick}> {text} </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const lista = Array(anecdotes.length).fill(0)

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(lista);


  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
  }

  const voting = () => {
    const kopioLista = [...votes]
    kopioLista[selected] += 1
    setVotes(kopioLista)
  }

  const clicks = () => {
    const valittu = getRandomInt(8)
    setSelected(valittu)
  }


  const indexOfMax = (arr) => {
    
    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <div>
      Has {votes[selected]} Votes
      </div>
      <div>
      <Button handleClick={clicks} text="next anecdote" />
      <Button handleClick={voting} text="vote" />
      </div>
      <h1>Anecdote with the most votes</h1>
      {anecdotes[indexOfMax(votes)]}
      <div>Has {votes[indexOfMax(votes)]} votes</div>
    </div>
  )
}

export default App

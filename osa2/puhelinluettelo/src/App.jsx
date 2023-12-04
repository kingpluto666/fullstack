import { useState } from 'react'

const Persons = ({person}) => <div>{person.name} {person.number} </div>

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, newFilterValue] = useState('')

  const AddData = (event) => {
    event.preventDefault()
    const nimiObj = {
      name: newName,
      number: newNumber
    }
    const lista = persons.map((x) => x.name)

    if (lista.includes(newName)) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
    setPersons(persons.concat(nimiObj))
    setNewName("")
    setNewNumber("")
  }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    newFilterValue(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input onChange={handleFilterChange}/>
      <h2>add a new</h2>
      <form onSubmit={AddData}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
        number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (<Persons key={person.name} person={person} number={person.number} />))}
    </div>
  )

}

export default App
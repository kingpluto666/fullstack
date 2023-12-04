import { useState } from 'react'

const People = ({person}) => <div>{person.name}</div>

const App = () => {

  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])

  const [newName, setNewName] = useState('')

  const AddName = (event) => {
    event.preventDefault()
    const nimiObj = {
      name: newName
    }
    const lista = persons.map((x) => x.name)

    if (lista.includes(newName)) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
    setPersons(persons.concat(nimiObj))
    setNewName("")
  }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={AddName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (<People key={person.name} person={person} />))}
    </div>
  )

}

export default App
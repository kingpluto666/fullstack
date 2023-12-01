import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])

  const [newName, setNewName] = useState('')

  const AddName = (event) => {
    event.preventDefault()
    const nimiObj = [
      {newName}
    ]
  setPersons(persons.concat(nimiObj))
  setNewName("")
  console.log(persons)
  }


  const handleNameChange = (event) => {
    console.log(event.target.value)
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
    </div>
  )

}

export default App
import { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = ({value, func}) => <div> filter shown with <input value={value} onChange={func}/> </div>

const PersonForm = ({subFunc, name, nameFunc, number, numbFunc}) => {
  return (
  <form onSubmit={subFunc}>
        <div>
        name: <input value={name} onChange={nameFunc}/>
        </div>
        <div>
        number: <input value={number} onChange={numbFunc}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
  </form>
  )
}

const Person = ({nimi, numero}) => <div> {nimi} {numero} </div>

const Persons = ({lista, filtteri}) => {
  return (
    lista.filter(x => x.name.toLowerCase()
      .includes(filtteri.toLowerCase()) || filtteri === '')
      .map(x => <Person key={x.name} nimi={x.name} numero={x.number}/>)
  )
}


const App = () => {

  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, newFilterValue] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  
  useEffect(hook, [])
  
  console.log('render', persons.length, 'persons')


  const AddData = (event) => {
    event.preventDefault()
    const nimiObj = {
      name: newName,
      number: newNumber
    }

    if (persons.map(x => x.name).includes(newName)) {
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
    newFilterValue(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} func={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm subFunc={AddData} name={newName} nameFunc={handleNameChange}
       number={newNumber} numbFunc={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons lista={persons} filtteri={newFilter}/>
    </div>
  )

}

export default App
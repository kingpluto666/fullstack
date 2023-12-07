import { useState, useEffect } from 'react'
import personService from './services/persons'

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

const Person = ({nimi, numero, buttonFunc}) => <div> {nimi} {numero} <button onClick={buttonFunc}>delete</button></div>

const Persons = ({lista, filtteri, deleteXD}) => {
  return (
    lista.filter(x => x.name.toLowerCase()
      .includes(filtteri.toLowerCase()) || filtteri === '')
      .map(x => <Person key={x.name} nimi={x.name} numero={x.number} buttonFunc={deleteXD}/>)
  )
}


const App = () => {

  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, newFilterValue] = useState('')

  useEffect(() => {
    personService
      .getAll()
        .then(people => {
          setPersons(people)
      })
  }, [])
  
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
      personService
      .create(nimiObj)
        .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
  }
  }

  const deleteData = (id) => {
    console.log(`kys ${id}`)
    personService
      .deletePerson(id)
      .then(people => {
        setPersons(people)
  })
  }

  const handleNameChange = (event) => {setNewName(event.target.value)}

  const handleNumberChange = (event) => {setNewNumber(event.target.value)}

  const handleFilterChange = (event) => {newFilterValue(event.target.value)}

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} func={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm subFunc={AddData} name={newName} nameFunc={handleNameChange}
       number={newNumber} numbFunc={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons lista={persons} filtteri={newFilter} deleteXD={deleteData}/>
    </div>
  )

}

export default App
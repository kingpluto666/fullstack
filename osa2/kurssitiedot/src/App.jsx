const Header = ({course}) => <h1>{course}</h1>

const Part = ({part, exercises}) => <p>{part} {exercises}</p>

const Content = ({parts}) => {

  const osat = parts.map(x => <div key={x.id}> <Part part ={x.name} exercises={x.exercises} /></div>)

  return (
    <div>
      {osat}
    </div>
  )
}

const Total = ({parts}) => {
  const sum = parts.reduce((sum, kurssi) => sum + kurssi.exercises, 0)
  return (
    <p>Total of {sum} exercises</p>
  )
}

const Course = ({ course }) => {
  return (
    <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App


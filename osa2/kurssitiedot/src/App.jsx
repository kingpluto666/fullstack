const Header = ({course}) => <h1>{course}</h1>

const Part = ({part, exercises}) => <p>{part} {exercises}</p>

const Content = ({parts}) => {
  const osat = parts.map(x => x.name)

  const tm = parts.map(x => x.exercises)

  console.log(osat)
  return (
    <div>
      <Part part ={osat[0]} exercises = {tm[0]}/>
      <Part part ={osat[1]} exercises = {tm[1]}/>
      <Part part ={osat[2]} exercises = {tm[2]}/>
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


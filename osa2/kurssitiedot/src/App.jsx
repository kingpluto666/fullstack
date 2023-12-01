const Header = ({course}) => <h2>{course}</h2>

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
    <h4>Total of {sum} exercises</h4>
  )
}

const Course = ({ course }) => {
  const kurssit = course.map(x => <div key={x.id}> <Header course={x.name}/> <Content parts={x.parts}/> <Total parts={x.parts}/> </div>)

  return (
    <div>{kurssit}</div>
  )
}


const App = () => {
  const courses = [
    {
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web Development curriculum</h1>
      <Course course={courses} />
    </div>
  )
}

export default App


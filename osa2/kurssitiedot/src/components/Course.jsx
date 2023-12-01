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




export default Course
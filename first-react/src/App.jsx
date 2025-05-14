
import './App.css'
// import Banner from './components/Banner'
// import NavBar from './components/NavBar' 



function App() {
  return (
    <div>
    {/* <NavBar/>
    <Banner/> */}
    <Student name="Rohim" roll="1201"/>
    <Student name="Korim" roll="1202"/>
    <Student name="Josim" roll="1203"/>
    </div>
  )
}



function Student (props) {
  return (
    <div>
      <div className='info'>
        <h2>Name: {props.name} </h2>
        <h3>Roll: {props.roll} </h3>
      </div>
    </div>
  )
}

export default App




import './App.css'
// import Banner from './components/Banner'
// import NavBar from './components/NavBar' 




function App() {
  
  const StudentInfo =[
  {
    name: 'rakib',
    roll: 1250
  },
  {
    name: 'rohim',
    roll: 1260
  },
  {
    name: 'korim',
    roll: 1290
  },
  {
    name: 'zabbar',
    roll: 1300
  }
  ]

  return (
    <div>
    {/* <NavBar/>
    <Banner/> 
     <Student name="Rohim" roll="1201"/>
    <Student name="Korim" roll="1202"/>
    <Student name="Josim" roll="1203"/> */}
      {
        StudentInfo.map((item)=>{
          return <Student item={item}></Student>
         
        })
      }
      

    </div>
  );
}

 function Student ({item}) {
  // const {name, roll} = item
  return (
    <>
      <div className='info'>
        <h2>Name: {item.name} </h2>
        <h3>Roll: {item.roll} </h3>
      </div>
    </>
  )
}



export default App




import React, { useState } from 'react';
import './App.css'
// import Banner from './components/Banner'
// import NavBar from './components/NavBar' 
import Student from './components/student';




function App() {
  
  // const StudentInfo =[
  // {
  //   name: 'rakib',
  //   roll: 1250
  // },
  // {
  //   name: 'rohim',
  //   roll: 1260
  // },
  // {
  //   name: 'korim',
  //   roll: 1290
  // },
  // {
  //   name: 'zabbar',
  //   roll: 1300
  // }
  // ]
    const [count , SetCount] = useState(0)

  const HandleClick = (()=>{
    SetCount(count +1)
  });

  return (
    <div>
    {/* <NavBar/>
    <Banner/> 
     <Student name="Rohim" roll="1201"/>
    <Student name="Korim" roll="1202"/>
    <Student name="Josim" roll="1203"/> */}
      {/* {
        StudentInfo.map((item)=>{
          return <Student item={item}></Student>
         
        })
      } */}
      
        {/* <Student name="nahid hasan" roll="16"/> */}
      
  

       <Student name="rakin"/>
       <Student name="rakib"/>
       <Student name="akib"/>
     
    </div>
  );
}

//  function Student ({item}) {
//   // const {name, roll} = item
//   return (
//     <>
//       <div className='info'>
//         <h2>Name: {item.name} </h2>    //this code for StudenInfo execution
//         <h3>Roll: {item.roll} </h3>
//       </div>
//     </>
//   )
// }
//  function Student (props) {
//   // const {name, roll} = item
//   return (
//     <>
//       <div className='info'>
//         <h2>Name: {props.name} </h2>
//         <h3>Roll: {props.roll} </h3>
//       </div>
//     </>
//   )
// }



export default App



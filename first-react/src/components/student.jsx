import React, { useState } from 'react';


function student (props){
     
  const [count , SetCount] = useState(0)

  const HandleClick = (()=>{
    SetCount(count +1)
  });
  return (
    <div>
       <div className='click'>
          <h1>name:{props.name}</h1>
          <h2>Age:{count}</h2>
          <button onClick={HandleClick}>update</button>
        </div>
       
//     </div>
  );
}


 

export default student

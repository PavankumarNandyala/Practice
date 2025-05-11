import React,{useState} from 'react';

function Car(props){
    const cars=['Ford','MG','DJ'];
    return(
        <div>
        <h1>Lists</h1>
            
          {cars.map((item)=><p>{item}</p>)}
          
        </div>
    )
  
}
export default Car;
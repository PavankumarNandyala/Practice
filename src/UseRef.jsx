import React,{useRef,useState} from 'react'

function UseRef(){
  let h=useRef();
  return(
    <div>
      <h1 ref={h} onClick={()=>{
        console.log(h.current)
      }}>This is heading</h1>
    </div>
  )
}
// function UseRef() {
//     const[count,setCount]=useState(0)
//     const x=useRef(10);
//   return (
//     <div>
//         <h1 >value of x:{x.current}</h1>
//         <button onClick={()=>{
//             x.current=x.current+1
//             console.log(x.current)
//             setCount(count+10);
//         }}>increment</button>
        
//     </div>
//   )
// }

export default UseRef



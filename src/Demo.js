import React,{useState} from 'react'

function Demo() {
  const[values,setValue]=useState(100);
  return (
    <div>
      {values}
      <input type="text" onChange={(e)=>{
          let text=e.target.value
          setValue(text);
      }} value={values}/>
       <button onClick={()=>{
        setValue(values);
       }}>button</button>
    </div>
  )
}

export default Demo




// background change color

//import React from 'react'
// import './App.css';
// function Demo() {
//   return (
//     <div className='Wrapper'>
//       <h1>background color</h1>
//       <input type="color" onChange={(e)=>{
//           document.body.style.background=e.target.value
//       }}></input>
//     </div>
//   )
// }

// export default Demo


// import React,{useState,useEffect} from 'react'
// import Todo from './components/Todo';
// const Demo=()=> {
//     const [data]=Todo("https://jsonplaceholder.typicode.com/todos")
//   return (
//     <div>
       
//       {data && 
//       data.map((item)=>{
//         return <h1 key={item.id }>{item.id} {item.title}
//         </h1>
// })}
//     </div>
//   )
// }

// export default Demo


// import React from 'react'

// function Demo({todos,addTodo}) {
//   return (
//     <>
//       <h2>My Todos</h2>
//       {todos.map((todo,index)=><p key={index}>{todo}</p>)}
//       <button onClick={addTodo}>Add Todo</button>
//     </>
//   )
// }

// export default Demo;

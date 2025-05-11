import React, { useState } from 'react';
import { Link } from 'react-router';
import { Outlet } from 'react-router';
import { useLocation,useParams } from 'react-router';
import './Todo.css';

function Todo() {
  const [todoInput, updateInput] = useState('');
  const [todoList, updateTodos] = useState([
    { id: 1, task: 'learn react' },
    { id: 2, task: 'learn angular' }
  ]);

  let nextId = 3;

  const handler = (e) => {
    let task = e.target.value;
    updateInput(task);
  };

  const submitHandler = () => {
    if (todoInput === '') {
      alert('Add some task');
    } else {
      const newTodo = [
        ...todoList,
        {
          id: nextId++,
          task: todoInput
        }
      ];
      updateTodos(newTodo);
      updateInput(''); // empty input field
    }
  };

  const deleteTodo = (id) => {
    const updatedTasks = todoList.filter(item => item.id !== id);
    updateTodos(updatedTasks);
  };

let {id,name}=useParams();
let queryparams=useLocation();
  let queryParams=new URLSearchParams(queryparams.search)
  let category=queryParams.get('category');
  let posts=queryParams.get('posts');

  return (

    <div className='container mt-5 w-50'>
      {/* using routes  */}

      {/* <button><Link to="Orders">Order</Link></button>
      <button><Link to="Profile">Profile</Link></button>
      <Outlet/> */}
      <h1>id:{id}</h1>
      <h1>name:{name}</h1>
      <h3>category:{category}</h3>
      <h3>posts:{posts}</h3>




      {/* <h1>Todo App Using React</h1>
      <div className='input-group'>
        <input
          className='form-control'
          type='text'
          onChange={handler}
          value={todoInput}
        />
        <button className='btn btn-primary' onClick={submitHandler}>
          Add Todo
        </button>
      </div>
      <ul className='list-group mt-4'>
        {todoList.map((item, index) => (
          <li key={index} className='list-group-item'>
            <p>{item.task}</p>
            <button className='btn' onClick={() => deleteTodo(item.id)}>
              ❌
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
export function Orders(){
return(
  <h1>
    orders dashbord
  </h1>
)
}
export function Profile(){
  return(
    <h1>profile Dashbord</h1>
  )
}
// function Todo(){
//     const[count,setCount]=useState('puku ');
//     const[value,setValue]=useState(777)

//     const [product,setProduct]=useState({
        
//     })
//     const handler=()=>{
//         const v=document.getElementById("demo").value;
//         console.log(v);
//         setCount((prev)=>{
//             return prev + v;
//         })
//         setValue(v);
//     }
//     return(
//         <div>
//             <h1>{value}</h1>
//             <h1>value:{count}</h1>
//             <input type="text" id="demo"></input>
//             <button onClick={handler}>clicked</button>
//         </div>
//     )
// }




// class Todo extends React.Component{
//     constructor(){
//         super();
//         this.handler=this.handler.bind(this)
//         this.state={
//             price:''
//         }
    
//     }
    
//     handler(){
//         const c=document.getElementById("demo").value;
//         console.log(c);
//         this.setState({
//             price:c
            
//         })
     
//     }
//     render(){
//         return(
//             <div>
//                 <h1>count:{this.state.price}</h1>
//                 <input id ="demo" type='text'></input>
//                 <button onClick={this.handler}
               
//                 >clicked</button>
//             </div>
//         )
//     }

// class Todo extends React.Component{
    // constructor(){
    //     super();
    //     this.state={
    //         count:0
    //     }
    // }
    // handler=()=>{
    //     this.setState(
    //         {count:this.state.count+1}
    //     )
    // }
    // render(){
    //     return(
    //         <div>
    //             <h1>clicked:{this.state.count}</h1>
    //             <button onClick={this.handler}> Clicked</button>
    //         </div>
    //     )
    // }






// class Todo extends React.Component{
//   state={
//     product:"uyjgjhk",
//     price:5777
//   }
//     render(){
//         return(
//             <div>
//                 <h1>{this.state.price}</h1>
//                 <input id='price' type="number"></input>
//                 <button onClick={()=>{
//                     let p=document.getElementById('price').value;
//                     console.log(p);
//                     this.setState({
//                         price:p
//                     })
//                 }}>update</button>
//             </div>
//         )
//     }
// }

// function Todo() {
//     const[count,setCount]=useState(0);
//     const handler=()=>{
//         setCount((count)=>count+1);
//         console.log(count);

//     }
//   return (
//     <div>
//         <h1>counted:{count}</h1>
//       <button onClick={handler}>Clicked</button>
//     </div>
/* <div>
                <h1>count:{this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    }
                        )
                }}>Clicked</button>
            </div> */
//   )
// }

 export default Todo

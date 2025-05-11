import react from "react";
import { BrowserRouter,Routes,Route,Link } from "react-router";
import Calculator from "./components/Calculator";
import CounterApp from './components/CounterApp';
import Todo,{Orders,Profile} from "./components/Todo";
function Header(){
    return(
        <ul>
            <li><Link to='/Calculator'>Calculator</Link></li>
            <li><Link to='/CounterApp'>CounterApp</Link></li>
            <li><Link to='/Todo/100?post=100&category=admin'>Todo</Link></li>


        </ul>
    )
}
const Router=()=>{
    return(
        <>
        
            
       
       
        <BrowserRouter>
        <Header/>
       
      
        <Routes>
                  <Route path='/Calculator' element={<Calculator/>}/> 
                  <Route path='/CounterApp' element={<CounterApp/>}/>
                  <Route path='Todo/:id/:name' element={<Todo/>}>
                    {/* <Route path="Orders" element={<Orders/>}/>
                    <Route path="Profile" element={<Profile/>}/>
                   */}
                  </Route>    
            </Routes>
        </BrowserRouter>
        </>
     
    )
    
}
export default Router;
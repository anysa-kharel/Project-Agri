
import './App.css';
import Main from './Component/Main';
import NavBar from './Component/NavBar';
import Login from './Component/Login';
import Signup from './Component/Signup';
import { BrowserRouter, Route , Routes } from 'react-router-dom';

function App() {

  return (
    <>


 <BrowserRouter>
 <NavBar title="Agri"/>
    <Routes> 
  <Route index element={<NavBar/>}/>
  <Route exact path="/login" element={<Login/>}/>
  <Route exact path="/signup" element={<Signup/>}/>
</Routes>
</BrowserRouter>


  <div>
    
    
  </div>
  </>
    
  );
}

export default App;

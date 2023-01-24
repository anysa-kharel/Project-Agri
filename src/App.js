
import './App.css';
import NavBar from './Component/NavBar';
import Login from './Component/Login';
import Signup from './Component/Signup';
import { Route , Routes } from 'react-router-dom';

function App() {

  return (
  <>
   <Routes> 
  <Route index element={<NavBar title="Agri"/>}/>
  <Route exact path="/login" element={<Login/>}/>
  <Route exact path="/signup" element={<Signup/>}/>
</Routes>

</>
    
  );
}

export default App;

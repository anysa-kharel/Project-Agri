
import PropTypes from 'prop-types'
import "./NavBar.css"
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';


const NavBar = (props) =>
{
  const navigate = useNavigate();
  const login=()=>
  {
 
    navigate('/login')   
  }
  const signup=()=>
  {
          navigate('/signup')
  }

    return(
      <> 
      <nav className="main-nav">

    { /* title */ }   
    <div className="title" >
    <h2> {props.title}</h2>
    </div>

    { /* Menus */ }  
  <div className="menus">
    <ul >
    <li > <a href="/">Home</a></li>
      <li > <a href="/">About Us</a></li>
      <li > <a href="/">Contact Us</a></li>
    </ul>
    </div>

    { /* Buttons */ } 
    <div className="buttons">
<ul>
  <li>
  <button type="button" onClick={login} class="primary" >Log In</button> 
  </li>
  <li>
  <button type="button" onClick={signup}  class="secondary"  >Sign Up</button> 
  </li>

</ul>

</div>
 
    </nav> 
         </>
    );
}

NavBar.defaultProps={title : 'Title Here'};
NavBar.propTypes={title : PropTypes.string.isRequired}

export default NavBar

import PropTypes from 'prop-types'
import "./NavBar.css"
import { Link } from 'react-router-dom';

const NavBar = (props) =>
{
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
  <button type="button" class="primary" ><Link to="/login">Log In </Link></button> 
  </li>
  <li>
  <button type="button"  class="secondary"  ><Link to="/signup">Sign Up</Link></button> 
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
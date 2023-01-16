// import Login from "./Login";
import PropTypes from 'prop-types'
import "./NavBar.css"


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
  <div className="button1">
    
      <button type="button"  >Log In</button>
     
      </div>

    <div className="button2">

    <button type="button"  >Sign Up</button>
  
  </div>
      
      
      
    
  


    </nav> 
         </>
    );
}

NavBar.defaultProps={title : 'Title Here'};
NavBar.propTypes={title : PropTypes.string.isRequired}

export default NavBar
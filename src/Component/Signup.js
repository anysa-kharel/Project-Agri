import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import "./Signup.css"

const Signup = () => {
  const [value,setValue]=useState();
  return (
    <>
    <div className="main-sign">
      <form>

      
    <div>
      <h1>  Signup</h1>
    </div>

    <div>
    <label> First Name</label>
      <input type="text" class="mx-3 my-3"/>
      <label> Last Name</label>
      <input type="text" class="mx-3 my-3"/>
      <br/>
      </div>

      <div>
      <label>Phone Number</label>
      <PhoneInput value={value} onChange={setValue}/>
      </div>

      <div>
        <label> Email Address</label>
      <input type="email" class="mx-3 my-3" />
      </div>

      <div>
      <input type="checkbox" class="mx-3 my-3"/>
      <label>  By clicking, you agree to our <a href="/"> terms and conditions.</a> </label>
      </div>

      <div>
      <button type="submit" class="mx-3 my-3">Signup</button>
      </div>
      </form>
      </div>
    </>

  );
}

export default Signup;
import './SignIn.css';
import { useState } from 'react';
import { NavLink } from "react-router-dom"


function SignInSide() {
  const [user,setUser] = useState({
     userEmail:"",
     password:"",
  });
  const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;

        setUser({
          ...user,
          [name]: value,
        });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(user, null, 2));
  };
  return (
    <div>
      <div className="wrapper">
        <div className="login">
          <div className="logo"></div>
          <div className="form">
            <h2>we are the lotus team</h2>
            
            <br />
            <br />
            <br />
            <h4>LOGIN</h4>
           
            <br />
            <form onSubmit={handleSubmit} className="form">
              <input type="email" 
              id="uemail" 
              name="userEmail" 
             
              value={user.userEmail}
              onChange={handleInput}
              placeholder="User email" />
              <br />
              <br />
              <input type="password" 
              id="upass" 
              name="password" 
             
              value={user.password}
              onChange={handleInput}
              placeholder="password" />
              <br />
              <br />
              <button type='submit' className="loginbtn">login</button>
            </form>
            <p>forgot password?</p>
            <br /><br />
            <h4>Don't have an account?</h4>
            <button 
              style={{ color: '#ff00c8', width: '8vw', height: '25px', borderRadius: '4px', backgroundColor: 'white' }}>
             <NavLink to="/signUp" >CREATE NEW </NavLink>

            </button>         
             </div>
        </div>
        <div className="text">
          <h2>we are more than just a company</h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, voluptatem adipisci ea est non impedit totam facere sint dignissimos veritatis dolorem exercitationem, laboriosam omnis? Itaque voluptate voluptas cum voluptates natus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In eos dignissimos quo culpa iure esse ex id, ratione nam repudiandae similique ipsum asperiores libero sed doloribus. Eveniet non fuga molestias.
        </div>
      </div>
    </div>
  );
}

export default SignInSide;

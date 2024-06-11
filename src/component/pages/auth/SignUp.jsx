import { NavLink } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function SignUp() {
  const history = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();

    // Check if any required field is empty
    if (!user.firstName || !user.lastName || !user.email || !user.password) {
      alert("Please fill in all required fields.");
      return;
    }

    // If all required fields are filled, proceed with redirection
    alert(JSON.stringify(user, null, 2));
    // Redirect to the desired route
    navigate('/');
  };

  return (
    <div>
      <div className="wrapper">
        <div className="login">
          <div className="logo"></div>
          <form className="form" onSubmit={handleForm}>
            <h2>we are the lotus team</h2>
            <br />
            <h4>REGISTER</h4>

            <br />
            <input
              type="text"
              id="ufname"
              name="firstName"
              placeholder="firstname"
              value={user.firstName}
              onChange={handleInput}
              required
            />
            <br />
            <br />
            <input
              type="text"
              id="ulname"
              name="lastName"
              placeholder="lastname"
              value={user.lastName}
              onChange={handleInput}
              required
            />
            <br />
            <br />
            <input
              type="email"
              id="uemail"
              name="email"
              placeholder="email"
              value={user.email}
              onChange={handleInput}
              required
            />
            <br />
            <br />
            <input
              type="password"
              id="upass"
              name="password"
              placeholder="password"
              value={user.password}
              onChange={handleInput}
              required
            />
            <br />
            <br />
            <button type="submit" className="loginbtn">
            <NavLink to="/">Register Now </NavLink>
             
            </button>
          </form>
          
         
            <p className="linkhandle"><NavLink to="/SignInSide">Already have an account?</NavLink></p>
          
        </div>
        <div className="text">
          <h2>we are more than just a company</h2>
          <p1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, voluptatem adipisci ea est non impedit totam facere sint dignissimos veritatis dolorem exercitationem, laboriosam omnis? Itaque voluptate voluptas cum voluptates natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. In eos dignissimos quo culpa iure esse ex id, ratione nam repudiandae similique ipsum asperiores libero sed doloribus. Eveniet non fuga molestias.</p1>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

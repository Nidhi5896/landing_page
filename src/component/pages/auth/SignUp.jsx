function SignUp() {
    return (
      <div>
        <div className="wrapper">
          <div className="login">
            <div className="logo"></div>
            <div className="form">
              <h2>we are the lotus team</h2>
            
             
              <br />
              <h4>please register</h4>
              <br />
              <br />
              <form className="formins">
              <input type="text" id="uname" name="uname" placeholder="firstname" /><br />
                <br />
                <input type="text" id="uname" name="uname" placeholder="lastname" /><br />
                <br />
                <input type="email" id="uname" name="uname" placeholder="Username" /><br />
                <br />
                <input type="password" id="pass" name="pass" placeholder="password" /><br />
                <br />
                <button className="loginbtn">signUp</button>
              </form>
              <p>forgot password?</p>
              <br /><br />
              <h4>Don't have an account?</h4>
              <button style={{ color: '#ff00c8', width: '8vw', height: '25px', borderColor: '#ff00c8', borderRadius: '4px', backgroundColor: 'white' }}>CREATE NEW</button>
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
  
  export default SignUp;
  
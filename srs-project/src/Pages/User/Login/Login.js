import React, { useState, useEffect } from "react";
import "../Signup/Signup.scss";
import { useDispatch, useSelector } from 'react-redux';
// import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import { login, authCheck } from "../../../redux/All_Reducers/authActionCreator";

const Login = () => {

  let navigate = useNavigate();
  const dispatch = useDispatch()
  const user_id = useSelector((state) => state.userReducer.userId)

  useEffect(() => {
    dispatch(authCheck());
    return()=>{
      if (user_id){
        navigate("/profile")
      }
    }

  }, [user_id])

  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });
  const loginHandleChange = (e) => {
    setLoginState({ ...loginState, [e.target.name]: e.target.value });
  };
  
  let handleSubmit = (event) => {
    dispatch(login(loginState['email'], loginState['password']))
    event.preventDefault();    
  }
  
  
  // ReCAPTCHA Function
  // function onChange(value) {
    //   console.log("Captcha value:", value);
    // }
    
    // Forgot Function
    
    // let dispatch = useDispatch();
  function handleClick() {
    navigate("/forgot");
  }
  return (
    <>
      <div class="form_wrapper">
        <div class="form_container">
          <div class="title_container">
            <h2>Login Form</h2>
          </div>
          <div class="row clearfix">
            <div class="">
              <form onSubmit={handleSubmit} method="POST">
                <div class="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" class="fa fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={loginState.email}
                    onChange={loginHandleChange}
                  />
                </div>
                <div class="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" class="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={loginState.password}
                    onChange={loginHandleChange}
                  />
                </div>
                {/* <div class="row clearfix">
                  <ReCAPTCHA
                    sitekey="6LdsPFYdAAAAAC-jwLakqG1w8IZzJumZ0N9pmBu1"
                    onChange={onChange}
                  />
                </div> */}
                <br />
                <input className="button" type="submit" value="Log in" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <p class="credit">
        {" "}
        <p
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={handleClick}
          target="_blank"
        >
          Forgot password?
        </p>
      </p>
    </>
  );
};

export default Login;

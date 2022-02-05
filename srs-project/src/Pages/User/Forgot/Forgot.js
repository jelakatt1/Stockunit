import React, { useState } from "react";
import "../Signup/Signup.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import ReCAPTCHA from "react-google-recaptcha";

const Forgot = () => {
  // Forgat Email function
  const [forgotState, setForgotState] = useState({
    email: "",
  });

  const forgotHandleChange = (e) => {
    setForgotState({ ...forgotState, [e.target.name]: e.target.value });
  };
    let navigate = useNavigate();


    let handleSubmit = (event) => {
    let data = {"email":forgotState['email']};

    let url = "http://localhost:8000/api/user/password_reset/";
    const header = {
      headers: {
        "content-type": "application/json"
      }
    }

    try {
      axios.post(url, data, header)
        .then(response => {
          navigate("/")
          navigate("/forgotConfirmation")
        })
        .catch((error) => {
          console.log(error);
        });
    }
    catch (err) {
      console.error(`Error received from forgot password axios.post: ${JSON.stringify(err)}`);
    }
  }
  

  // ReCAPTCHA Function
  // function onChange(value) {
  //   console.log("Captcha value:", value);
  // }
  return (
    <>
      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Request password reset</h2>
          </div>
          <div class="row clearfix">
            <div className="">
              <form onSubmit={handleSubmit}>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={forgotState.email}
                    onChange={forgotHandleChange}
                  />
                </div>
                {/* <div class="row clearfix">
                  <ReCAPTCHA
                    sitekey="6LdsPFYdAAAAAC-jwLakqG1w8IZzJumZ0N9pmBu1"
                    onChange={onChange}
                  />
                </div> */}
                <br />
                <input className="button" type="submit" value="Send" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgot;

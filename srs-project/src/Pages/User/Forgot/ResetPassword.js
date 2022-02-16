import React, { useState } from "react";
import "../Signup/Signup.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  // Reset Password Function
  const [newPasswordState, setNewPasswordState] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  
  const newPsswordHandleChange = (e) => {
    setNewPasswordState({
      ...newPasswordState,
      [e.target.name]: e.target.value,
    });
  };
  
  
  let navigate = useNavigate();
  
  
  let handleSubmit = (event) => {
    
    if (newPasswordState['newPassword'] === newPasswordState['confirmPassword']){
      
      let token = (window.location.href).split("token=")[1];
      let data = { "password": newPasswordState['newPassword'], "token": token };
      console.log("data", data)
      let url = "http://localhost:8000/api/user/password_reset/confirm/";
      const header = {
        headers: {
          "content-type": "application/json"
        }
      }
  
      try {
        axios.post(url, data, header)
          .then(response => {
            navigate("/forgotConfirmation")
            navigate("/")
          })
          .catch((error) => {
            console.log(error);
          });
      }
      catch (err) {
        console.error(`Error received from forgot password axios.post: ${JSON.stringify(err)}`);
      }

    }
  }


  return (
    <>
      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Reset Password</h2>
          </div>
          <div className="row clearfix">
            <div className="">
              <form onSubmit={handleSubmit}>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    placeholder="New Password"
                    required
                    name="newPassword"
                    value={newPasswordState.newPassword}
                    onChange={newPsswordHandleChange}
                  />
                </div>
                <div className="input_field">
                  {" "}
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    name="confirmPassword"
                    value={newPasswordState.confirmPassword}
                    onChange={newPsswordHandleChange}
                  />
                </div>

                <br />
                <input className="button" type="submit" value="Reset" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;

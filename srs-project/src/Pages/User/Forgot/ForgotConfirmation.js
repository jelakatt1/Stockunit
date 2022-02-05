import React from "react";
import "../Signup/Signup.scss";

const ForgotConfirmation = () => {
  return (
    <>
      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>Reset Password</h2>
          </div>
          <div className="row clearfix">
            <div className="">
              <p style={{ textAlign: "center", fontSize: "8rem" }}>
                <i className="fas fa-envelope-open-text"></i>
              </p>
              <br />
              <p style={{ textAlign: "center" }}>
                To reset your password, please follow the instructions emailed
                to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotConfirmation;

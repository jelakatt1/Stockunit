import React from "react";
import { useNavigate } from "react-router-dom";

const ResetConfirmations = () => {
  // Login Function
  let navigate = useNavigate();

  function handleClick() {
    navigate("/login");
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
              <p style={{ textAlign: "center", fontSize: "8rem" }}>
                <i className="fas fa-envelope-open-text"></i>
              </p>
              <br />
              <p style={{ textAlign: "center" }}>
                Your password has been reset.
                <br />
                Please{" "}
                <span
                  style={{
                    cursor: "pointer",
                    color: "#f5ba1a",
                    textDecoration: "underline",
                  }}
                  onClick={handleClick}
                >
                  Click here to Login
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetConfirmations;

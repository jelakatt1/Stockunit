import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from 'react-redux';
import {  authCheck, logout } from "../../redux/All_Reducers/authActionCreator";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  const dispatch = useDispatch()
  const user_id = useSelector((state) => state.userReducer.userId)

  useEffect(() => {
    dispatch(authCheck());
  }, [])

  let user_logout = () => {
    dispatch(logout())
  }

  let profile_section = null;

  if (user_id){
    profile_section = <>

      <li className="nav-item">
        <NavLink
          exact
          to="/members"
          activeClassName="active"
          className="nav-links"
          onClick={click ? handleClick : null}
        >
          Members
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          exact
          to="/friends"
          activeClassName="active"
          className="nav-links"
          onClick={click ? handleClick : null}
        >
          Friends
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          exact
          to="/payment"
          activeClassName="active"
          className="nav-links"
          onClick={click ? handleClick : null}
        >
          Payment
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          exact
          to="/survey"
          activeClassName="active"
          className="nav-links"
          onClick={click ? handleClick : null}
        >
          Survey
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          exact
          to="/profile"
          activeClassName="active"
          className="nav-links"
          onClick={click ? handleClick : null}
        >
          Profile
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          exact
          to="/"
          activeClassName="active"
          className="nav-links"
          onClick={user_logout}
        >
          Log out
        </NavLink>
      </li>
    </>;
  }
  else{
    profile_section = <>


      <li className="nav-item">
        <NavLink
          exact
          to="/"
          activeClassName="active"
          className="nav-links"
          onClick={click ? handleClick : null}
        >
          Log in
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          exact
          to="/signup"
          activeClassName="active"
          className="nav-links"
          onClick={click ? handleClick : null}
        >
          Sign up
        </NavLink>
      </li>
    </>
  }


  return (
    <>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="#" className="nav-logo">
            Company Logo
            <i className="fa fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              ></NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/product"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Product
              </NavLink>
            </li> */}

          {profile_section}

          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

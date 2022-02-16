import React, {useEffect} from "react";
import * as actionTypes from '../../redux/All_Reducers/actionTypes'
import "./MemberProfile.css";
import { useNavigate } from "react-router-dom";
import {useParams} from "react-router-dom";
import { memberProfileDetails, getUploadedFile} from '../../redux/All_Reducers/authActionCreator'
import { useDispatch, useSelector } from 'react-redux';

const MemberProfile = () => {
  let navigate = useNavigate();
  const member_profile = useSelector((state) => state.userReducer.member_profile)
  const userId = useSelector((state) => state.userReducer.userId)
  let { id } = useParams();
  const get_uploaded_file = useSelector((state) => state.userReducer.get_uploaded_file);
  const dispatch = useDispatch()
  
  
  function buyNow(buy_data) {
    console.log(buy_data)
    dispatch({
        type: actionTypes.BUYDATA,
        payload: buy_data
      })
    navigate("/payment");
  }


  useEffect(() => {
    dispatch(memberProfileDetails(id));
    dispatch(getUploadedFile(id));
  }, [id])

  return (
    <>

        {userId ?
        <>
          <section className="dashboard-container">
            <div className="dashboard-title">
              <h3>Member Profile</h3>
            </div>
        <div className="dashboard-data">
          <div className="dashboard-data-user left-data-user">
            <p>
              <span>Name:</span> {member_profile.first_name} {member_profile.last_name}
            </p>
            <p>
              <span>Email:</span> {member_profile.email}
            </p>
            <p>
              <span>Phone:</span> {member_profile.phone}
            </p>
            <p>
              <span>Gender:</span> {member_profile.gender}
            </p>
            <p>
              <span>Date of Birth:</span> {member_profile.dob}
            </p>
            <p>
              <span>Username:</span> {member_profile.username}
            </p>
          </div>
        </div>
              <div className="container">
        <div className="row">
          {
            Object.keys(get_uploaded_file).map((indx) => (
              <div className="col-md-6 ">
                <div className="card">
                  <div className="card-image">
                    <div className="embed-responsive embed-responsive-16by9">
                      <embed title={get_uploaded_file[indx].title}
                        width="560"
                        height="315"
                        src={get_uploaded_file[indx].file}
                        frameborder="0"
                        allowfullscreen
                      />

                    </div>
                  </div>

                  <div className="card-content">
                    <span className="card-title">{get_uploaded_file[indx].name}</span>
                    <div className="rating">
                      <i id="one" className="fas fa-star"></i>
                      <i id="one" className="fas fa-star"></i>
                      <i id="one" className="fas fa-star"></i>
                      <i id="one" className="fas fa-star"></i>
                      <i id="one" className="fas fa-star"></i>
                    </div>
                    <p>
                      {get_uploaded_file[indx].description}
                    </p>
                    <p>
                      Price: {get_uploaded_file[indx].price === -1 ? "not set yet" : get_uploaded_file[indx].price}
                    </p>
                    <button onClick={() => buyNow(get_uploaded_file[indx])}>Buy Now</button>
                  </div>
                </div>
              </div>
            ))
          };
          </div>
        </div>
      </section>
      </>
        :""}

    </>
  );
};

export default MemberProfile;

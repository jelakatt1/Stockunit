import React, {useEffect} from "react";
import "./MemberProfile.css";
import Art from "../../Images/bg.jpg";
import { useNavigate } from "react-router-dom";
import {useParams} from "react-router-dom";
import { memberProfileDetails} from '../../redux/All_Reducers/authActionCreator'
import { useDispatch, useSelector } from 'react-redux';

const MemberProfile = () => {
  let navigate = useNavigate();
  const member_profile = useSelector((state) => state.userReducer.member_profile)
  const userId = useSelector((state) => state.userReducer.userId)
  let { id } = useParams();
  function handleClick() {
    navigate("/payment");
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(memberProfileDetails(id));
  }, [id])

  return (
    <>

      <section className="dashboard-container">
        <div className="dashboard-title">
          <h3>Member Profile</h3>
        </div>

        {userId ?
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
        </div>:""}
      </section>
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <div className="card">
              <div className="card-image">
                <div className="embed-responsive embed-responsive-16by9">
                  <img width="560" height="315" src={Art} alt={Art} />
                  <div className="content">
                    <h1>The Timbers</h1>
                  </div>
                </div>
              </div>

              <div className="card-content">
                <span className="card-title">Thumping Rhythms</span>
                <div className="rating">
                  <i id="one" className="fas fa-star"></i>
                  <i id="one" className="fas fa-star"></i>
                  <i id="one" className="fas fa-star"></i>
                  <i id="one" className="fas fa-star"></i>
                  <i id="one" className="fas fa-star"></i>
                </div>
                <p>
                  THE TIMBERS’ thumping rhythms and big misty mountain melodies
                  will cast you away to a sweaty, smoky, melting-pot of folk,
                  roots and Celtic bushman brassy punk. They rollick and hammer
                  their way through live gigs with abundant energy and have
                  become festival favourites throughout Australia.
                </p>
              </div>

              <button onClick={handleClick}>Buy Now</button>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="card">
              <div className="card-image">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/LR6xXs4lDsA"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                  <div className="content">
                    <h1>Z-STAR Trinity</h1>
                  </div>
                </div>
              </div>

              <div className="card-content">
                <span className="card-title">Exhilarating to Watch</span>
                <div className="rating">
                  <i id="one" className="fas fa-star"></i>
                  <i id="one" className="fas fa-star"></i>
                  <i id="one" className="fas fa-star"></i>
                  <i id="one" className="fas fa-star"></i>
                  <i id="one" className="fas fa-star"></i>
                </div>
                <p>
                  Shaking up the Australian blues scene, award-winning
                  international artist Zee Gachette will be setting the stage
                  alight with her high octane energy modern blues, psyche rock,
                  folk n’ funk. Zee’s inimitable talent for improvising onstage
                  is simply exhilarating to watch, inspiring standing ovations
                  from music legends like Jimmy Page (Led Zeppelin), Roger
                  Daltrey (The Who) and Amy Winehouse. A show not to be missed!
                </p>
              </div>

              <button onClick={handleClick}>Buy Now</button>
            </div>
          </div>

          <div className="col-md-6 ">
            <div className="card">
              <div className="card-image">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/JAdVqLMdDhY"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                  <div className="content">
                    <h1>Dubarray</h1>
                  </div>
                </div>
              </div>

              <div className="card-content">
                <span className="card-title">
                  Uplifting, Soulful & Euphoric
                </span>
                <div className="rating">
                  <i id="one" className="fas fa-star"></i>
                  <i id="one" className="fas fa-star"></i>
                  <i id="one" className="fas fa-star"></i>
                  <i id="one" className="fas fa-star"></i>
                  <i id="one" className="fas fa-star"></i>
                </div>
                <p>
                  Uplifting, Soulful & Euphoric, Dubarray combine a fresh fusion
                  of boundary bending world music that infuses such styles as
                  trip-hop, funk, reggae, dancehall, drum & bass, house and
                  tribal grooves layered on a bed electronic ambience and
                  organic undertones.
                </p>
              </div>
              <button onClick={handleClick}>Buy Now</button>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="card">
              <div className="card-image">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/HUC7nfQxVDI"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                  <div className="content">
                    <h1>The Sexicclesiastes</h1>
                  </div>
                </div>
              </div>

              <div className="card-content">
                <span className="card-title">Psychedelic Punk Folk</span>
                <div className="rating">
                  <i id="one" className="fas fa-star"></i>
                  <i id="one" className="fas fa-star"></i>
                  <i id="one" className="fas fa-star"></i>
                  <i id="one" className="fas fa-star"></i>
                  <i id="one" className="fas fa-star"></i>
                </div>
                <p>
                  Having been described as a "raucous circus of hyper speed
                  gypsy rock” embracing "just about every element of theatrical
                  rock & roll in existence”, this psychedelic punk folk outfit
                  has been bringing their vigorous foot stomping hectic good
                  times tunage to Palm Creek for at least 15 years. The heat has
                  caused their memories to be a little hazy.{" "}
                </p>
              </div>

              <button onClick={handleClick}>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberProfile;

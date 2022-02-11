import React, { useState, useEffect } from "react";
import "./Profile.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { authCheck } from "../../redux/All_Reducers/authActionCreator";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Art from "../../Images/bg.jpg";

const Profile = () => {

  let navigate = useNavigate();
  const dispatch = useDispatch()
  const user_details = useSelector((state) => state.userReducer.user_details)
  const { userId } = useSelector(state => state.userReducer)

  useEffect(() => {
    dispatch(authCheck());
  }, [userId])


  const [ProfileUpdateState, setProfileUpdateState] = useState({
    first_name : "",
    last_name : "",
    email : "",
    phone : "",
    dob: "",
    username : "",
    gender : ""
  });

  const profileUpdateHandleChange = (e) => {
    setProfileUpdateState({ ...ProfileUpdateState, [e.target.name]: e.target.value });
  };
  
  let [FileUploadState, setFileUploadState] = useState({
    title : "",
    name : "",
    description : "",
  });

  let [fileState, setFileState] = useState(null)

  const FileUploadHandleChange = (e) => {
    setFileUploadState({ ...FileUploadState, [e.target.name]: e.target.value });
  };

  let fileHandleSubmit = (e) =>{
    let url = "http://localhost:8000/api/fileupload/"


    let formData = new FormData();
    formData.append('user',userId)
    formData.append('title', FileUploadState['title'])
    formData.append('name', FileUploadState['name'])
    formData.append('description', FileUploadState['description'])
    formData.append('file', fileState)

    const header = {
      headers: {
        "Content-Type" : "multipart/form-data"
      }
    }
    e.preventDefault();

    try {
      axios.post(url, formData, header)
      .then(response => {
          navigate("/survey/")
          navigate("/profile/")
        })
        .catch((error) => {
          console.log(error);
        });
    }
    catch (err) {
      console.error(`Error received from axios.put: ${JSON.stringify(err)}`);
    }
  }

  let handleSubmit = () => {
    let updateData = {}

    for (var key in ProfileUpdateState){
      if (ProfileUpdateState[key]!==""){
        updateData[key] = ProfileUpdateState[key];
      }
    }
    let url = "http://localhost:8000/api/user/" + userId + "/";
    const header = {
      headers: {
        "content-type": "application/json"
      }
    }

    try {
      axios.patch(url, updateData, header)
        .then(response => {
          navigate("/survey/")
          navigate("/profile/")
        })
        .catch((error) => {
          console.log(error);
        });
    }
    catch (err) {
      console.error(`Error received from axios.put: ${JSON.stringify(err)}`);
    }

  };

  const [showUpload, setShowUpload] = useState(false);

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseUpload = () => setShowUpload(false);
  const handleShowUpload = () => setShowUpload(true);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  return (
    <>
      <section className="dashboard-container">
        <div className="dashboard-title">
          <h3>User Profile</h3>
          <h3>Account Balance: $500</h3>
          <h3>Commission Earned: $200</h3>
          <button onClick={handleShowUpload}>Upload</button>
          <button onClick={handleShowEdit}>Update Profile</button>
        </div>


        <div className="dashboard-data">
          <div className="dashboard-data-user left-data-user">
            <p>
              <span>Name:</span> {user_details.first_name} {user_details.last_name} 
            </p>
            <p>
              <span>Email:</span> {user_details.email}
            </p>
            <p>
              <span>Phone:</span> {user_details.phone}
            </p>
            <p>
              <span>Gender:</span> {user_details.gender}
            </p>
            <p>
              <span>Date of Birth:</span> {user_details.dob}
            </p>
            <p>
              <span>Username:</span> {user_details.username}
            </p>
          </div>
        </div>
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
              <button>Delete</button>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="card">
              <div className="card-image">
                <div Name="embed-responsive embed-responsive-16by9">
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
              <button>Delete</button>
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
              <button>Delete</button>
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
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      <Modal show={showUpload} onHide={handleCloseUpload} >
        <Modal.Header closeButton>
          <Modal.Title>Upload</Modal.Title>
        </Modal.Header>
        <form onSubmit={(event) => fileHandleSubmit(event)} id="fileform" encType="multipart/form-data">
        <input type="text" name="title" onChange={FileUploadHandleChange} className="token-input" placeholder="Enter Title" />
        <input type="text" onChange={FileUploadHandleChange} name="name" className="token-input" placeholder="Enter Name" />
        <textarea
          onChange={FileUploadHandleChange} 
          name="description"
          form="usrform"
          placeholder="Enter Description"
        />

        <input type="file" onChange={(e)=>setFileState(e.target.files[0])} className="token-input" name="file" />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpload}>
            Cancel
          </Button>
            <Button type="submit" id="submit" 
            style={{ color: "#ffdd40", backgroundColor: "#1f5156" }}
          >
            Upload
          </Button>
        </Modal.Footer>
        </form>
      </Modal>

      {/* Edit Modal */}
      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <input
          type="text"
          name="first_name"
          onChange={profileUpdateHandleChange}
          className="token-input"
          placeholder="Enter Update First Name"
          defaultValue={user_details.first_name}
        />
        <input
          type="text"
          className="token-input"
          placeholder="Enter Update Last Name"
          name="last_name"
          onChange={profileUpdateHandleChange}
          defaultValue={user_details.last_name}
        />
        <input
          type="email"
          className="token-input"
          name="email"
          onChange={profileUpdateHandleChange}
          placeholder="Enter Update Email"
          defaultValue={user_details.email}
        />

        <input
          type="number"
          className="token-input"
          name="phone"
          onChange={profileUpdateHandleChange}
          placeholder="Enter Update Phone"
          defaultValue={user_details.phone}
        />

        <select defaultValue={user_details.gender} name="gender" className="input_field"
          onChange={profileUpdateHandleChange}
        >
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Other">Other</option>
          <option value="Prefer Not To Say">Prefer Not To Say</option>
        </select>

        <input
          type="date"
          className="token-input"
          name="dob"
          onChange={profileUpdateHandleChange}
          placeholder="Enter Update Date of Birth"
          defaultValue={user_details.dob}
        />

        <input
          type="text"
          className="token-input"
          name="username"
          onChange={profileUpdateHandleChange}
          placeholder="Enter Update Username"
          defaultValue={user_details.username}
        />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Cancel
          </Button>
          <Button
            style={{ color: "#ffdd40", backgroundColor: "#1f5156" }}
            onClick={handleSubmit}
          >
            Update
          </Button>
        </Modal.Footer>

      </Modal>
    </>
  )
};

export default Profile;

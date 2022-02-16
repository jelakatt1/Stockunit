import React from "react";
import "./Members.css";
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Members = () => {
  
  const all_users_details = useSelector((state) => state.userReducer.all_users_details)
  const all_friends_details = useSelector((state) => state.userReducer.all_friends_details)
  const userId = useSelector((state) => state.userReducer.userId)
  
  let friends_id = []
  let friend_obj = []
  for (let friend in all_friends_details){
    friends_id.push( all_friends_details[friend][1].id)
    friend_obj.push([all_friends_details[friend][0], all_friends_details[friend][1].id])
  }
  let navigate = useNavigate();
  let handleSubmit = (action_data) => {
    let url = null;
    let data = null;
    const header = {
      headers: {
        "content-type": "application/json"
      }
    }

    if (action_data[0]==="AddFriend"){
      url = "http://localhost:8000/api/friend/"
      data ={
        user: userId,
        friend: action_data[1]
      }
        try {
          axios.post(url, data, header)
            .then(response => {
              navigate("/profile/")
              navigate("/members/")
            })
            .catch((error) => {
              console.log(error);
            });
        }
        catch (err) {
          console.error(`Error received from axios.put: ${JSON.stringify(err)}`);
        }
    }
    else if (action_data[0] === "UnFriend"){
      url = "http://localhost:8000/api/friend/"+action_data[2]+"/"
      try {
        axios.delete(url)
          .then(response => {
            navigate("/profile/")
            navigate("/members/")
          })
          .catch((error) => {
            console.log(error);
          });
      }
      catch (err) {
        console.error(`Error received from axios.put: ${JSON.stringify(err)}`);
      }
    }

  };


  return (
    <>
      <section className="product-section">
        <div className="product-data-table">
          <table className="table">
            <thead>
              <th>No</th>
              <th>Username</th>
              <th>Email</th>
              <th>Add/Remove Friend</th>
              <th>View Profile</th>
            </thead>
            <tbody>
              {userId ?
                Object.keys(all_users_details).map((indx) => (
                  all_users_details[indx].id !== parseInt(userId)?
                  <tr>
                    <td data-label="Id">{parseInt(indx) + 1}</td>
                    <td data-label="Phone">{all_users_details[indx].username}</td>
                    <td data-label="Operator">{all_users_details[indx].email}</td>
                    <td data-label="Operator">
                      <button onClick={() => handleSubmit(friends_id.includes(all_users_details[indx].id) ? ["UnFriend", all_users_details[indx].id, friend_obj[friends_id.findIndex((friend_id) => friend_id === all_users_details[indx].id )][0]] : ["AddFriend", all_users_details[indx].id])}>

                        {friends_id.includes(all_users_details[indx].id) ? "UnFriend" :"AddFriend"}</button>
                    </td>
                    <td data-label="Operator">
                      <Link to={"/memberprofile/" + all_users_details[indx].id}><button>View Profile</button></Link>
                    </td>
                  </tr>:""
                ))
                : null}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Members;

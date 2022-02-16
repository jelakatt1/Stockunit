import React, { useState} from "react";
import "./Friends.css";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Friends = () => {
  const all_friends_details = useSelector((state) => state.userReducer.all_friends_details)
  const userId = useSelector((state) => state.userReducer.userId)
  let [searchState, setSearchState ] = useState('')
  let new_friend = all_friends_details;

  let searchHandler =() =>{
    new_friend = all_friends_details.map((friend) => {
      if (friend[1].username.search(searchState) !== -1){
        return friend
      }
      else{
        return null
      }
    })
  }

  if (searchState!==""){
  searchHandler()
  }
  else{
    new_friend = all_friends_details;
  }
  return (
    <>
      <section className="product-section">
        <form className="form-search" method="get" action="#">
          <input type="text" name="search" onChange={(event) => setSearchState(event.target.value)} placeholder="Search username" />
        </form>

        <div className="product-data-table">
          <table className="table">
            <thead>
              <th>No</th>
              <th>Username</th>
              <th>Email</th>
              <th>View Profile</th>

            </thead>
            <tbody>
            {userId?
              Object.keys(new_friend).map((indx) => (
                new_friend[indx]?(
                  new_friend[indx][1].id !== parseInt(userId)?
                <tr>
                  <td data-label="Id">{parseInt(indx) + 1}</td>
                  <td data-label="Phone">{new_friend[indx][1].username}</td>
                  <td data-label="Operator">{new_friend[indx][1].email}</td>
                  <td data-label="Operator">
                    <Link to={"/memberprofile/" + new_friend[indx][1].id}><button>View Profile</button></Link>
                  </td>
                </tr>:null):null
              ))
            :null}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Friends;

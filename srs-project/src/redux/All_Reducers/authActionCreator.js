import * as actionTypes from './actionTypes';
import axios from 'axios';
import jwt_decode from 'jwt-decode'

const storeLocally = (token) => {
    const decoded = jwt_decode(token)
    const expTime = decoded.exp;
    const user_id = decoded.user_id;
    localStorage.setItem("token", token);
    localStorage.setItem('userId', user_id);
    const expirationTime = new Date(expTime * 1000);
    localStorage.setItem('expirationTime', expirationTime);
    return user_id;
}


export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}


export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: {
            token: token,
            userId: userId
        }
    }
}

export const user_details = (data) => {
    return {
        type: actionTypes.USER_DETAILS,
        payload: data
    }    
}    

export const userDetails = (userId) => dispatch => {

    const header = {
        headers: {
            "content-type": "application/json"
        }
    }

    const authData = {
        id: userId,
    }

    let authUrl = 'http://localhost:8000/api/user/' + userId
    axios.get(authUrl, authData, header)
        .then(response => {
            dispatch(user_details(response.data))
        })
}


export const member_profile = (data) => {
    return {
        type: actionTypes.MEMBER_PROFILE,
        payload: data
    }    
}    

export const memberProfileDetails = (memberId) => dispatch => {

    const header = {
        headers: {
            "content-type": "application/json"
        }
    }

    const authData = {
        id: memberId,
    }

    let authUrl = 'http://localhost:8000/api/user/' + memberId
    axios.get(authUrl, authData, header)
        .then(response => {
            dispatch(member_profile(response.data))
        })
}


export const all_users_detail = (data) => {
    return {
        type: actionTypes.ALL_USERS_DETAIL,
        payload: data
    }    
}    


export const allUsersDetail = () => dispatch => {
    let authUrl = 'http://localhost:8000/api/user/'
    axios.get(authUrl)
        .then(response => {
            dispatch(all_users_detail(response.data))
        })    
}        
export const all_friends_detail = (data) => {
    return {
        type: actionTypes.ALL_FRIENDS_DETAIL,
        payload: data
    }    
}    


export const allFriendsDetail = (userId) => dispatch => {
    let authUrl = 'http://localhost:8000/api/myfriends/?friend='+userId
    
    const header = {
        headers: {
            "content-type": "application/json"
        }
    }

    const data = {
        id: userId,
    }
    axios.get(authUrl, data, header)
        .then(response => {
            dispatch(all_friends_detail(response.data))
        })
}        
export const get_uploaded_file = (data) => {
    return {
        type: actionTypes.GET_UPLOADED_FILE,
        payload: data
    }    
}    


export const getUploadedFile = (userId) => dispatch => {
    let authUrl = 'http://localhost:8000/api/getuploadedfile/?userId='+userId
    
    const header = {
        headers: {
            "content-type": "application/json"
        }
    }

    const data = {
        id: userId,
    }
    axios.get(authUrl, data, header)
        .then(response => {
            dispatch(get_uploaded_file(response.data))
        })
}        


export const authCheck = () => dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
        dispatch(logout())
    }
    else {
        const expirationTime = new Date(localStorage.getItem('expirationTime'));
        if (expirationTime <= new Date()) {
            dispatch(logout())
        }
        else {
            const userId = localStorage.getItem('userId');
            dispatch(authSuccess(token, userId));
            dispatch(userDetails(userId));
            dispatch(allUsersDetail());
            dispatch(allFriendsDetail(userId));
            dispatch(getUploadedFile(userId));
        }
    }
}


export const authFailed = errMsg => {
    console.log("errMsg", errMsg)
    return {
        type: actionTypes.AUTH_FAILED,
        payload: errMsg
    }
}



export const signUp = (
    first_name,
    last_name,
    email,
    phone,
    birth,
    password,
    username,
    code,
    gender
) => {
    const authData = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone,
        dob: birth,
        password: password,
        username: username,
        access_code: code,
        gender: gender,
        returnSecureToken: true
    }

    let authUrl = "http://localhost:8000/api/user/";
    const header = {
        headers: {
            "content-type": "application/json"
        }
    }

    axios.post(authUrl, authData, header)
        .then(response => {
            console.log(response.data)
        })
        .catch(err => {
            console.log(err)
        })
}




export const login = ( email, password ) => dispatch =>  {

    const authData = {
        email : email ,
        password : password ,
        returnSecureToken: true
    }

    let authUrl = "http://localhost:8000/api/token/";
    const header = {
        headers: {
            "content-type": "application/json"
        }
    }

    axios.post(authUrl, authData, header)
        .then(response => {
            const token = response.data.access;
            const user_id = storeLocally(token);
            dispatch(authSuccess(token, user_id));
            })
        .catch(err => {
            console.log("error",err)
        });
}



import * as actionTypes from './actionTypes';


const INITIAL_STATE = {
    token: null,
    userId: null,
    authFailedMsg: null,
    user_details : {},
    member_profile: {},
    all_users_details: {},
    all_friends_details: {},
    get_uploaded_file: {}
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        //Auth Cases
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                userId: action.payload.userId
            }
        case actionTypes.USER_DETAILS:
            return {
                ...state,
                user_details: action.payload
            }
        case actionTypes.MEMBER_PROFILE:
            return {
                ...state,
                member_profile: action.payload
            }
        case actionTypes.ALL_USERS_DETAIL:
            return {
                ...state,
                all_users_details: action.payload
            }
        case actionTypes.GET_UPLOADED_FILE:
            return {
                ...state,
                get_uploaded_file: action.payload
            }
        case actionTypes.ALL_FRIENDS_DETAIL:
            let friends_id = []
            for(let ele in action.payload){
                if (parseInt(action.payload[ele].user) !== parseInt(state.userId)){
                    if (!(friends_id.includes((parseInt(action.payload[ele].user)))))
                    {
                        let id = parseInt(action.payload[ele].id)
                        friends_id.push([id, parseInt(action.payload[ele].user)])
                    }
                }
                else{
                    if (!(friends_id.includes((parseInt(action.payload[ele].friend))))) {
                        let id = parseInt(action.payload[ele].id)
                        friends_id.push([id, parseInt(action.payload[ele].friend)])
                    }
                }
            }
            let friends_user = []

            for (let indx in friends_id)
            {
                for (let j in state.all_users_details){

                    if ((parseInt(friends_id[indx][1]) === parseInt(state.all_users_details[j].id))){
                        friends_user.push([ friends_id[indx][0], state.all_users_details[j]])
                    }
                }
            }

            return {
                ...state,
                all_friends_details: friends_user
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                authFailedMsg: null,
                token: null,
                userId: null,
            }
        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                authFailedMsg: action.payload
            }
        default:
            return state;
    }
}


export default function userDataReducer(state = INITIAL_STATE, action) {

    return state;
}
import { combineReducers } from "redux";
import userDataReducer, { userReducer} from './All_Reducers/userReducer'

export const rootReducer = combineReducers({

    userReducer: userReducer,
    userDataState: userDataReducer,
})
import { stopSubmit } from "redux-form";
import { authApi } from "../../api/api";


const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId:null,
    email:null,
    login:null,
    isAuth: false
}


const authReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_USER_DATA:
            return{
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}


export let setAuthUserData = (userId, email, login, isAuth) =>{
    return{type: SET_USER_DATA, payload: {userId, email, login, isAuth}};
}



export const loginUser = (email, password, rememberMe) => (dispatch) =>{
    authAPI.login(email, password, rememberMe)
    .then(response =>{
        if(response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error';
            dispatch(stopSubmit('login', {_error: message}))
        }
    })
}

export const logoutUser = () => (dispatch) =>{
    authAPI.logout()
    .then(response =>{
        if(response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}


export default authReducer;
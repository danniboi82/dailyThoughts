import {
    SET_CURRENT_USER,
    REMOVE_CURRENT_USER
}
from '../actionTypes';

let DEFAULT_USER_STATE = {
    isAuthenticated: false,
    user: {}, //all user information when logged in 
};

export default (state = DEFAULT_USER_STATE, action) => {
    switch(action.type){
        case SET_CURRENT_USER: 
        return {
            isAuthenticated: !!Object.keys(action.user).length,
            user: action.user
        }
        default: 
        return state;
    }
}
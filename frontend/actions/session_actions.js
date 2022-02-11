import {
    postUser,
    postSession,
    deleteSession,
} from '../utils/session_api_util';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
})

const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

const logoutCurrentUser = () => {

    return {
        type: LOGOUT_CURRENT_USER
    }
}

export const signup = user => dispatch => postUser(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON)));

export const login = user => dispatch => postSession(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON)));

export const logout = () => dispatch => deleteSession()
    .then(() => dispatch(logoutCurrentUser()));

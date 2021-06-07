import Constants from './constants';

const requestSignIn = (username, password) => ({
    type: Constants.REQUEST_SIGN_IN,
    username,
    password
});

const requestSignUp = () => ({
    type: Constants.REQUEST_SIGN_UP
});

const requestCurrentUser = (token: string) => ({
    type: Constants.REQUEST_CURRENT_USER,
    token
});


const setCurrentUser = <T>(data: T) => ({
    type: Constants.SET_CURRENT_USER,
    data
});

const requestLogout = () => ({
    type: Constants.REQUEST_LOGOUT
});

export {
    requestSignIn,
    requestSignUp,
    requestCurrentUser,
    requestLogout,
    setCurrentUser
}
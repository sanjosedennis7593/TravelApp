import Constants from './constants';

const requestSignIn = () => ({
    type: Constants.REQUEST_SIGN_IN
});

const requestSignUp = () => ({
    type: Constants.REQUEST_SIGN_UP
});

const requestCurrentUser = (token: string) => ({
    type: Constants.REQUEST_CURRENT_USER
});


export {
    requestSignIn,
    requestSignUp,
    requestUser
}
import { all, call, put, takeEvery } from 'redux-saga/effects';
import Constants from './constants';

// REDUX
import { setCurrentUser } from '@app/redux/user/action';

// SERVICES
import { getUserByEmail,signIn, updateUser } from '@app/services/auth';


type SignInAction = {
  username: string,
  password: string,
  type: string
}

function* getUserRequest<T>(action: T) {
  try {
    const { data } = action;
    const response = yield call(getUserByEmail, data.email);
  } catch (error) {
    console.log('error : ', error);
  }
}

function* signInUser(action: SignInAction) {
  try {
    const { username, password } = action;
    console.log('signInUser username', username)
    console.log('signInUser password', password)
    const response = yield call(signIn, { username, password });

    if (response && response.challengeParam && response.challengeParam.userAttributes) {
      const {
        address,
        email,
        email_verified,
        family_name,
        given_name,
        middle_name,
        gender,
        locale,
        phone_number,
        preferred_username
      } = response.challengeParam.userAttributes;

      yield put(setCurrentUser({
        address,
        email,
        email_verified,
        family_name,
        given_name,
        middle_name,
        gender,
        locale,
        phone_number,
        preferred_username
      }))
    }

    console.log('Response', response)
  } catch (error) {
    console.log('error : ', error);
  }
}

function* updateUserDetails(action) {
  try {

  } catch (error) {
    console.log('error : ', error);
  }
}

export default function* userSaga() {
  yield all([
    takeEvery(Constants.REQUEST_CURRENT_USER, getUserRequest),
    takeEvery(Constants.REQUEST_SIGN_IN, signInUser),
    takeEvery(Constants.REQUEST_UPDATE_USER, updateUserDetails)
  ]);
}
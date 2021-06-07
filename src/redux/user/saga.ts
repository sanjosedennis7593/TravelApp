import { all, call, put, takeEvery } from 'redux-saga/effects';
import Constants from './constants';

import { signIn } from '@app/services/auth';

import { setCurrentUser } from '@app/redux/user/action';

type SignInAction = {
  username: string,
  password: string,
  type: string
}

function* getUserRequest() {
  try {

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

export default function* userSaga() {
  yield all([
    takeEvery(Constants.REQUEST_CURRENT_USER, getUserRequest),
    takeEvery(Constants.REQUEST_SIGN_IN, signInUser)
  ]);
}
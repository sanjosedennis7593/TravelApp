import { all, takeEvery } from 'redux-saga/effects';
import Constants from './constants';

function* getUserRequest() {
  try {

  } catch (error) {
    console.log('error : ', error);
  }
}

export default function* userSaga() {
  yield all([takeEvery(Constants.REQUEST_CURRENT_USER, getUserRequest)]);
}
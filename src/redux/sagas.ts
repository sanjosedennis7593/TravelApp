import { all } from 'redux-saga/effects';
import userSaga from './user/saga';

export default function* rootSaga(getState: any) {
    yield all([
        userSaga()
    ]);
}
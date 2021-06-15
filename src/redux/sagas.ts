import { all } from 'redux-saga/effects';

import eventSaga from './event/saga';
import userSaga from './user/saga';

export default function* rootSaga(getState: any) {
    yield all([
        eventSaga(),
        userSaga()
    ]);
}
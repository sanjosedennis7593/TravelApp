import { all, call, put, takeLatest } from 'redux-saga/effects';
import Constants from './constants';

// REDUX
import {  requestCreateUpdateEventSuccess, requestCreateUpdateEventFailed, setEventsList } from './action';

// SERVICES
import { createUpdateEvent, getEvents } from '@app/services/event';


function* getAllEvents(action) {
  try {
    const response = yield call(getEvents);
    if(response && response.allEvents && response.allEvents.data) {
        yield put(setEventsList(response.allEvents.data));
    }

  } catch (error) {
    console.log('error : ', error);
  }
}

function* addUpdateEvent(action) {
  try {
    const response = yield call(createUpdateEvent, action.data);
    console.log('Add Update Event Response', response)
    if(response?.createEvents) {
      yield put(requestCreateUpdateEventSuccess());
    }
    else{
      yield put(requestCreateUpdateEventFailed());
    }

  } catch (error) {
    console.log('error : ', error);
    yield put(requestCreateUpdateEventFailed());
  }
}



export default function* eventSaga() {
  yield all([
    takeLatest(Constants.REQUEST_EVENTS, getAllEvents),
    takeLatest(Constants.REQUEST_CREATE_UPDATE_EVENT,addUpdateEvent)
  ]);
}
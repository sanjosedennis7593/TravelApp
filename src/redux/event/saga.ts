import { all, call, put, takeLatest } from 'redux-saga/effects';
import Constants from './constants';

// REDUX
import {  requestCreateUpdateEventSuccess, requestCreateUpdateEventFailed, setEventsList, setEventsListByUser } from './action';

// SERVICES
import { createEvent, getEvents, getEventByUser, joinEvent } from '@app/services/event';


function* getAllEvents(action) {
  try {
    const response = yield call(getEvents);
    if(response && response.allEvents && response.allEvents.data) {
        yield put(setEventsList(response.allEvents.data));
    }

  } catch (error) {
    console.log('error : ', error);
    yield put(setEventsList([]));
  }
}

function* getAllEventByUser(action) {
  try {
    const { userId } = action;
    const response = yield call(getEventByUser, userId);
    if(response && response.eventByUser && response.eventByUser.data) {
      yield put(setEventsListByUser(response.eventByUser.data));
    }
   
  } catch (error) {
    console.log('error : ', error);
    yield put(setEventsListByUser([]));
  }
}

function* addUpdateEvent(action) {
  try {
    const response = yield call(createEvent, action.data);
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


function* joinUserEvent(action) {
  try {
    const { user_id, event_id } = action.data;

    const response = yield call(joinEvent, event_id, user_id);
    
  } catch (error) {

  }
}

function* getSpecificEventById<T>(action:T) {
  try {
    const { id } = action;
    
  } catch (error) {

  }
}






export default function* eventSaga() {
  yield all([
    takeLatest(Constants.REQUEST_EVENTS, getAllEvents),
    takeLatest(Constants.REQUEST_CREATE_UPDATE_EVENT, addUpdateEvent),
    takeLatest(Constants.REQUEST_EVENT_BY_USER, getAllEventByUser),
    takeLatest(Constants.REQUEST_JOIN_EVENT, joinUserEvent),
    takeLatest(Constants.REQUEST_EVENT_ID, getSpecificEventById)
  ]);
}
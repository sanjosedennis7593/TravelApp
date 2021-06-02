/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import createSagaMiddleware from 'redux-saga';

import rootReducer from '@app/redux/reducers'
import rootSaga from '@app/redux/sagas';

import App from '@app/App';
import { name as appName } from './app.json';


const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['user']
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    compose(applyMiddleware(...middlewares))
);

export const persistor = persistStore(
    store
);

sagaMiddleware.run(rootSaga);

const TravelApp = () => (<Provider store={store}>
    <PersistGate persistor={persistor}>
        <App />
    </PersistGate>
</Provider>)

AppRegistry.registerComponent(appName, () => TravelApp);

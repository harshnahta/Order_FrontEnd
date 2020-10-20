import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './style.scss';

import {Provider} from 'react-redux'; 
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react';
import { createStore,applyMiddleware } from 'redux'
import combineReducers from './reducer/index';
import thunk from 'redux-thunk';


const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, combineReducers);
const store = createStore(persistedReducer,applyMiddleware(thunk));
const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>                
    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

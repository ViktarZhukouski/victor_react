import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import dataReducer from "./reducers/dataEnter";
import { rootSaga } from "./sagas/index";

const saga = createSagaMiddleware();

const rootReducer = combineReducers({
  dataReducer,
});

const store = createStore(rootReducer, applyMiddleware(saga));

saga.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

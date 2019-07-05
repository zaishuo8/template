import { createStore, combineReducers } from 'redux';
import counter from './reducers/home';

const store = createStore(combineReducers({ count: counter }));

export default store;

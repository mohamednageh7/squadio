import { combineReducers } from 'redux';
import filterReducer from './dataGraph/reducer'

export default combineReducers({
    filter:filterReducer
});
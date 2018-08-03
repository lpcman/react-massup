import { combineReducers } from 'redux'
import {enthusiasm} from './helloReducer';
import {enthusiasm as e} from './hiReducer';

export default combineReducers({
    hello: enthusiasm,
    hi: e
});

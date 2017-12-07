
import {combineReducers} from 'redux';

function red1(){
    return true;
}

function red2() {
    return true;
}

export default combineReducers({red1, red2});
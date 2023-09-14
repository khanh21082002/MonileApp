import {combineReducers} from 'redux';
import info from "./inforReducer";

const reducers = combineReducers({
    personalInfor: info
});

export default (state, action) => reducers(state, action);
    

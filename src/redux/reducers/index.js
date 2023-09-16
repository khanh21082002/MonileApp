import {combineReducers} from 'redux';
import info from "./inforReducer";
import infoStudent from "./infoStudent"

const reducers = combineReducers({
    personalInfor: info,
    studentInfor:infoStudent
});

export default (state, action) => reducers(state, action);
    

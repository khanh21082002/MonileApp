import {combineReducers} from 'redux';
import info from "./inforReducer";
import infoStudent from "./infoStudent"

const reducers = combineReducers({    
    studentInfor:infoStudent
});

export default (state, action) => reducers(state, action);
    

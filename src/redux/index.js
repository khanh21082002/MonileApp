import { combineReducers } from "redux";
import infoAccount from "./account/reducers/infoAccount";
import infoStudent from "./reducers/infoStudent"

const reducers = combineReducers({
    accountInfo: infoAccount,
    studentInfor: infoStudent
})

export default (state, action) => reducers(state, action);
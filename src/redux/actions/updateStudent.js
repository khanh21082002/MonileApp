import { UPDATE_STUDENT } from "../reducers/infoStudent";
import { SELECT_STUDENT } from "../reducers/infoStudent";

export const updateStudent =(student) =>async dispatch =>{
    try {
        dispatch({
            type: UPDATE_STUDENT,
            student: student
        })
    } catch (error) {
        
    }
}

export const selectedStudent =(student) =>async dispatch =>{
    try {
        dispatch({
            type: SELECT_STUDENT,
            student: student
        })
    } catch (error) {
        
    }
}
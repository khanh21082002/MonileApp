import { UPDATE_STUDENT } from "../reducers/infoStudent";

export const updateStudent =(student) =>async dispatch =>{

    try {
        dispatch({
            type: UPDATE_STUDENT,
            student: student
        })
    } catch (error) {
        
    }
}

export const UPADATE_USER ="UPADATE_USER";
export const UPADATE_PASSWORD ="UPADATE_PASSWORD";


const initialState = {
    user:"",
    password:"",
    address:"",
    student:"Long",
}

export default function actionReducer(state = initialState, payload) {
    switch (payload.type) {
        case "UPADATE_USER":
            return {
                ...state,
                user: payload.user,                
            }
            case "UPADATE_PASSWORD":
                return {
                    ...state,
                    password: payload.password,                
                }
            default:
                return state    
    }

}
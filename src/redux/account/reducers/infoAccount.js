export const UPDATE_ACCOUNT = "UPDATE_ACCOUNT";

const initialState = {
    user: "Nguyễn Văn Long",
    address: "Hà Nội",
    student: "Long",
}

export default function actionAccountReducer(state = initialState, payload) {
    switch (payload.type) {
        case UPDATE_ACCOUNT:
            return {
                ...state,
                user: payload.user,
                address: payload.address,
                student: payload.student,
            }
        default:
            return state
    }
}
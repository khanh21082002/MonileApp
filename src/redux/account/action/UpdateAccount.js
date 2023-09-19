import { UPDATE_ACCOUNT } from "../reducers/infoAccount";

export const updateAccount = (user, address, student) => async dispatch => {

    try {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            },2000)
        });
        console.log("bắt đầu cập nhật")
         dispatch({           
            type: UPDATE_ACCOUNT,
            user: user,
            address: address,
            student: student,
            
        })
        console.log("kết thúc cập nhật")

    }
    catch (error) {
        console.error("Lỗi trong quá trình cập nhật:", error);
    }
}
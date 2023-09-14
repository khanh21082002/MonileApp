import {UPADATE_PASSWORD, UPADATE_USER} from "../reducers/inforReducer";

export const updateUser = (user) => async dispatch => {
    try{
        // gọi lên server hoặc làm gì đó bất đồng bộ (middleware)
    
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            },3000)
        });

        console.log("Đã làm gì đó")
        // cập nhật thông tin info trong store
        dispatch({
            type: UPADATE_USER,
            user: user
        })
    }catch(error){
        
    }
}

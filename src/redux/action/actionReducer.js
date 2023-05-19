import ActionType from "./actionType";
import apiMethod from "../../component/api/apiMethod";

export const getAll  = () => async (dispatch) => {
    try {
        // console.log('hahah')
        const res= await apiMethod.findAll()
        // console.log(res.data)
        dispatch({
            type: ActionType.GET_USER,
            payload: res.data
        }) 
    } catch (error) {
        alert(error)
    }
}

export const updateUser = (data) => async(dispatch) => {
    try {
        const res = await apiMethod.updateUserandCust(data)
        // console.log(res)
        dispatch({
            type: ActionType.UPDATE_USER,
            payload: res.data
        })
    } catch (error) {
        alert(error)
    }
}

export const deleteUser = (data) => async(dispatch) => {
    try {
        const res = await apiMethod.deleteUserandCust(data)
        dispatch({
            type: ActionType.DEL_USER,
            payload: res.data
        })
    } catch (error) {
        
    }    
}
import { Dispatch } from "redux"
import { UserActionTypes } from "../../types/user"

export const fetchUsers = () => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
        } catch (e) {
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: "Error during users loading"})
        }
    }
}
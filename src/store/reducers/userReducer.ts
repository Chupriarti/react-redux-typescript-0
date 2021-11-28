export enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS",
    FETCH_USERS_ERROR = "FETCH_USERS"
}

interface IUserState {
    users: any[];
    loading: boolean;
    error: any | string;
}

interface IFetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}

interface IFetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}

interface IFetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

interface IUserAction {
    type: string;
    payload?: any;
}

const initialStte: IUserState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state = initialStte, action: IUserAction): IUserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {loading: true, error: null, users: [] }
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload }
        case UserActionTypes.FETCH_USERS_ERROR:
            return {loading: false, error: null, users: [] }
        default:
            return state;
    }
}
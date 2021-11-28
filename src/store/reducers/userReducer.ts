export enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
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

type UserAction = IFetchUsersAction | IFetchUsersSuccessAction | IFetchUsersErrorAction;

const initialStte: IUserState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state = initialStte, action: UserAction): IUserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {loading: true, error: null, users: [] }
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload }
        case UserActionTypes.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users: [] }
        default:
            return state;
    }
}
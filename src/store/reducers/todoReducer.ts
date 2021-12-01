import { ITodoState, TodoAction } from "../action-creators/todo";

const initialState: ITodoState = {
    todos: [],
    page: 1,
    error: null,
    limit: 10,
    loading: false
}

export const todoReducer = (state: ITodoState = initialState, action: TodoAction): ITodoState => {
    switch (action.type){
        default:
            return state;
    }
}
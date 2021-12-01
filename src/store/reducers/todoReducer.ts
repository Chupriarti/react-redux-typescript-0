import { ITodoState, TodoAction } from "../action-creators/todo";

export const todoReducer = (state: ITodoState, action: TodoAction): ITodoState => {
    switch (action){
        default:
            return state;
    }
}
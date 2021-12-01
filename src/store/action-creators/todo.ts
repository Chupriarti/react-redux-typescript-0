export interface ITodoState {
    todos: [];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum TodoActionTypes {
    FETCH_TODOS = "FETCH_TODOS", 
    FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS", 
    FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR", 
    SET_TODO_PAGE = "SET_TODO_PAGE"
}



interface IFetchTodoAction {
    type: TodoActionTypes.FETCH_TODOS;
}

interface IFetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODOS;
    payload: any[];
}

interface IFetchTodoErrorAction {
    type: TodoActionTypes.FETCH_TODOS;
    payload: string;
}

interface ISetTodoPageAction {
    type: TodoActionTypes.FETCH_TODOS;
    payload: number;
}

export type TodoAction = IFetchTodoAction 
    | IFetchTodoSuccessAction
    | IFetchTodoErrorAction
    | ISetTodoPageAction
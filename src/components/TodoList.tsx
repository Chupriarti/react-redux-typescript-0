import React from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const UserList: React.FC = () => {
    const {todos, error, loading, page, limit} = useTypedSelector(state => state.todo);
    const {fetchTodos} = useActions();

    React.useEffect(() => {
        fetchTodos(page, limit);
    }, []);

    if (loading) {
        return <h1>Loading</h1>
    }

    if (error){
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map (todo => 
                <div key={todo.id}>{todo.id} - {todo.title}</div>
            )}
        </div>
    )
}

export default UserList;
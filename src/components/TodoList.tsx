import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';

const UserList: React.FC = () => {
    const {todos, error, loading, page, limit} = useTypedSelector(state => state.todo);

    if (loading) {
        return <h1>Loading</h1>
    }

    if (error){
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map (todo => 
                <div key={todo.id}>{todo.id} - {todo.name}</div>
            )}
        </div>
    )
}

export default UserList;
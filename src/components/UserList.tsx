import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/action-creators/user';

const UserList: React.FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.user);
    const dispatch  = useDispatch();

    React.useEffect(() => {
        dispatch(fetchUsers);
    }, []);

    

    return (
        <div>

        </div>
    )
}

export default UserList;
import { useEffect, useState } from 'react';
import { apiCall } from '../api/api';
import UserDetail from './UserDetail';

export default function UserList() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const data = await apiCall('/users');
        if (Array.isArray(data)) {
            setUsers(data);
        } else {
            setUsers([]);
            console.error("Expected array, got:", data);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        await apiCall(`/users/${id}`, 'DELETE');
        fetchUsers();
    };

    return (
        <div className="user-list">
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <UserDetail key={user._id} user={user} onDelete={handleDelete} onUpdate={fetchUsers} />
                ))}
            </ul>
        </div>
    );
}
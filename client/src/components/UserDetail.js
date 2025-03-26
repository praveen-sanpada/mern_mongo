import { useState } from 'react';
import { apiCall } from '../api/api';

export default function UserDetail({ user, onDelete, onUpdate }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({ name: user.name, email: user.email, age: user.age });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpdate = async () => {
        await apiCall(`/users/${user._id}`, 'PUT', editData);
        setIsEditing(false);
        onUpdate();
    };

    return (
        <li className="user-card">
            {isEditing ? (
                <div className="edit-section">
                    <input name="name" value={editData.name} onChange={handleChange} />
                    <input name="email" value={editData.email} onChange={handleChange} />
                    <input name="age" value={editData.age} onChange={handleChange} type="number" />
                    <div className="btn-group">
                        <button onClick={handleUpdate}>Save</button>
                        <button onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                </div>
            ) : (
                <div>
                    <p><strong>{user.name}</strong> ({user.age})</p>
                    <p>{user.email}</p>
                    <div className="btn-group">
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                        <button onClick={() => onDelete(user._id)}>Delete</button>
                    </div>
                </div>
            )}
        </li>
    );
}

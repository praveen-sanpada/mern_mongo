import { useState } from 'react';
import { apiCall } from '../api/api';

export default function UserForm({ onUserCreated }) {
    const [formData, setFormData] = useState({ name: '', email: '', age: '' });
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await apiCall('/users', 'POST', formData);
        setResponse(res);
        onUserCreated();
        setFormData({ name: '', email: '', age: '' });
    };

    return (
        <div className="form-container">
            <h2>Create User</h2>
            <form onSubmit={handleSubmit} className="form">
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
                <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" type="number" />
                <button type="submit">Submit</button>
            </form>
            {response && <pre className="response-box">{JSON.stringify(response, null, 2)}</pre>}
        </div>
    );
}
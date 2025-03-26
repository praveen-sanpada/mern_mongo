import { useState } from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

export default function Home() {
    const [refreshKey, setRefreshKey] = useState(0);
    const handleUserCreated = () => setRefreshKey((prev) => prev + 1);

    return (
        <div className="home-container">
            <UserForm onUserCreated={handleUserCreated} />
            <UserList key={refreshKey} />
        </div>
    );
}
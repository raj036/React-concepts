import React, { useEffect, useState } from 'react'
import axios from 'axios';

const TaskTwo = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
                console.log(response.data);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch users');
                setLoading(false);
            }
        };
        fetchUsers();
    }, [])

    if (loading) {
        return <p>Loading data</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default TaskTwo
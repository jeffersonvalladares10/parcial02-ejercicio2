import React, { useEffect, useState } from 'react';
import './UserList.css';


const UserList = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await fetch('http://localhost:5000/api/users');
        const data = await response.json();
        setUsers(data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <h2>Usuarios Registrados en la aplicación</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {user.name}, {user.age} años, {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;

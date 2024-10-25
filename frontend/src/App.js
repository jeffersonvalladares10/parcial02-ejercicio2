import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './App.css';

const App = () => {
    const [userAdded, setUserAdded] = useState(false);

    return (
        <>
            <nav>
                <Link to="/">Registrar Usuario</Link>
                <Link to="/users">Usuarios Registrados</Link>
            </nav>
            <Routes>
                <Route path="/" element={<UserForm onUserAdded={() => setUserAdded(true)} />} />
                <Route path="/users" element={<UserList />} />
            </Routes>
        </>
    );
};

export default App;



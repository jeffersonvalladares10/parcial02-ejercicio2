const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let users = [];

// Endpoint para obtener los usuarios
app.get('/api/users', (req, res) => {
    res.json(users);
});

// Endpoint para registrar un nuevo usuario
app.post('/api/users', (req, res) => {
    const { name, age, email } = req.body;
    const newUser = { name, age, email };
    users.push(newUser);
    res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

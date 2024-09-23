const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

// Crear un nuevo registro
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    console.log('Received request body:', req.body);
    try {
        const newRegistration = new Registration({ name, email, password });
        await newRegistration.save();
        res.status(201).json(newRegistration);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Iniciar sesión
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log('Received login request:', req.body);
    try {
        const user = await Registration.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Credenciales incorrectas.' });
        }

        // Comparar contraseñas (sin hashing)
        if (user.password !== password) {
            return res.status(400).json({ message: 'Credenciales incorrectas.' });
        }

        // Si las credenciales son válidas, devolver datos del usuario (puedes incluir un token si es necesario)
        res.json({ message: 'Inicio de sesión exitoso', user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Obtener todos los registros
router.get('/', async (req, res) => {
    try {
        const registrations = await Registration.find();
        res.json(registrations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Obtener un registro por ID
router.get('/id/:id', async (req, res) => {
    try {
        const registration = await Registration.findById(req.params.id);
        if (!registration) return res.status(404).json({ message: 'Not found' });
        res.json(registration);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Actualizar un registro
router.put('/id/:id', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const updatedRegistration = await Registration.findByIdAndUpdate(
            req.params.id,
            { name, email, password },
            { new: true }
        );
        if (!updatedRegistration) return res.status(404).json({ message: 'Not Found' });
        res.json(updatedRegistration);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Eliminar un registro por ID
router.delete('/id/:id', async (req, res) => {
    try {
        const deletedRegistration = await Registration.findByIdAndDelete(req.params.id); 
        if (!deletedRegistration) return res.status(404).json({ message: 'Not found' });
        res.json({ message: 'Deleted Successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

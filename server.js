const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/library', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB conectado localmente'))
  .catch(err => console.log(err));


// Middleware
app.use(cors());
app.use(express.json());

// Modelo del usuario
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Ruta para registrar un nuevo usuario (sin encriptar contraseñas)
app.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('El usuario ya existe');
        }

        // Crear el nuevo usuario
        const newUser = new User({ email, password });
        await newUser.save();
        res.status(200).send('Usuario creado correctamente');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error en el servidor');
    }
});

// Ruta para iniciar sesión (sin encriptar contraseñas)
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Buscar el usuario en la base de datos
        const user = await User.findOne({ email });

        // Verificar si el usuario existe y la contraseña es correcta
        if (!user || user.password !== password) {
            return res.status(400).send('Credenciales incorrectas');
        }

        // Si el login es correcto
        res.status(200).send('Inicio de sesión correcto');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error en el servidor');
    }
});

// Servidor corriendo
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

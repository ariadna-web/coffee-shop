// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const opinionesRoutes = require('./routes/opinionesRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Servir archivos estáticos de la carpeta front
app.use(express.static(path.join(__dirname, 'front')));

// Ruta principal: abre directamente tu coffee.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'front', 'coffee.html'));
});

// API de opiniones
app.use('/api/opiniones', opinionesRoutes);

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error en la conexión a MongoDB', err));

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));
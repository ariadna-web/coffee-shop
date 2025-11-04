// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const opinionesRoutes = require('./back/routes/opinionesRoutes'); // Ajustá si tu ruta es diferente

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Servir archivos estáticos de la carpeta 'front'
app.use(express.static(path.join(__dirname, 'back', 'front')));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'back', 'front', 'coffee.html'));
});

// API de opiniones
app.use('/api/opiniones', opinionesRoutes);

// Conexión a MongoDB
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
    console.error('❌ ERROR: No se encontró MONGO_URI en las variables de entorno.');
    process.exit(1); // Sale del proceso
}

mongoose.connect(mongoURI)
    .then(() => console.log('✅ Conectado a MongoDB'))
    .catch(err => console.error('❌ Error en la conexión a MongoDB:', err));

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(` Servidor escuchando en puerto ${PORT}`));
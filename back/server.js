const express= require('express');
const mongoose= require('mongoose');
const cors = require('cors');
require('dotenv').config();

const opinionesRoutes= require('./routes/opinionesRoutes');

const app= express();
app.use(cors());
app.use(express.json());

app.use('/api/opiniones', opinionesRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => console.log('conectado a mongoDB')).catch((err)=> console.error('error en la coneccion de mongoDB',err));

const PORT= process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`servidor escuchando en ${PORT}`));
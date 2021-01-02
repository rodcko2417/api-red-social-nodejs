const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config');
const router = require('./network');

const app = express();

// RUTAS
app.use('/', router);

app.listen(config.cacheService.port, () => {
    console.log('Servicio de cache redis escuchando en el puerto', config.cacheService.port)
})
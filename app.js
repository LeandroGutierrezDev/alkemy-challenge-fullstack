const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const methodOverride = require('method-override');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));


app.listen( PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));





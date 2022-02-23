const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors');
const methodOverride = require('method-override');

require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(methodOverride('_method'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

//Aquí llamo a la ruta de las api de movies
const operationsRouter = require('./src/routes/operationsRouter')
const userRouter = require('./src/routes/userRouter')
//app.use(operationsRouter);

app.use('/api/operations', operationsRouter);
app.use('/api/users', userRouter);



app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));


//Ruta ultimos 10 registros
//Ruta obtener todos los productos
//Ruta crear
//Ruta modificar
//Ruta borrar
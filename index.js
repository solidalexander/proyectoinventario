const express = require ('express');
const { getConnection } = require ('./bd/db-conection-mongo');
const cors = require('cors');

const app = express();
const port = 3000;


getConnection();


app.use(express.json());

app.use('/usuario', require('./router/usuario'));
app.use('/estado-Equipo', require('./router/estadoEquipo'));
app.use('/marca', require('./router/marca'));
app.use('/tipo-Equipo', require('./router/tipoEquipo'));
app.use('/inventario', require('./router/inventario'));

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)

});
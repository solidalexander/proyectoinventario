const express = require ('express');
const { getConnection } = require ('./bd/db-conection-mongo');
const cors = require('cors');

const app = express ();
const port = 3000;

//implementacion cors
app.use(cors());

getConnection ();

app.use(express.json());

app.use('/usuario', require('./router/usuario'));
app.use('/estado-equipo', require('./router/estadoequipo'));
app.use('/marca', require('./router/marca'));
app.use('/tipo-equipo', require('./router/tipoequipo'));
app.use('/inventario', require('./router/inventario'));


app.listen(port, () => {
    console.log(`example app listening on port ${port}`)

});
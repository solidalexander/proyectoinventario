const express = require ('express');
const { getConnection } = require ('./bd/db-conection-mongo');
getConnection ();

const app = express ();
const port = 3000;

getConnection ();

app.use(express.json());

app.use('/usuario', require('./router/usuario'));
app.use('/estadoequipo', require('./router/estadoequipo'));
app.use('/marca', require('./router/marca'));
app.use('/tipoequipo', require('./router/tipoEquipo'));
app.use('/inventario', require('./router/inventario'));


app.listen(port, () => {
    console.log(`example app listening on port ${port}`)

});
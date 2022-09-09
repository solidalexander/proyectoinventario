const{ Router } = require('express');
const router = Router ();
const Inventario = require ('../modelo/Inventario');

router.get('/', async  function(req, res){
    try {
          const inventarios = await Inventario.find().populate([
             {
                 path: 'usuario'
             },
             {
                 path: 'marca'
             },
             {
                 path: 'tipoequipo'
             },
             {
                 path: 'estadoequipo'
             }
 
          ]);
          res.send(inventarios);
 
    }catch(error) {
     console.log(error);
     res.send('Ocurrio un error al consultar inventarios')
    }
 });
 
 router.post('/', async function(req, res){
     try {
 
         const existeInventarioporserial = await Inventario.findOne({serial: req.body.serial });
         if(existeInventarioporserial) {
             return res.send('Ya existe el serial para otro Dispositivo');
 
         }
 
         let inventario = new Inventario();
         inventario.serial = req.body.serial;
         inventario.modelo = req.body.modelo;
         inventario.descripcion = req.body.descripcion;
         inventario.foto = req.body.foto;
         inventario.color = req.body.color;
         inventario.fehaCompra = req.body.fechaCompra;
         inventario.precio = req.body.preecio;
         inventario.usuario = req.body.usuario._id;
         inventario.marca = req.body.marca._id;
         inventario.tipoEquipo = req.body.tipoEquipo._id;
         inventario.estadoEquipo = req.body.estadoEquipo._id;
         inventario.fechaCreacion = new Date();
         inventario.fechaActualizacion = new Date();
 
         inventario = await inventario.save();
         
         res.send(inventario);
 
   }catch(error) {
    console.log(error);
    res.send('Ocurrio un error al consultar los inventarios')
   }
 
 });
 
 router.put('/', function(req, res){
     res.send('estoy inventario put');
 
 });

module.exports = router;
const{ Router } = require('express');

const Inventario = require ('../modelo/Inventario');
const { validarInventario } = require ('../Helpers/validarinventario')

const router = Router ();

router.get('/', async  function(req, res){
    try {
          const inventarios = await Inventario.find().populate([
             {
                 path: 'usuario', select: 'nombre email estado'
             },
             {
                 path: 'marca',select: 'nombre  estado'
             },
             {
                 path: 'tipoequipo' ,select: 'nombre  estado'
             },
             {
                 path: 'estadoequipo',select: 'nombre  estado'
             }
 
          ]);
          res.send(inventarios);
 
    }catch(error) {
     console.log(error);
     res.status(500).send('Ocurrio un error al consultar inventarios');
    }
 });
 
 router.post('/', async function(req, res){
     try {

        const validaciones = validarInventario (req);
        if(validaciones.length>0){
            return res.status(400).send(validaciones)
        }
 
         const existeInventarioporserial = await Inventario.findOne({serial: req.body.serial });
         if(existeInventarioporserial) {
             return res.status (400).send('Ya existe el serial para otro Dispositivo') ;
 
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
    res.send.status(500)('Ocurrio un error al consultar los inventarios');
   }
 
 });
 
 router.put('/InventarioId', async function(req, res){
    try {
 
        let inventario = await inventario.findById (req.params.inventarioId)
        if (!inventario) { return res.send ('inventario no existe'). status (400);
    }


        const existeInventarioPorSerial = await Inventario
                          .findOne({serial: req.body.serial,_id: {$ne: inventario._id }});
        if(existeInventarioPorSerial) {
            return res.send('Ya existe el serial para otro Dispositivo'). status (400);

        }

        
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
        inventario.fechaActualizacion = new Date();

        inventario = await inventario.save();
        
        res.send(inventario);
    }
    catch(error) {
        console.log(error);
        res.send('Ocurrio un error al consultar los inventarios'). status (500);
       }

 });

module.exports = router;
const { Router} = require('express');

const router = Router();
const EstadoEquipo = require ('../modelo/EstadoEquipo');


router.get('/', async function(req, res){
    try{
        const tipos = await EstadoEquipo.find();
        res.send(tipos)
      
        
    } catch(error){
        console.log(error);
        res.send('Ocurrio un error');
    }
});

router.post('/', async function(req, res){
    try{
        let estadoEquipo = new EstadoEquipo();
    
        estadoequipo.nombre = req.body.nombre;
        estadoequipo.estado = req.body.estado;
        estadoequipo.fechaCreacion = new Date();
        estadoequipo.fechaActualizacion = new Date();
        estadoequipo = await estadoequipo.save();
        res.send(estadoEquipo);

    }catch(error){
        console.log(error);
        res.send('Ocurrio un error');
    }
   

});

router.put('/:estadoEquipoId', async function(req, res){
    try{
        let estadoequipo = await EstadoEquipo.findById(req.params.estadoEquipoId);
        if(!estadoequipo) {
            return res.send('No existe estado');
        }
    
        estadoequipo.nombre = req.body.nombre;
        estadoequipo.estado = req.body.estado;
        estadoequipo.fechaActualizacion = new Date();
        estadoequipo = await estadoEquipo.save();
        res.send(estadoEquipo);

    }catch(error){
        console.log(error);
        res.send('Ocurrio un error');
    }
   
});

module.exports = router;
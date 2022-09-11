const{ Router } = require('express');
const router = Router ();
const TipoEquipo = require ('../modelo/TipoEquipo');

router.get('/', async function(req, res){
    try {
        const tipos = await TipoEquipo.find();
        res.send(tipos);

    }catch (error){
        console.log(error);
        res.send('Ocurrio un error');
    }
    
});

router.post('/', async function(req, res){
    try{
        let tipoEquipo = new TipoEquipo();
    
        tipoequipo.nombre = req.body.nombre;
        tipoequipo.estado = req.body.estado;
        tipoequipo.fechaCreacion = new Date();
        tipoequipo.fechaActualizacion = new Date();
        tipoequipo = await tipoEquipo.save();
        res.send(tipoEquipo);

    }catch(error){
        console.log(error);
        res.send('Ocurrio un error');
    }

});

router.put('/:tipoequipoId', async function(req, res){
    try{
        let tipoequipo = await Tipoequipo.findById(req.params.tipoequipoId);
    
        tipoequipo.nombre = req.body.nombre;
        tipoequipo.estado = req.body.estado;
        tipoequipo.fechaActualizacion = new Date();
        tipoequipo = await tipoequipo.save();
        res.send(tipoequipo);

    }catch(error){
        console.log(error);
        res.send('Ocurrio un error');
    }
});
module.exports = router;
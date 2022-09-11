const { model, Schema} = require ('mongoose');

const InventarioSchema = Schema ({

    serial: {
        type: String,
        requerid : true,
        unique: true,
    },
    modelo: {
        type: String,
        requerid : true,
    },
    descripcion: {
        type: String,
        requerid : true,
    },
    Color: {
        type: String,
        requerid : true,
    },
    fotoEquipo: {
        type: String,
        requerid : true,
    },
    
    fechaCompra: {
        type: String,
        requerid : true,
    },
    precio: {
        type: Number,
        requerid : true,
    },
    usuario: {
        type:Schema.Types.ObjectId,
        ref:'Usuario',
        requerid : false,
    },
    marca: {
        type: Schema.Types.ObjectId,
        ref:'Marca',
        requerid : true,
    },
    tipoequipo: {
        type: Schema.Types.ObjectId,
        ref:'TipoEquipo',
        requerid : true,
    },
    estadoequipo: {
        type: Schema.Types.ObjectId,
        ref:'EstadoEquipo',
        requerid : true,
    },
    fechaCreacion:{
        type: Date,
        required: true,
    },
    fechaActualizacion:{
        type: Date,
        required: true,

    }
    
})

module.exports=model ('Inventario',InventarioSchema);
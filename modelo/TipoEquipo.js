const {  model, Schema } = require("mongoose");

const TipoEquipoSchema = Schema ({
    nombre: {
        type: String,
        required: true,
        
    },

    estado:   {
        type: String,
        required: true,
         enum: [ 'activo', 'inactivo',
         ]

    },
    fechaCreacion: {
        type: Date,
        required: true,

    },
    fechaActualizacion: {
        type: Date,
        required: true,

    }
    

});

module.exports=model ('TipoEquipo',TipoEquipoSchema);
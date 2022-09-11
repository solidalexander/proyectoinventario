const {  Schema, model } = require("mongoose");

const MarcaSchema = Schema ({
    nombre: {
        type: String,
        required: true,
        
    },
   
    estado:   {
        type: String,
        required: true,
         enum: [ 'activo', 
         'inactivo',
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

module.exports=model ('Marca',MarcaSchema);
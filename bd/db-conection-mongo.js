const mongoose = require ('mongoose');
const getConnection = async () => {
    try{
   const url = 'mongodb://proyectoinventario:rV4aoPr25QIcVtuD@ac-y0m2n2q-shard-00-00.otbxi3m.mongodb.net:27017,ac-y0m2n2q-shard-00-01.otbxi3m.mongodb.net:27017,ac-y0m2n2q-shard-00-02.otbxi3m.mongodb.net:27017/inventarios?ssl=true&replicaSet=atlas-h62p4q-shard-0&authSource=admin&retryWrites=true&w=majority'
    await mongoose.connect (url);
    console.log('conexion exitosa');
} catch (error) {
    console.log(error);
}
}
module.exports = {
    getConnection,
}
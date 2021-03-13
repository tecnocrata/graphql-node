// Este modulo inicialmente es basico, pero idealmente tendria que ser un middleware
// Lo que no me agrada de esto es que cada funcion requiere un try/catch, eso no es bueno
function errorHandler (error) {
  console.error(error)
  throw new Error('Failed at server side')
}

module.exports = errorHandler

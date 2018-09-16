const sayHelloUseCase = require('../../application/use_cases/SayHello');

const sayHello = request => {
  console.log('HelloController - sayHello()')
  return sayHelloUseCase.execute(request.params.name || null)
}

module.exports = {
  sayHello
}
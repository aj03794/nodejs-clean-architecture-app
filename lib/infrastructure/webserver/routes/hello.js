'use strict';

const { sayHello } = require('../../../interfaces/controllers/HelloController')

module.exports = [
  {
    method: 'GET',
    path: '/hello',
    handler: (request) => sayHello(request)
  },
  {
    method: 'GET',
    path: '/hello/{name}',
    handler: (request) => sayHello(request)
  }
];
'use strict';

const UsersController = require('../../../interfaces/controllers/users-controller');

module.exports = [
  // {
  //   method: 'GET',
  //   path: '/users',
  //   handler: (request) => usersController.findUsers(request)
  // },
  {
    method: 'POST',
    path: '/users',
    handler: (request) => UsersController.createUser(request)
  },
  // {
  //   method: 'GET',
  //   path: '/users/{id}',
  //   handler: (request) => usersController.getUser(request)
  // },
  // {
  //   method: 'DELETE',
  //   path: '/users/{id}',
  //   handler: (request, h) => usersController.deleteUser(request, h)
  // },
];
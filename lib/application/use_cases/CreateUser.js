'use strict';

const User = require('../../domain/entities/User');

module.exports = class {

  constructor(userRepository) {
    this.userRepository = userRepository
  }

  execute(firstName, lastName, email, password) {
    const user = new User(null, firstName, lastName, email, password);
    console.log('CreateUser - execute', user)
    return this.userRepository.persist(user);
  }
};
// This class implements the abstract functions in applicaiton/repositories/UserRepository.js
const User = require('../../domain/entities/User');
const UserRepository = require('../../application/repositories/UserRepository');

const userRepositoryInMemory = () => {

  let index = void 0
  let data = void 0

  if (!data) {
    data = {}
  }
  if (!index) {
    index = 1
  }

  console.log('index', index)
  console.log('data', data)

  const initializeRepositoryWithTwoUsers = () => {
    const john = new User(null, 'John', 'Doe', 'john.doe@mail.com', 'ABCD1234');
    const jane = new User(null, 'Jane', 'Smith', 'jane.smith@mail.com', 'EFGH5678');
    persist(john).then(() => persist(jane))
  }

  const persist = (userEntity) => {
    const row = Object.assign({}, userEntity)
    const rowId = index++
    row.id = rowId
    data[rowId] = row
    return Promise.resolve(row)
  }

  initializeRepositoryWithTwoUsers()

  return {
    persist
  }

}

module.exports = {
  userRepositoryInMemory
}


// module.exports = class extends UserRepository {

//   _initializeRepositoryWithTwoUsers() {
//     const john = new User(null, 'John', 'Doe', 'john.doe@mail.com', 'ABCD1234');
//     const jane = new User(null, 'Jane', 'Smith', 'jane.smith@mail.com', 'EFGH5678');
//     this.persist(john).then(() => this.persist(jane));
//   }

//   _dataAsArray() {
//     return Object.keys(this.data).map(key => this.data[key]);
//   }

//   constructor() {
//     super();
//     this.index = 1;
//     this.data = {};
//     this._initializeRepositoryWithTwoUsers();
//   }



//   merge(userEntity) {
//     let row = this.data[userEntity.id];
//     Object.assign(row, userEntity);
//     return Promise.resolve(row);
//   }

//   remove(userId) {
//     delete this.data[userId];
//     return Promise.resolve();
//   }

//   get(userId) {
//     return Promise.resolve(this.data[userId]);
//   }

//   getByEmail(userEmail) {
//     const users = this._dataAsArray();
//     return Promise.resolve(users.find(user => user.email === userEmail));
//   }

//   find() {
//     return Promise.resolve(this._dataAsArray());
//   }

// };


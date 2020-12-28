import users from './users.js';

const getUserNames = users => {
  return users.map(user => user.name)
};

console.log(getUserNames(users));
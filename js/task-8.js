import users from './users.js';

const getUsersWithFriend = (users, friendName) => {
  return users.reduce((accumulator, currentValue) => {
    if (currentValue.friends.includes(friendName)) {
      accumulator.push(currentValue.name)
    }
    return accumulator
  }, [])
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
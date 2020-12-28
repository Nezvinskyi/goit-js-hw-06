import users from './users.js';

const getNamesSortedByFriendsCount = users => {
  let sortedArray = [];
  sortedArray = users.sort((a, b) => a.friends.length - b.friends.length)
  return sortedArray.reduce((sortedNames, user) => {
    sortedNames.push(user.name)
    return sortedNames
  },[])
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
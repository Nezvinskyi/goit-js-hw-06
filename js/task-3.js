import users from './users.js';

const getUsersWithGender = (users, gender) => {
  return users.reduce((accumulator, currentValue) => {
    if (currentValue.gender === gender) {
      accumulator.push(currentValue.name)
    }
    return accumulator
  },[])
}

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
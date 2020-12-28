import users from './users.js';

const calculateTotalBalance = users => {
  let totalBalance = 0;
  users.forEach(user => totalBalance += user.balance);
  return totalBalance
};

console.log(calculateTotalBalance(users)); // 20916
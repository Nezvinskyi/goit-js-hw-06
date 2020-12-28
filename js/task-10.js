import users from './users.js';

const getSortedUniqueSkills = users => {
  return users
    //flattens arrays user.skills into one array
    .reduce((allSkills, user) => {
      return allSkills.concat(user.skills)
    }, [])
    // removes duplicates
    .reduce((filteredSkills, skill) => {
      if (filteredSkills.indexOf(skill) === -1) {
       filteredSkills.push(skill)
      }
      return filteredSkills
    }, [])
    // sorts skills alphabetically
    .sort()
};



console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
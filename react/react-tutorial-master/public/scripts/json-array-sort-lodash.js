module.exports = function(){

  // Load the full build.
  var _ = require('lodash');

  var users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 36 }
  ];

  console.log("users-1", users);
  // Sort by `user` in ascending order and by `age` in descending order.
  _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
  console.log("users-2", users);
  // → objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]

  return{
  }

}

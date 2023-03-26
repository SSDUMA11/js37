let usersNames = ['Mike', 'Bob', 'Nikola'];
let users = {};

for (let userName of usersNames) {
  const [name] = [userName.toLowerCase()];
  users[name] = {name};
}

console.log(users);
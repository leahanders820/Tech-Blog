const { User } = require('../models'); // Just 'models' is sufficient

const userData = [
  {
    email: 'email1@email.com',
    name: 'user1',
    password: 'password1',
  },
  {
    email: 'email2@email.com',
    name: 'user2',
    password: 'password2',
  },
];


const seedUsers = async () => {
  await User.bulkCreate(userData);
};

module.exports = seedUsers;

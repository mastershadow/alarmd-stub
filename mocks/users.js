const faker = require('faker');

module.exports = {
  path: '/users/:userId',
  template: {
    id: params => Number(params.userId),
    name: () => faker.name.findName(),
    email: () => faker.internet.email(),
    mobile: () => faker.phone.phoneNumber(),
    telegram: () => faker.internet.userName()
  }
};
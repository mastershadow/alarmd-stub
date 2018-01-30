const faker = require('faker');
faker.seed(123);
faker.locale = "it";

module.exports = {
  path: '/status',
  template: {
  	enabled: () => faker.random.boolean(),
  	alarm: () => faker.random.boolean(),
  	automaticShutdown: () => faker.random.boolean(),
  	sensors: []
  }
};
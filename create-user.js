// console.log(require('dotenv').config());
require('dotenv').config();
const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: process.env.OKTA_URL,
  token: process.env.OKTA_TOKEN,
});

// create a user
const newUser = {
  profile: {
    firstName: 'Fooo',
    lastName: 'Bar',
    email: 'foo2@example.com',
    login: 'foo2@example.com',
  },
  credentials: {
    password: {
      value: '@PasswordAbc123',
    },
  },
};

client
  .createUser(newUser)
  .then(user => {
    console.log('Created user', user);
  })
  .catch(e => {
    console.log(e);
  });

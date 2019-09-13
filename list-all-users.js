require("dotenv").config();
const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: process.env.OKTA_URL,
  token: process.env.OKTA_TOKEN,
});

// SHOW ALL USERS
const orgUsersCollection = client.listUsers();

orgUsersCollection
  .each(user => {
    // log out each user object
    console.log(user);
  })
  .then(() => console.log('All users have been listed'));

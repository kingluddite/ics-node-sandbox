require('dotenv').config();
const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: process.env.OKTA_URL,
  token: process.env.OKTA_TOKEN,
});

// DELETE ALL USERS
const orgUsersCollection = client.listUsers();

orgUsersCollection
  .each(user => {
    // DELETE A USER
    user
      .deactivate()
      .then(() => console.log('User has been deactivated'))
      .then(() => user.delete())
      .then(() => console.log(user.profile.login))
      .then(() => console.log('User has been deleted'));
  })
  .then(() => console.log('All users have been listed'))
  .catch(e => {
    console.log(e);
  });

require('dotenv').config();
const okta = require('@okta/okta-sdk-nodejs');

const fs = require('fs');
const os = require('os');
const path = require('path');

// output file in the same folder
const filename = path.join(__dirname, 'output.csv');
const output = []; // holds all rows of data

const client = new okta.Client({
  orgUrl: process.env.OKTA_URL,
  token: process.env.OKTA_TOKEN,
});

const orgUsersCollection = client.listUsers();

orgUsersCollection
  .each(user => {
    // console.log(user);
    const data = [
      {
        id: user.id,
        firstName: user.profile.firstName,
        lastName: user.profile.lastName,
        email: user.profile.email,
        login: user.profile.login,
      },
    ];
    // console.log(data);
    // csv of users
    const header = ['firstName', 'lastName', 'email', 'login'];
    output.push(header);
    data.forEach(d => {
      const row = []; // a new array for each row of data
      row.push(d.firstName);
      row.push(d.lastName);
      row.push(d.email);
      row.push(d.login);

      // output.push(header);
      output.push(row.join()); // by default, join() uses a ','
    });
    //
    fs.writeFileSync(filename, output.join(os.EOL));
  })
  .then(() => console.log('All users have been listed'));

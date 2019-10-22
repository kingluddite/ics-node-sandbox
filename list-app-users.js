const http = require('https');

const options = {
  method: 'GET',
  hostname: 'https://dev-414986.oktapreview.com',
  path: ['api', 'v1', 'apps', '0oanml191aj5QlrCG0h7', 'users'],
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'SSWS 00MUPW4pIwnqeo0XrcZaWspu3aRZg7pJfflijo1BU2',
    'User-Agent': 'PostmanRuntime/7.17.1',
    'Cache-Control': 'no-cache',
    'Postman-Token':
      '28b21064-d840-47c4-a70c-ceeab5ae9888,9d85cca6-318d-46da-926b-f6264179ca35',
    Host: 'dev-414986.oktapreview.com',
    'Accept-Encoding': 'gzip, deflate',
    Cookie:
      'Okta_Verify_Autopush_-1827861670=false; JSESSIONID=81F98834AE2D64117A3A3CD550D1AB80',
    Connection: 'keep-alive',
    'cache-control': 'no-cache',
  },
};

const req = http.request(options, res => {
  const chunks = [];

  res.on('data', chunk => {
    chunks.push(chunk);
  });

  res.on('end', () => {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();

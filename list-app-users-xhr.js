const { XMLHttpRequest } = require('xmlhttprequest');

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function() {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open(
  'GET',
  'https://dev-414986.oktapreview.com/api/v1/apps/0oanml191aj5QlrCG0h7/users'
);
xhr.setRequestHeader('Accept', 'application/json');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader(
  'Authorization',
  'SSWS 00MUPW4pIwnqeo0XrcZaWspu3aRZg7pJfflijo1BU2'
);
xhr.setRequestHeader('User-Agent', 'PostmanRuntime/7.17.1');
xhr.setRequestHeader('Cache-Control', 'no-cache');
xhr.setRequestHeader(
  'Postman-Token',
  '28b21064-d840-47c4-a70c-ceeab5ae9888,af1a1734-685f-434e-b04f-b3eec510e1f7'
);
xhr.setRequestHeader('Host', 'dev-414986.oktapreview.com');
xhr.setRequestHeader('Accept-Encoding', 'gzip, deflate');
xhr.setRequestHeader(
  'Cookie',
  'Okta_Verify_Autopush_-1827861670=false; JSESSIONID=81F98834AE2D64117A3A3CD550D1AB80'
);
xhr.setRequestHeader('Connection', 'keep-alive');
xhr.setRequestHeader('cache-control', 'no-cache');

xhr.send(data);

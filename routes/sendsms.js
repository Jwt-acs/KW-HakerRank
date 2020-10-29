var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://api.melroselabs.com/sms/message',
  'headers': {
    'x-api-key': '[API_KEY]',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({"source":"MelroseLabs","destination":"447712345678","message":"Hello World #$£"})
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
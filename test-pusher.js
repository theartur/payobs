var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '146636',
  key: '25101aada7c82c054553',
  secret: '3066fd3b0626a3264e2f',
  encrypted: true
});
pusher.port = 443;

pusher.trigger('test_channel', 'my_event', {
  "message": "hello world"
});
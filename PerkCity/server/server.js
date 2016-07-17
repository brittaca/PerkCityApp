var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    jwt = require('jsonwebtoken'),
    config = require('./config/config');

var userCtrl = require('./controllers/userCtrl');

var port = 3037;

var app = express();
var http = require('http').Server(app);
    
app.use(bodyParser.json());
app.use(cors());
  
app.use(express.static(__dirname + '/../www'));

mongoose.connect(config.db);
var database = mongoose.connection;
database.on('error', console.error.bind(console, 'uh ohhhh: '));
database.once('open', function() {
  console.log("Up Up & Awayyy with " + config.db);
});

app.set('superSecret', config.secret);

var authorize = function(roles) {
  return function(req, res, next) {
    var authHeader = req.header('Authorization');
    if (authHeader) {
      var token = authHeader.split(' ').pop();
      jwt.verify(token, config.secretKey, function(err, payload) {
        if (err)
          res.status(401).send('Authorization Issue');
        else {
          if (roles.indexOf(payload.role) === -1) res.status(401).send('Unauthorized');
          else next();
        }
      });
    }
    else res.status(401).send('Unauthenticated');
  };
};

// BASIC ROUTE
app.get('/', function(req, res) {
  res.send('Hi! The API is at http://localhost:' + port + '/api');
})

// PROTECTED TEST ROUTE
app.get('/protected', authorize(['user']), function(req, res) {
  res.status(200).json('Auth worked!');
});

app.post('/register', userCtrl.register);
app.post('/newUser', userCtrl.createUser);
app.post('/login', userCtrl.login);
// app.post('/api/user', userCtrl.create);
app.get('/api/user', userCtrl.read);
app.put('/api/user/:id', userCtrl.update);
app.delete('/api/user/:id', userCtrl.delete);
app.get('/api/user/:id', userCtrl.currentUser);



http.listen(port, function() {
  console.log("listening on port ", port);
});
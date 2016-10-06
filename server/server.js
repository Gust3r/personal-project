var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var massive = require('massive');
var connectionString = 'postgres://postgres:localhost/thursday';
// might need to change the thursday

var app = module.exports = express();

var massiveInstance = massive.connectSync({connectionString: connectionString});

app.set('db', massiveInstance);

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('../public'));

var menuCtrl = require('./controllers/menuCtrl');

app.get('/api/menu', menuCtrl.getMenuItems);
app.post();
app.delete();
app.put();


var port = 9000;
app.listen(post, function(){
  console.log('It\'s working! It\'s working!');
});
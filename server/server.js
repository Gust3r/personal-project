var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var massive = require('massive');
var connectionString = 'postgres://postgres:@localhost/new_restaurant';


var app = module.exports = express();

var massiveInstance = massive.connectSync({connectionString: connectionString});

app.set('db', massiveInstance);

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('../public'));

var menuCtrl = require('./controllers/menuCtrl');

app.get('/api/menu', menuCtrl.getAllMenu);
app.post('/api/menu', menuCtrl.createMenuItem);
app.delete('/api/menu', menuCtrl.deleteMenuItem);
app.put('/api/menu', menuCtrl.updateMenuItem);


var port = 9000;
app.listen(port, function(){
  console.log('It\'s working! It\'s working!');
});

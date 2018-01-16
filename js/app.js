var express        = require( 'express' );
var http           = require( 'http' );
var app            = express();
var expressWs      = require('express-ws')(app);

var signalClients = [];


app.set( 'port', process.env.PORT || 3001 );

app.get('/', function(req, res, next){
  res.send('Hello World');  
});



function send(tgt, code, message) {
  if (tgt) {
      tgt.send(JSON.stringify({ code: code, msg: message}));
  }
}

function broadcast(room, from_ws, code, message) {
  room.forEach(function(tgt) {
      try {
          if (tgt != from_ws) {
              send(tgt, code, message);
          }
      } catch (e) {
          room.delete(tgt);
      }
  });
}


app.listen(app.get( 'port' ), function(){
  console.log( 'Express server listening on port ' + app.get( 'port' ));
});

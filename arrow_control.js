/*var sphero = require("sphero"),
    bb8 = sphero("/dev/tty.Sphero-PWR-AMP-SPP"); // change BLE address accordingly*/

var express = require('express')
var app = express()

app.listen(3000, function () {
  console.log('port 3000');
});

var direction = ""

app.get('/', function(req, res){
	res.sendfile('index.html')
})

app.get('/left', function (req, res) {
  res.send('left');
  console.log('left')
  direction = 'left'
});

app.get('/right', function (req, res) {
  res.send('right');
  console.log('right')
  direction = 'right'
});

app.get('/forward', function (req, res) {
  res.send('forward');
  console.log('forward')
  direction = 'forward'
});

app.get('/backward', function (req, res) {
  res.send('backward');
  console.log('backward')
  direction = 'backward'
});

app.get('/stop', function (req, res) {
  res.send('stop');
});


/*bb8.connect(function() {
  // roll BB-8 in a random direction, changing direction every second
  setInterval(function() {
  	if(direction === 'stop'){
  		console.log('stop')
  	} else if (direction == 'forward'){
  		console.log('forward')
  		direction = 'stop'
  		var angle = 180
    	bb8.roll(150, angle);
  	} else if (direction == 'backward'){
  		console.log('backward')
  		direction = 'stop'
  		var angle = 0
    	bb8.roll(150, angle);
  	} else if (direction == 'left') {
  		console.log('left')
  		direction = 'stop'
			var angle = 90
    	bb8.roll(150, angle);
  	} else if (direction == 'right') {
  		console.log('right')
  		direction = 'stop'
  		var angle = 270
    	bb8.roll(150, angle);
  	} else if (direction == 'kill'){
  		console.log('kill')
  		clearInterval()
  	}
  }, 500);
});*/
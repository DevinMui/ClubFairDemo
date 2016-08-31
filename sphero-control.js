var sphero = require("sphero"),
    bb8 = sphero("/dev/tty.Sphero-PWR-AMP-SPP"); // change BLE address accordingly

var express = require('express')

var app = express();

var direction = "stop"

app.get('/left', function (req, res) {
  res.send('left');
  direction = 'left'
});

app.get('/right', function (req, res) {
  res.send('right');
  direction = 'right'
});

app.get('/forward', function (req, res) {
  res.send('forward');
  direction = 'forward'
});

app.get('/backward', function (req, res) {
  res.send('backward');
  direction = 'backward'
});

app.get('/stop', function (req, res) {
  res.send('stop');
  direction = 'stop'
});

app.get('/kill', function(res, req){
	res.send('kill sphero')
	direction = 'kill'
})

app.listen(3000, function () {
  console.log('port 3000');
});

// sphero

bb8.connect(function() {
  setInterval(function() {
  	if(direction === 'stop'){
  		console.log('stop')
  	} else if (direction == 'forward'){
  		console.log('forward')
  		var angle = 180
    	bb8.roll(150, angle);
  	} else if (direction == 'backward'){
  		console.log('backward')
  		var angle = 0
    	bb8.roll(150, angle);
  	} else if (direction == 'left') {
  		console.log('left')
			var angle = 90
    	bb8.roll(150, angle);
  	} else if (direction == 'right') {
  		console.log('right')
  		var angle = 270
    	bb8.roll(150, angle);
  	} else if (direction == 'kill'){
  		console.log('kill')
  		clearInterval()
  	}
  }, 1000);
});
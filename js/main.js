var position = 0;
var dir = 1;
var numofclicks = 0;
var highscore = 0
var lives= 3;
var skip = true;

var rot; // Where the dial is
var thetop;
var bottom;

//Start Rotation

var rotate = function() {
	//console.log(dir, Math.abs(position % 360));
	position += 1 * dir;
	$('.dial').css({'transform':'rotateZ('+position+'deg)'});
	if (((dir == 1 && Math.abs(position % 360) == 6) && skip) || ((dir == -1 && Math.abs(position % 360) == 356) && skip)) {
		skip = false;
	}
	// else if (dir == 1 && Math.abs(position % 360) == 6 && !skip) {
	// 	takelife();
	// }
	// else if (dir == -1 && Math.abs(position % 360) == 356 && !skip) {
	// 	takelife();
	// }
};




//Lives

var takelife = function() {
	lives = (lives - 1);
	$('#lives').text(lives);
	if (lives <1) {
		window.location.replace("index2.html");
		  if (numofclicks > localStorage.getItem("highscore")) {
                localStorage.setItem("highscore", numofclicks);
            };
	}
}

//Rotation

var setposition = function() {
	rot = Math.ceil(Math.random() * 360);
	
	thetop = rot - 4;
	if (thetop < 0) thetop = thetop + 360;
	
	bottom = (rot + 5) % 360;

	console.log(rot, thetop, bottom);

	$('.target').css('transform','rotate('+rot+'deg)');
};


//In Target/ Out Target

$('body').on('keydown', function(e){
	console.log(e.keyCode)

	$('.inst').hide()

	document.getElementById('radar').load();
	document.getElementById('radar').play();

	if(e.keyCode == 32){
		console.log('between:', thetop, 'and', bottom, '?', Math.abs(position % 360));
		if (Math.abs(position % 360) >= thetop && Math.abs(position % 360) <= bottom) {
			console.log(Math.abs(position % 360), "YES")
			dir *= -1;
			$('.target').css({'transform':'scaleX('+dir+')'});

			skip = true;


			numofclicks = (numofclicks + 1);
			$('#count').text(numofclicks);

			setposition();
		}

		else {
			console.log(Math.abs(position % 360), "NO")

			$(".middle-circle").addClass("red").delay(200).queue(function(next){
			    $(this).removeClass("red");
			    next();
			});

			takelife()
		}

		//Speed Up, intervals of 5 up until 20, otherwise too fast

		if ( numofclicks == 5 ) {
			clearInterval(timer);
			timer = setInterval(rotate, 8);
		}
		if ( numofclicks == 10 ) {
			clearInterval(timer);
			timer = setInterval(rotate, 7);
		}
		if  ( numofclicks == 15 ) {
			clearInterval(timer);
			timer = setInterval(rotate, 6);
		}
		if  ( numofclicks == 20 ) {
			clearInterval(timer);
			timer = setInterval(rotate, 5);
		}
			
	};
});





$(function() {

	$('#hscore').text(highscore);

	setposition();

	timer = setInterval(rotate, 12);

	$('#lives').text(lives);
	$('#count').text(numofclicks);

});














//  

	// if (numofclicks >) 
	// 	hscore = (numofclicks + 1);

// $('.hscore').text(hscore);

	// function logScore(score) {
 //    if (score > localStorage.getItem('score'))
 //      localStorage.setItem('score', score);
 //    $('.score span.count').text(score);
 //  }
 //  loadScore()

 //  function loadScore() {
 //    $('.score span.hscore').text(localStorage.getItem('score') ? localStorage.getItem('score') : 0);
 //    $('.score span.count').text(0);
 //  }
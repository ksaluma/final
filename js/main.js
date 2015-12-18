var position = 0;
var dir = 1;
// var hscore = 0;
var numofclicks = 0;
var lives= 3;
var skip = true;

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

var takelife = function() {
	lives = (lives - 1);
	$('#lives').text(lives);
	if (lives <1) {
		window.location.replace("index2.html");
	}
}

var rot;
var top;
var bottom;
var setposition = function() {
	rot = Math.ceil(Math.random() * 360);
	
	top = rot - 4;
	if (top < 0) top = top + 360;
	
	bottom = (rot + 5) % 360;

	$('.target').css('transform','rotate('+rot+'deg)');

};

setposition();


timer = setInterval(rotate, 12);



$('#lives').text(lives);
$('#count').text(numofclicks);

// $('.lives span').text(marqueeWidth);


	$('body').on('keydown', function(e){
		console.log(e.keyCode)

		document.getElementById('radar').load();
		document.getElementById('radar').play();


		if(e.keyCode == 32){
			if (Math.abs(position % 360) >= top || Math.abs(position % 360) <= bottom) {
				console.log(Math.abs(position % 360), "YES")
				dir *= -1;

				skip = true;
				// $('.target').css({'transform':'rotateZ(180deg)'});


				numofclicks = (numofclicks + 1);
				$('#count').text(numofclicks);

				setposition();
			}

			else {
				console.log(Math.abs(position % 360), "NO")
				// dir = 0;

				// $('.middle-circle').addClass('red');

				$(".middle-circle").addClass("red").delay(200).queue(function(next){
				    $(this).removeClass("red");
				    next();
				});


				takelife()
			}


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


			
			
	};



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



	});


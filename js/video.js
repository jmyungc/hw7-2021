var vid = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	vid.autoplay = false;
	vid.loop = false;
	console.log("Auto play is set to " + vid.autoplay);
	console.log("Loop is set to " + vid.loop);
});

// Page load --> initialize the video element, autoplay off, looping off

// Play Button --> play video and update the volume information 

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	vid.play();
	document.querySelector("#volume").innerHTML = vid.volume * 100 + "%";
	console.log("Volume is " + vid.volume*100);

});

// Pause Button --> pause video

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	vid.pause();
});


// Slow Down --> slow the current video speed by 10% each time the button is clicked and log the new speed to the console

document.querySelector("#slower").addEventListener("click", function() {
	vid.playbackRate -= 0.1;
	console.log("Playback speed is " + vid.playbackRate);
});

// Speed Up --> increase curr video speed each time button clicked, log new speed to console. 

//		change it a proportional amount to slow down. CHECK THIS!!! If you slow down 3x then speed up 3x, you should be within 5 digits of 100% again

document.querySelector("#faster").addEventListener("click", function() {
	vid.playbackRate += 0.1;
	console.log("Playback speed is " + vid.playbackRate);
});

// Skip Ahead --> advance the current video by 10 seconds. if video length as exceeded, go back to start, NO FARTHER. log the current location of the video

document.querySelector("#skip").addEventListener("click", function() {
	if (vid.currentTime == vid.duration) {
		vid.currentTime = 0;
	}
	else {
		vid.currentTime += 10;
	}
	console.log("Current location is " + vid.currentTime)

});

// Mute --> mute/unmute the video and update the text in the button

document.querySelector("#mute").addEventListener("click", function() {
	if (vid.muted) {
		vid.muted = false;
		vid.volume = 1.0;
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else {
		vid.muted = true;
		vid.volume = 0;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

// Volume Slider --> change the volume based on slider + update information

document.querySelector("#slider").addEventListener("click", function() {
	var vid_vol = document.querySelector("#slider")
	vid.volume = vid_vol.value / 100;

	var volume_is = document.querySelector("#volume");
	volume_is.innerHTML = (vid.volume * 100) + "%";
	console.log("Volume is " + vid.volume);
});


document.querySelector("#vintage").addEventListener("click", function() {
	vid.className = "oldSchool";
});


document.querySelector("#orig").addEventListener("click", function() {
	vid.className = "video";
});


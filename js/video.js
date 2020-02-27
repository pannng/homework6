var video;

function getVid() {
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	let vol = document.querySelector("#volume");
	vol.innerHTML = video.volume * 100 + "%";
	console.log("Play Video");
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() {
	video.playbackRate *= 0.8
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate *= 1.25
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	video.currentTime += 60;
	console.log("Current location is "+ video.currentTime);
} 

function mute() { 
  	if (video.muted){
		console.log("Changing to Unmuted");
		video.muted = false;  
	}
	else{
		console.log("Changing to Muted");
		video.muted = true;
	}
}

function changeVolume() {
	var volume = document.querySelector("#volumeSlider").value;
	video.volume = volume / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("Volume is " + volume + "%");
}
       

function gray() {
	video.style.filter = "grayscale(100%)"
	console.log("In grayscale")
}

function color() {
	video.style.filter = "None"
	console.log("In color") 
}

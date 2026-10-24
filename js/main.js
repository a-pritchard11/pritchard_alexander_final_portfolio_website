//Variables
const player = document.querySelector("video");
const playerCon = document.querySelector("#player-container");
const playButton = document.querySelector("#play-button");
const pauseButton = document.querySelector("#pause-button");
const stopButton = document.querySelector("#stop-button");
const volumeSlider = document.querySelector("#change-vol");
const fullScreen = document.querySelector("#full-screen");
const videoControls = document.querySelector("#video-controls");

// If JS is loaded then let's remove the default controls
player.controls = false;

//functions
function playVideo() {
    player.play();
}

function pauseVideo() {
    player.pause();
}

function stopVideo() {
    player.pause();
    player.currentTime = 1;
}

function changeVolume() {
    //console.log(volumeSlider.value);
    //volume property is a value between 0 and 1;
    player.volume = volumeSlider.value;
}

function toggleFullScreen() {
    console.log("Fullscreen fired");
    //if the player is in fullscreen exit fullscreen, otherwise make it full screen
    if(document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        playerCon.requestFullscreen();
    }
}

function showControls() {
    videoControls.classList.remove("hide");
}

function hideControls() {
    videoControls.classList.add("hide");
}

//Event Listeners
playButton.addEventListener("click", playVideo);
pauseButton.addEventListener("click", pauseVideo);
stopButton.addEventListener("click", stopVideo);
volumeSlider.addEventListener("input", changeVolume);
fullScreen.addEventListener("click", toggleFullScreen);

videoControls.addEventListener("mouseenter", showControls);
videoControls.addEventListener("mouseleave", hideControls);

player.addEventListener("mouseenter", showControls);
player.addEventListener("mouseleave", hideControls);
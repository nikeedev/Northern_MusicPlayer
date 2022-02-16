var audio = document.querySelector("audio");
var PlayButton = document.getElementById("PlayButton");
var previous = document.getElementById("previous");
var next = document.getElementById("next");
var info = document.getElementById("info");

var CurrentNumberOfMusic = 0;
var PressedPlay = false;
var ListOfMusics = [
    "test.mp3",
    "https://samplelib.com/lib/preview/mp3/sample-15s.mp3"
]

audio.controls = false;
audio.src = ListOfMusics[CurrentNumberOfMusic];

function play()
{
    if (!PressedPlay) {
        PlayButton.innerHTML = "I I";
        PressedPlay = true;
        audio.play();
    }
    else if (PressedPlay) {
        PlayButton.innerHTML = "&#9654;";
        PressedPlay = false;
        audio.pause();
    }
    info.innerHTML = "Current song/music playing: " + (CurrentNumberOfMusic + 1 + "." + audio.src)
}

function previousFunc() {
    CurrentNumberOfMusic -= 1;
    audio.src = ListOfMusics[CurrentNumberOfMusic];
    audio.currentTime = 0;
    PressedPlay = false;
    PlayButton.innerHTML = "I I";
    audio.play();
    info.innerHTML = "Current song/music playing: " + (CurrentNumberOfMusic + 1 + ". " + audio.src)
}

function nextFunc() {
    CurrentNumberOfMusic += 1;
    audio.currentTime = 0;
    audio.src = ListOfMusics[CurrentNumberOfMusic];
    PressedPlay = false;
    PlayButton.innerHTML = "I I";
    audio.play();
    info.innerHTML = "Current song/music playing: " + (CurrentNumberOfMusic + 1 + ". " + audio.src)
}



var audio = document.querySelector("audio");
var PlayButton = document.getElementById("PlayButton");
var previous = document.getElementById("previous");
var next = document.getElementById("next");
var info = document.getElementById("info");
var CustomUrl = document.getElementById("CustomMusicUrl");
var CustomFile = document.getElementById("CustomMusicFile");
var AcceptCustomMusic = document.getElementById("AcceptCustomMusic");
var ChangeCustomMusic = document.getElementById("ChangeCustomMusic");
CustomFile.style.display = "none";


var CurrentNumberOfMusic = 0;

var PressedPlay = false;

var ListOfMusics = [
    "test.mp3",
    "https://samplelib.com/lib/preview/mp3/sample-15s.mp3",
    
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
        PressedPlay = true;
        audio.pause();
    }
    info.innerHTML = "Current song/music playing: " + (CurrentNumberOfMusic + 1 + "." + audio.src)
}

function previousFunc() {
    CurrentNumberOfMusic -= 1;
    audio.src = ListOfMusics[CurrentNumberOfMusic];
    audio.load();
    audio.currentTime = 0;
    PressedPlay = true;
    PlayButton.innerHTML = "I I";
    audio.play();
    info.innerHTML = "Current song/music playing: " + (CurrentNumberOfMusic + 1 + ". " + audio.src)
}

function nextFunc() {
    CurrentNumberOfMusic += 1;
    audio.currentTime = 0;
    audio.src = ListOfMusics[CurrentNumberOfMusic];
    audio.load();
    PressedPlay = true;
    PlayButton.innerHTML = "I I";
    audio.play();
    info.innerHTML = "Current song/music playing: " + (CurrentNumberOfMusic + 1 + ". " + audio.src)
}


function UseCustomMusic() {
    CurrentNumberOfMusic = ListOfMusics.length + 1;
    ListOfMusics.push(String(CustomUrl.innerHTML));
    audio.src = ListOfMusics[CurrentNumberOfMusic];
    audio.load();
    audio.currentTime = 0;
    PressedPlay = true;
    PlayButton.innerHTML = "I I";
    audio.play();
    info.innerHTML = "Current song/music playing: " + (CurrentNumberOfMusic + 1 + ". " + audio.src)
}


function ChangeCustomMusicType() {
    if (CustomUrl.style.display != "none") {
        CustomUrl.style.display = "none";
        CustomUrl.innerHTML = null;
        CustomFile.style.display = "block";
        ChangeCustomMusic.innerHTML = "Use from URL/path instead?"
    }
    else if (CustomUrl.style.display == "none") {
        CustomUrl.style.display = "block";
        CustomFile.innerHTML = null;
        CustomFile.style.display = "None";
        ChangeCustomMusic.innerHTML = "Open from file instead?"
    }
}
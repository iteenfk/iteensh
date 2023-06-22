"use strict"

const volumeSlider = document.getElementById("slider");

const volumeValue = document.getElementById("vol");

const audio = document.getElementById("player");

function volume() {
    const value = volumeSlider.value;
    volumeValue.textContent = value + "%";

    audio.volume = value / 100;

}

function play(){
    audio.play();
}

function pause() {
    audio.pause();
}

function stop(){
    audio.pause();
    audio.currentTime = 0;
}
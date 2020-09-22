import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const  video = document.querySelector("video");
const  play = document.getElementById("playOrPause")
const  mute = document.getElementById("muteOrUnmute");

const  player = new  MediaPlayer({ el:  video, plugins: [new AutoPlay()] });
play.onclick = () =>  player.play();
mute.onclick = () =>  player.toggleMute();
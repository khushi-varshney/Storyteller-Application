let audio1 = new Audio("./audios/audio1.wav");
let audio2 = new Audio("./audios/audio2.wav");
let audio3 = new Audio("./audios/audio3.wav");
let audio4 = new Audio("./audios/audio4.wav");
let chickenCut = new Audio("./audios/chicken-cut.mp3")
let manCrying = new Audio("./audios/man-crying.mp3")
let manlaugh = new Audio("./audios/man-laugh.mp3")

let playButton = document.querySelector(".playbutton")
playButton.addEventListener("click", ()=>{
  audio1.play();
  setTimeout(()=>{
    audio2.play();
  },27000)
  setTimeout(()=>{
    manlaugh.play();
  },35000)
  setTimeout(()=>{
    manlaugh.pause()
  },44000)
  setTimeout(()=>{
    chickenCut.play();
  },43000)
  setTimeout(()=>{
    audio3.play();
  },47000)
  setTimeout(()=>{
    manCrying.play();
  },48000)
  setTimeout(()=>{
    audio4.play();
  },59000)
  setTimeout(()=>{
    manCrying.pause();
  },70000)
})
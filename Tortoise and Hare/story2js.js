let once = new Audio("./audios/once.mp3");
let countdown = new Audio("./audios/countdown.mp3");
let raceMusic = new Audio("./audios/race music.mp3");
let snoring = new Audio("./audios/snoring.mp3");
let victory = new Audio("./audios/victory.mp3");
let winning = new Audio("./audios/winning.mp3");
let moral2 = new Audio("./audios/moral.mp3");
let ready = new Audio("./audios/ready.mp3");
let hare = new Audio("./audios/hare.mp3");


let playButton=document.querySelector(".playbutton")
playButton.addEventListener("click", ()=>{
    once.play();
    setTimeout(()=>{
        ready.play()
    }, 9700)

    setTimeout(()=>{
        countdown.play();
    }, 11100)

    setTimeout(()=>{
        raceMusic.play();
    }, 14000)

    setTimeout(()=>{
        raceMusic.pause();
        hare.play();
    },25000)

    setTimeout(()=>{
        snoring.play();
    },30000)

    setTimeout(()=>{
        snoring.pause();
        raceMusic.play();
    }, 41000)

    setTimeout(()=>{
        raceMusic.pause();
        winning.play();
    },46600)

    setTimeout(()=>{
        victory.play();
    },50500)

    setTimeout(()=>{
        moral2.play();
    },52000)
})
let section1 = document.querySelector(".section1");
let dialogBox = document.createElement("img");
dialogBox.src =
  "https://static.vecteezy.com/system/resources/thumbnails/011/654/887/small/speech-bubbles-on-transparent-background-chat-box-or-chat-vector-square-and-doodle-message-or-communication-icon-cloud-speaking-for-comics-and-minimal-message-dialog-free-png.png";
dialogBox.classList.add("dialogBox");
let dialogText = document.createElement("p");
dialogText.innerHTML = "<strong>Hey Friend, I challenge you to race with me. Let's See who will win.</strong>";
dialogText.classList.add("dialogText");

setTimeout(()=>{
    section1.appendChild(dialogBox);
    section1.appendChild(dialogText);
},4000);

let dialogBox1 = document.createElement("img");
dialogBox1.src =
  "https://static.vecteezy.com/system/resources/thumbnails/011/654/887/small/speech-bubbles-on-transparent-background-chat-box-or-chat-vector-square-and-doodle-message-or-communication-icon-cloud-speaking-for-comics-and-minimal-message-dialog-free-png.png";
dialogBox1.classList.add("dialogBox1");

let dialogText1 = document.createElement("p");
dialogText1.innerHTML = "<strong>Ok, My Friend. Let's See who will win. &#128516;</strong>";
dialogText1.classList.add("dialogText1");

setTimeout(()=>{
    section1.removeChild(dialogBox);
    section1.removeChild(dialogText);
    section1.appendChild(dialogBox1);
    section1.appendChild(dialogText1);
},7000);

let rabbitInitial = document.querySelector(".rabbit");
let tortoiseInitial = document.querySelector(".tortoise");
let rabbitAfter = document.createElement("img");
rabbitAfter.src = "https://static.vecteezy.com/system/resources/previews/036/444/828/non_2x/ai-generated-cute-white-rabbit-cartoon-illustration-for-kids-on-transparent-background-free-png.png";
rabbitAfter.classList.add("rabbitAfter");
let tortoiseAfter = document.createElement("img");
tortoiseAfter.src = "https://static.vecteezy.com/system/resources/previews/036/444/740/original/ai-generated-cute-tortoise-cartoon-illustration-for-kids-on-transparent-background-free-png.png";
tortoiseAfter.classList.add("tortoiseAfter");

setTimeout(()=>{
    section1.removeChild(dialogBox1);
    section1.removeChild(dialogText1);
    section1.removeChild(rabbitInitial);
    section1.removeChild(tortoiseInitial);
}, 10000);

setTimeout(()=>{
    section1.appendChild(rabbitAfter);
    section1.appendChild(tortoiseAfter);
},11000)

let counting = document.createElement("img");
counting.src = "https://media1.giphy.com/media/9PcR3igJ1vCRRYJd2v/giphy.gif?cid=6c09b952ruzzzwdhzq5090ez2wp1bbuwy2kkwhzk2nf9viye&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s";
counting.classList.add("counting");

setTimeout(()=>{
  section1.appendChild(counting);
},12500)

setTimeout(()=>{
  counting.src="https://media.tenor.com/52cFtv0G4Q8AAAAi/lets-go-gif.gif";
},14500)
setTimeout(()=>{
  section1.removeChild(counting);
  rabbitAfter.src="https://cdna.artstation.com/p/assets/images/images/025/958/956/original/lenneke-van-doorn-runanimation-1.gif?1587462989"
  rabbitAfter.classList.add("rabbitRunning");
  tortoiseAfter.classList.add("tortoiseRunning");
},15500)

setTimeout(()=>{
  section1.removeChild(rabbitAfter);
},17500);

setTimeout(()=>{
  section1.removeChild(tortoiseAfter);
    rabbitAfter.classList.add("rabbitRuns");
  section1.appendChild(rabbitAfter);
},20000);

setTimeout(()=>{
  rabbitAfter.src="https://static.vecteezy.com/system/resources/previews/024/096/947/original/little-white-rabbit-animal-free-png.png";
  rabbitAfter.classList.add("rabbitStil");
},25000)

let dialogBox3 = document.createElement("img");
dialogBox3.src =
  "https://static.vecteezy.com/system/resources/thumbnails/011/654/887/small/speech-bubbles-on-transparent-background-chat-box-or-chat-vector-square-and-doodle-message-or-communication-icon-cloud-speaking-for-comics-and-minimal-message-dialog-free-png.png";
dialogBox3.classList.add("dialogBox3");
let dialogText3 = document.createElement("p");
dialogText3.innerHTML = "<strong>Oh, My Friend is too slow. &#128514; </strong>";
dialogText3.classList.add("dialogText3");

setTimeout(()=>{
  section1.appendChild(dialogBox3);
  section1.appendChild(dialogText3);

},26000)

setTimeout(()=>{
    dialogText3.innerHTML = "<strong>Let's take a nap as he continues. &#128564; </strong>";
},29000)


let sleepingzzz = document.createElement("img");
sleepingzzz.src = "https://media1.giphy.com/media/mwv5LrIc9MqY0ZXtIk/giphy.gif?cid=6c09b95271685c67a35uvu0n5ridfwvx8tehhi5ur7qdg1wi&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=ts";
sleepingzzz.classList.add("sleepingzzz");

setTimeout(()=>{
  section1.removeChild(dialogBox3);
  section1.removeChild(dialogText3);
  rabbitAfter.src="https://attic.sh/14rigr9h4uu6prh1zhdscr338hf7";
  section1.appendChild(sleepingzzz);
},31000)

setTimeout(()=>{
  tortoiseAfter.classList.add("tortoiseWalk")
  section1.appendChild(tortoiseAfter);
}, 35000)

let finishLine = document.createElement("img");
finishLine.src = "https://www.clipartmax.com/png/full/375-3758065_finish-line-clipart-transparent-background-finish-line-clipart-transparent-background.png";
finishLine.classList.add("finishLine");

let finish = document.createElement("img");
finish.src = "https://cdn-icons-png.freepik.com/512/5515/5515469.png";
finish.classList.add("finish");

setTimeout(()=>{
  section1.removeChild(rabbitAfter);
  section1.removeChild(sleepingzzz);
  section1.appendChild(finishLine);
  section1.appendChild(finish);
  tortoiseAfter.classList.add("tortoiseWin")
},42000)

let celebration = document.createElement("img");
celebration.src = "https://i.pinimg.com/originals/e4/d2/c1/e4d2c1d0da356797359acd9270bcdd77.gif";
celebration.classList.add("celebration");

let winner = document.createElement("img");
winner.src = "https://media.tenor.com/r8mHQsu7RfYAAAAM/kapha.gif";
winner.classList.add("winner");

setTimeout(()=>{
  section1.removeChild(finish);
  section1.removeChild(finishLine);
  section1.appendChild(celebration)
  section1.appendChild(winner)
},48200)

let  moral = document.createElement("div");
moral.innerHTML=`
    <div class="moral">
            <h1>Turtle and Hare</h1>
            <h3>Moral</h3>
            <h5>Overconfidence can sometimes ruin you.</h5>
            <p>Even if all the odds are stacked against you, never give up.  Sometimes, Life is not about who's the fastest or the strongest, it's about who is the most consistent. So, Bring the power of preserverance.</p>
            <h6>Thank You</h6>
    </div>
`

setTimeout(()=>{
  section1.removeChild(winner);
  section1.appendChild(moral);
  moral.style.visibility="visible"
}, 53000)
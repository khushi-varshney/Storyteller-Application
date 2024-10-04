
let section1 = document.querySelector(".section1");
let dialogBox = document.createElement("img");
dialogBox.src =
  "https://static.vecteezy.com/system/resources/thumbnails/011/654/887/small/speech-bubbles-on-transparent-background-chat-box-or-chat-vector-square-and-doodle-message-or-communication-icon-cloud-speaking-for-comics-and-minimal-message-dialog-free-png.png";
dialogBox.classList.add("dialogBox");
let dialogText = document.createElement("p");
dialogText.innerHTML = "<strong>I am very Poor</strong>";
dialogText.classList.add("dialogText");


setTimeout(() => {
  section1.appendChild(dialogBox);
  section1.appendChild(dialogText);
}, 4000);

setTimeout(() => {
  section1.removeChild(dialogBox);
  section1.removeChild(dialogText);
}, 6000);

let richMan = document.createElement("img");
richMan.src = `https://freepngimg.com/thumb/vector/147462-standing-boy-vector-hipster-free-download-png-hd-thumb.png`;
richMan.classList.add("richMan");

let dialogBox1 = document.createElement("img");
dialogBox1.src =
  "https://static.vecteezy.com/system/resources/thumbnails/011/654/887/small/speech-bubbles-on-transparent-background-chat-box-or-chat-vector-square-and-doodle-message-or-communication-icon-cloud-speaking-for-comics-and-minimal-message-dialog-free-png.png";
dialogBox1.classList.add("dialogBox1");

let dialogText1 = document.createElement("p");
dialogText1.innerHTML = "<strong>Hey Old Man, I can help you.</strong>";
dialogText1.classList.add("dialogText1");

let goldenEgg = document.createElement("img");
goldenEgg.src =
  "https://static.vecteezy.com/system/resources/previews/021/357/780/original/gold-easter-egg-isolated-on-transparent-background-free-png.png";
goldenEgg.classList.add("goldenEgg");

let chicken = document.createElement("img");
chicken.src = "https://pngfre.com/wp-content/uploads/Chicken-21-282x300.png";
chicken.classList.add("chicken");
let oldMan = document.querySelector('.oldMan')

setTimeout(() => {
  section1.appendChild(richMan);
  setTimeout(() => {
    section1.appendChild(dialogBox1);
    section1.appendChild(dialogText1);
  }, 4000);
  setTimeout(() => {
    section1.appendChild(chicken);
    dialogText1.innerHTML = "<strong>Take this Chicken.</strong>";
  }, 6000);
  setTimeout(() => {
    section1.appendChild(goldenEgg);
    dialogText1.innerHTML =
      "<strong>This Chicken lays a Golden Egg every single day.</strong>";
  }, 9000);
  setTimeout(() => {
    dialogText1.innerHTML = "<strong>BUT REMEMBER</strong>";
  }, 13000);
  setTimeout(() => {
    dialogText1.innerHTML =
      "<strong>Only a one golden egg in a day.</strong>";
  }, 15000);
  setTimeout(() => {
    dialogText.innerHTML = "<strong>Oh, Thank You. Rich Man.</strong>";
    dialogText.style.fontSize = "14px";
    section1.appendChild(dialogBox);
    section1.appendChild(dialogText);
  }, 17000);
  setTimeout(() => {
    section1.removeChild(dialogText);
    section1.removeChild(dialogBox);
    section1.removeChild(goldenEgg);
    // section1.removeChild(chicken);
    section1.removeChild(dialogText1);
    section1.removeChild(dialogBox1);
    section1.removeChild(richMan);
    section1.removeChild(oldMan);
  }, 20000);
}, 6300);

let OldMan = document.createElement("img");
OldMan.src="https://png.pngtree.com/png-clipart/20230916/original/pngtree-old-man-cartoon-sticker-clipart-vector-png-image_12248009.png";
OldMan.classList.add("OldMan")
setTimeout(()=>{
  console.log("oldMan")
  section1.appendChild(OldMan);
},27000)

setTimeout(()=>{
  section1.appendChild(dialogBox1);
  section1.appendChild(dialogText1);
},28000)

setTimeout(()=>{
    dialogText1.innerHTML="<strong>Hmm.<p>I Think ...</p></strong>"
},31000)

setTimeout(()=>{
  dialogText1.innerHTML="<strong>It have all those eggs inside it.</strong>"
}, 34000)

setTimeout(()=>{
  dialogText1.innerHTML="<strong>If I cut this chicken in Half.</strong>"
}, 37000)

setTimeout(()=>{
  dialogText1.innerHTML="<strong>I can get all those Eggs and become rich.</strong>"
}, 40000)

let knife = document.createElement("img");
knife.src="https://img.pikbest.com/origin/09/28/87/47HpIkbEsTx2s.png!sw800";
knife.classList.add("knife");

setTimeout(()=>{
  section1.appendChild(knife);
},44000)

let chickenBlood = document.createElement("img")
chickenBlood.src="https://www.freeiconspng.com/thumbs/blood-png/blood-png-25.png"
chickenBlood.classList.add("chickenBlood")

setTimeout(()=>{
  section1.removeChild(knife);
  chicken.classList.add('chickenGotCut');
  console.log(section1)
  section1.appendChild(chickenBlood)
  section1.removeChild(dialogBox1);
  section1.removeChild(dialogText1);
},44750)

setTimeout(()=>{
  dialogBox.style.width="150px"
  section1.removeChild(OldMan);
  section1.appendChild(oldMan);
  section1.appendChild(dialogBox);
  dialogText.style.fontSize="20px"
  dialogText.style.width="100px";
  dialogText.innerHTML="<strong>What......?</strong>"
  section1.appendChild(dialogText);
}, 47000)

let tears = document.createElement("img");
tears.src="https://static.vecteezy.com/system/resources/thumbnails/009/305/124/small/tears-clipart-design-illustration-free-png.png";
tears.classList.add("tears");

setTimeout(()=>{
  dialogText.innerHTML="<strong>Why there are no eggs..?</strong>"
  section1.appendChild(tears);
},49900)

setTimeout(()=>[
  dialogText.innerHTML="<strong>Oh No....</strong>"
],53000)

setTimeout(() => {
  dialogText.innerHTML="<strong>I got too greedy.</strong>"
}, 55000);
let  moral = document.createElement("div");
moral.innerHTML=`
    <div class="moral">
            <h1>The Golden Egg</h1>
            <h3>Moral</h3>
            <h5>Greed Always Leads To Disaster.</h5>
            <p>It's better to be content with what we have rather than being greedy for more. Patience and Contentment are virtues that leads to peace and prosperity.</p>
            <h6>Thank You</h6>
    </div>
`


setTimeout(()=>{
  section1.appendChild(moral);
  moral.style.visibility="visible"
}, 60000)
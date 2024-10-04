
let submitButton=document.querySelector(".submitButton")
let userName = document.querySelector(".userName")
let userEmail = document.querySelector(".userEmail")
let message = document.querySelector(".message")
let userPhone = document.querySelector(".userPhone")
let submitOK="false";

submitButton.addEventListener("click",()=>{
  submitFormReturn(); 
  return false;
})

async function submitFormReturn(){

  var x = document.getElementById("snackbar");
  x.className = "show";

  if (14<userName.value.length) {
    x.innerText="Name must not have more than 14 charachters"
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    submitOK = "false";
  }else if (userName.value.length<6) {
    x.innerText="Name must have more than 6 charachters"
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    submitOK = "false";
  }else if (userPhone.value.length!=10) {
    x.innerText="Provide a valid phone number"
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    submitOK = "false";
  }else if (userEmail.value.indexOf("@")==-1) {
    x.innerText="Provide a valid Email"
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    submitOK = "false";
  }else{
    x.innerText="Submitting...."
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    const res = await fetch("https://reactcontactformfirebase-default-rtdb.firebaseio.com/storyweave.json",{
      method: "POST", 
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        fullName: userName.value,
        email: userEmail.value,
        phone: userPhone.value,
        message: message.value
      })
    })
    if(res){
      x.innerText="Submit Successfully"
      return setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }
  }
}
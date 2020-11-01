const fname = document.getElementById("fname")
const lname = document.getElementById("lname");
const mail = document.getElementById("mail");
const mob = document.getElementById("mob");
const pin = document.getElementById("pin");

function blurFun(input,msg,validation,letters,success,danger){
  let str = input.value;
  if(letters.test(str)){
    validation.style["display"]="none";
    console.log("Valid "+msg);
    input.style.backgroundColor="#32e0c4";
    success.style["display"]="block";
    danger.style["display"]="none";
    // alert("Valid "+msg);
  }
  else if(str === ""){
    input.style.backgroundColor="#ff4b5c";
    input.style.opacity="0.8";
    validation.style["display"]="block";
    success.style["display"]="none";
    danger.style["display"]="block";
    validation.innerHTML="*"+msg+" should not be empty."
  }
  else{
    input.style["backgroundColor"]="#ff4b5c";
    // input.style.opacity="0.8";
    success.style["display"]="none";
    danger.style["display"]="block";
    console.log("Invlaid "+msg);
    validation.style["display"]="block";
  }
}
function blurEmailFun(input,msg,validation,success,danger){
  // let letters = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let letters =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let str = input.value;
  if(letters.test(str)){
    validation.style["display"]="none";
    console.log("Valid "+msg);
    input.style.backgroundColor="#32e0c4";
    success.style["display"]="block";
    danger.style["display"]="none";
    // alert("Valid "+msg);
  }
  else if(str === ""){
    input.style.backgroundColor="#ff4b5c";
    input.style.opacity="0.8";
    validation.style["display"]="block";
    success.style["display"]="none";
    danger.style["display"]="block";
    validation.innerHTML="*"+msg+" should not be empty."
  }
  else{
    input.style["backgroundColor"]="#ff4b5c";
    input.style.opacity="0.8";
    console.log("Invlaid "+msg);
    success.style["display"]="none";
    danger.style["display"]="block";
    validation.style["display"]="block";
  }
}
function blurAddressFun(input,msg,validation,success,danger){
  let str = input.value;
  if(str === ""){
    input.style.backgroundColor="#ff4b5c";
    input.style.opacity="0.8";
    validation.style["display"]="block";
    success.style["display"]="none";
    danger.style["display"]="block";
    validation.innerHTML="*"+msg+" should not be empty."
  }
  else{
    input.style.backgroundColor="#32e0c4";
    success.style["display"]="block";
    danger.style["display"]="none"
  }
}
function focusFun(input,validate){
  input.style.backgroundColor="#F7F8F8";
  validate.style["display"]="none";
  // input.style.opacity="8";
}


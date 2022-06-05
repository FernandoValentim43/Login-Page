//cellphone mask
document.getElementById("phone").addEventListener("input", function (e) {
  const x = e.target.value
    .replace(/\D/g, "")
    .match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
  e.target.value = !x[2]
    ? x[1]
    : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
});

//change elemenet by id display
const doc = document.getElementById.bind(document);
function hidden(name, display) {
  if (display == "none") {
    doc(name).style.display = "none";
  } else if (display == "flex") {
    doc(name).style.display = "flex";
  } else {
    doc(name).style.display = "block";
  }
}

//change erros menssages visibility
const errors = document.getElementsByClassName("error");
function clearError(x) {
  let stateDisplay;
  x ? (stateDisplay = "visible") : (stateDisplay = "hidden");

  for (let i = 0; i < errors.length; i++) {
    let s = errors[i].style;
    s.visibility = stateDisplay;
  }
}

const titleH1 = doc("title").innerText;
const chkBike = doc("check"); //checkbox

const btn = doc("button");
doc("button").addEventListener("click", nextPage);


//get all "errors" P, then run trough the node list turning each of them invisible;
function nextPage() {
  if (chkBike.checked) {
    hidden("first", "none");
    hidden("last", "none");
    hidden("inputs", "none");
    hidden("returnPage", "flex");
  }
}

//return to main page
function returnButton() {
  location.reload();
  localStorage.clear(); //clean local storage
}

let input = doc("inputName");
let email = doc("inputEmail");
let birthDay = doc("phone");
let phone = doc("inputBirthDay");
let password = doc("inputPassword");



//form local storage
doc("button").addEventListener("click", saveToLocal);
function saveToLocal() {
  localStorage.setItem("nome", input.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("phoneNumber", birthDay.value);
  localStorage.setItem("birthDay", phone.value);
  //not remember password in local storage
}

//get from local storage
window.addEventListener("load", () => {
  input.value = localStorage.getItem("nome");
  email.value = localStorage.getItem("email");
  birthDay.value = localStorage.getItem("phoneNumber");
  phone.value = localStorage.getItem("birthDay");
});


//validadion
function valitadeInput(thisValue ,state) {
  document.getElementById(thisValue).style.visibility = state;
}

function check(xyz, errorName) {      
  xyz.addEventListener('keydown', () => {let checking = xyz.checkValidity();
 if (checking == false) {
   valitadeInput(errorName ,"visible") 
 } else {
   valitadeInput(errorName ,"hidden") 
 }});
 }




input.addEventListener('keydown', check(input, "errorName"));
email.addEventListener('keydown', check(email, "errorMail"));
password.addEventListener('keydown', check(password, "errorPassword"));



  
  



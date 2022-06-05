
//cellphone mask
document.getElementById("phone").addEventListener('input', function (e) {
  const x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
  e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});


//change elemenet by id display
const doc = document.getElementById.bind(document);
function hidden(name, display) {
    if(display == "none") {
      doc(name).style.display = "none"
    } else if (display == "flex") {
      doc(name).style.display = "flex";
    } else {
      doc(name).style.display = "block";
    }
}

//change erros menssages visibility 
const errors = document.getElementsByClassName('error');
function clearError(x) {
  let stateDisplay;
  (x ? stateDisplay = "visible" : stateDisplay = "hidden");

  for (let i = 0 ; i < errors.length ; i ++) {
   let s = errors[i].style;
   s.visibility = stateDisplay;
  }
}


const titleH1 = doc("title").innerText;
const chkBike = doc("check"); //checkbox
//get all "errors" P, then run trough the node list turning each of them invisible;
function check() {
clearError(true);

   if (chkBike.checked) {
    hidden("first", "none");
    hidden("last", "none");
    hidden("inputs", "none");
    hidden("returnPage", "flex"); 
  } 
};

//return to main page
function returnButton() {
  location.reload(); 
  localStorage.clear(); //clean local storage
}

//form local storage
const btn = doc("button").addEventListener("click", saveToLocal);

function saveToLocal() {
  localStorage.setItem('nome', doc("inputName").value);
  localStorage.setItem('email', doc("inputEmail").value);
  localStorage.setItem('phoneNumber', doc("phone").value);
  localStorage.setItem('birthDay', doc("inputBirthDay").value);
  //not remember password in local storage
}

//get from local storage
window.addEventListener('load', () => {
  doc("inputName").value = localStorage.getItem('nome');
  doc("inputEmail").value = localStorage.getItem('email');
  doc("phone").value = localStorage.getItem('phoneNumber');
  doc("inputBirthDay").value = localStorage.getItem('birthDay');
});

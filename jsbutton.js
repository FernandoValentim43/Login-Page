
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



let titleH1 = doc("title").innerText;
let chkBike = doc("check"); //checkbox
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
}




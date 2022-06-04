

const doc = document.getElementById.bind(document);

function hidden(name, display) {
    if(display == "none") {
      doc(name).style.display = "none"
    } else if (display == "flex") {
      doc(name).style.display = "flex";
    }
}

let titleH1 = doc("title").innerText;
let chkBike = doc("check"); //checkbox
//get all "errors" P, then run trough the node list turning each of them invisible;
function check() {
   let errors = document.getElementsByClassName('error');
   for (let i = 0 ; i < errors.length ; i ++) {
    var s = errors[i].style;
    s.visibility = "visible";
   }


   if (chkBike.checked) {
    hidden("first", "none");
    hidden("last", "none");
    hidden("inputs", "none");
    hidden("returnPage", "flex");
  } 
};

//return to main page
function returnButton() {
  hidden("first", "flex");
  hidden("last", "flex");
  hidden("inputs", "flex");
  hidden("returnPage", "none");
}




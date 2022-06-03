

let titleH1 = document.getElementById("title").innerText;
let chkBike = document.getElementById("check"); //checkbox
//get all "errors" P, then run trough the node list turning each of them invisible;
function check() {
   let errors = document.getElementsByClassName('error');
   for (let i = 0 ; i < errors.length ; i ++) {
    var s = errors[i].style;
    s.visibility = "visible";
   }


   if (chkBike.checked) {
     document.getElementById("first").style.display = "none";
     document.getElementById("last").style.display = "none";
     document.getElementById("inputs").style.display = "none";
     document.getElementById("returnPage").style.display = "flex";
  } 
};

//return to main page
function returnButton() {
  document.getElementById("first").style.display = "block";
  document.getElementById("last").style.display = "flex";
  document.getElementById("inputs").style.display = "flex";
  document.getElementById("returnPage").style.display = "none";
}




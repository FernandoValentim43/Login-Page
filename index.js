function check() {
   let errors = document.getElementsByClassName('error');
   for (let i = 0 ; i < errors.length ; i ++) {
    var s = errors[i].style;
    s.visibility = "visible";
   }
}

//get all elements with "error" class as a nodelist, them go trough each element of the list changing its visibility
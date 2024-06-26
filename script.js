
form11 = document.getElementById("myForm");
h11 = document.getElementById("h11");
p11 = document.getElementById("p11");
p22 = document.getElementById("p22"); 
title = document.getElementById("title"); 
p22.style.display = "none";
var good = -1;
if (document.cookie=="good = 1"){
good = 1;
}
function getData(form) {
    var formData = new FormData(form);
  
    for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
      var age = pair[1];
      console.log(age);
      var userdate = age.substring(0,4);
      console.log(userdate);
      var current = new Date().getFullYear();
      console.log(current);
      var sixteen = current-16;
      console.log(sixteen);
      if (sixteen>=userdate){
        console.log("jeff");
        var good=1
      }
      if (good==1){
        console.log("jeff");
        var good=1
        form11.style.display = "none";
        h11.innerHTML = "Peter Dutton annonces that if elected they would instate a ban on social media for under 16's";
        p11.style.display = "none";
        p22.style.display = "block";
        title.innerHTML = "Peter Dutton annonces that if elected they would instate a ban on social media for under 16's";
        document.cookie = "good = 1";
        console.log(document.cookie);
      }

      else{ 
        console.log("nojeff");
        good=0;
        document.cookie = "good = 0";
        console.log(document.cookie);
        h11.innerHTML = "You are not 16";
        p11.style.display = "none";
        form11.style.display = "none";
    }
    }
  
    console.log(Object.fromEntries(formData));
  }
  if (document.cookie===""){
  document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
    getData(e.target);
  });
}
else if (document.cookie==="good = 0"|good==0){
    h11.innerHTML = "You are not 16";
    p11.style.display = "none";
    form11.style.display = "none";
}
else if (document.cookie==="good = 1"){
  var good=1
}

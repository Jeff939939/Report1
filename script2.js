form11 = document.getElementById("form1");
h11 = document.getElementById("h11");
p11 = document.getElementById("p11");
p22 = document.getElementById("p22"); 
title = document.getElementById("title"); 
p222()
function unlock(){
    console.log("jeff");
    var good=1
    form11.style.display = "none";
    h11.innerHTML = "Peter Dutton annonces that if elected they would instate a ban on social media for under 16's";
    p11.style.display = "none";
    p22.style.display = "block";
    title.innerHTML = "Peter Dutton annonces that if elected they would instate a ban on social media for under 16's";
    document.cookie = "over = 1"
    p221()
    }
    function lock1(){
      console.log("nojeff");
      
      good=0;
      console.log(document.cookie);
      h11.innerHTML = "You are not 16";
      p11.style.display = "none";
      form11.style.display = "none";
      document.cookie = "over = 0"
    }
function p222(){
    console.log("removedp222")
    p22.style.display = "none";
}
function p221(){
    console.log("removedp221")
    p22.style.display = "block";
}


if (document.cookie==="over=1"){
    unlock()
}
else if (document.cookie===""){
        console.log("nocookie");
}
else{
    console.log(document.cookie);
    lock1()
}

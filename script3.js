form11 = document.getElementById("myForm");
h11 = document.getElementById("h11");
p11 = document.getElementById("p11");
p22 = document.getElementById("p22"); 
title = document.getElementById("title"); 
function p222(){
    console.log("removedp222")
    p22.innerHTML = "Your 1 minute read time is over.";
}
function p221(){
    console.log("removedp221")
    p22.style.display = "block";
}
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
    function lock2(){
      if (document.cookie==="over=1"){
            unlock()
        
            console.log("nojeff");
      
            good=0;
            console.log(document.cookie);
            h11.innerHTML = "Your 1 minute time is up";
            p11.style.display = "none";
            form11.style.display = "none";
            p222()
        }
    }


    setTimeout(lock2,60000)

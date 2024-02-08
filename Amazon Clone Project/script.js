let searchInput = document.getElementById("searchInput");
let header = document.getElementById("section-navbar");
let bodyOfHome = document.getElementById("section-body-home");
let headset = document.getElementById("section-headset");
headset.style.display = "none";

function goToHome(){
    window.scrollTo({top:0,behavior:'smooth'});
}

function goToHome2(){
    window.scrollTo(0,0);
}

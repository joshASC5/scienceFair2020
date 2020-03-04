"use strict";
/*
let navBars = document.getElementsByTageName("nav");
let sticky = navBar.offsetTop;
window.onscroll = function(){
    for(let navBar of navBars){
        if(window.pageYOffset >= sticky)
        navBar.classList.add("sticky");
    else
        navBar.classList.remove("sticky");
    }
}
"use strict";

let tabPanels = document.querySelectorAll(".tabPanels");
let tabs = document.querySelectorAll(".tabs");

window.onload = function(){
    for(let i=0; i<tabs.length; i++){
        tabs[i].classList.add("noshow");
        tabPanels[i].onclick = function(){
            toggleTab(tabs[i]);
            if(tabs[i].classList.contains("noshow"))
                tabPanels[i].getElementsByClassName("arrows").innerHTML = "&dtrif;";
            else
                tabPanels[i].getElementsByClassName("arrows").innerHTML = "&rtrif;";
        }
    }
}

function toggleTab(tab){
    if(tab.classList.contains("noshow")){
        tab.classList.remove("noshow");
    }
    else{
        tab.classList.add("noshow");
    }
}
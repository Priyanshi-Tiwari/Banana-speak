var btntranslate=document.querySelector("#btn-translate");

var txtinput= document.querySelector("#txt-input");

function clickHandler() {
    console.log("clicked");
    console.log("input is: "+txtinput.value);
};


btntranslate.addEventListener("click",clickHandler);
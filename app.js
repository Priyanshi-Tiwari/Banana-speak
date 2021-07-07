var btntranslate=document.querySelector("#btn-translate");

var txtinput= document.querySelector("#txt-input");

var outputDiv=document.querySelector("#output-div");

function clickHandler() {
   outputDiv.innerText="akakak"+ txtinput.value
};


btntranslate.addEventListener("click",clickHandler);
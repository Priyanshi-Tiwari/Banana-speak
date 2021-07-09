var btntranslate=document.querySelector("#btn-translate");

var txtinput= document.querySelector("#txt-input");

var outputDiv=document.querySelector("#output-div");

var url="https://api.funtranslations.com/translate/minion.json"
 
function constructURL(input){
    return url+"?"+"text="+input
}

function errorHandler(error){
    console.log("error occured "+ error)
}
function clickHandler() {
    var textinput=txtinput.value
    
        fetch(constructURL(textinput))
        .then(response=>response.json())
        .then(json=>{
        outputDiv.innerText=json.contents.translated
        })
        .catch(errorHandler)
    
   
};


btntranslate.addEventListener("click",clickHandler);
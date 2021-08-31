var btnTranslate = document.querySelector("#Btn");
var txtInputArea = document.querySelector("#inputArea");
var outputValue = document.querySelector("#outputDiv")

var url = "https://api.funtranslations.com/translate/minion.json"

function gettranslationURL(text){
    return url + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error Occured" + error);
    alert("Some error occured please try after some time. ")
}


function clickEventHandler(){
 var inputText = txtInputArea.value
 fetch (gettranslationURL(inputText)) .then(response => response.json())
 .then(json => {
     var output = json.contents.translated
     outputValue.innerText = output;
 })
 .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickEventHandler)
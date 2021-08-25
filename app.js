var btnTranslate = document.querySelector('.btn');
var txtInput = document.querySelector('#txt-input');
var outputDiv = document.querySelector('.output');

var serverURL = "https://api.funtranslations.com/translate/groot.json";

function getTransactionalURL(text){
    return serverURL + "?" + "text=" + text
}

function clickHandler(){
    var inputText = txtInput.value;

    fetch(getTransactionalURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerHTML = translatedText;
    })
}

btnTranslate.addEventListener("click",clickHandler);
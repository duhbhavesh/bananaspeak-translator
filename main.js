let inputTranslateText = document.querySelector("#input-text");
let outputTranslateText = document.querySelector("#output-text");

let btnTranslator = document.querySelector("#btn-translate");
btnTranslator.addEventListener("click", btnClick);

let server = "https://api.funtranslations.com/translate/minion.json";

function btnClick(e) {
  let input = inputTranslateText.value;
  let finalURL = constructURL(input);

  fetch(finalURL)
    .then(response => response.json())
    .then(json => {
      outputTranslateText.innerText = json.contents.translated;
    })
    .catch(() => alert("Uh Oh, Try after some time!"))
}

function constructURL(inputText) {
  let encodedURI = encodeURI(inputText);
  return `${server}? text=${encodedURI}`;
}

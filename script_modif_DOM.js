function changeTitles(){
  const title = document.querySelector("h1.jumbotron-heading");
  const subTitle = document.querySelector(".jumbotron > div > p");
  title.innerHTML = "Ce que j'ai scotché à THP 🩹"
  subTitle.innerHTML = "Chez nous, pas de professeurs, mais un vocal 15 💯, pas de locaux, mais un groupe de travail en pas présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
}
changeTitles();

function changeCallToActions(){
  const btn_1 = document.querySelectorAll(".jumbotron > div > p")[1].childNodes[1];
  const btn_2 = document.querySelectorAll(".jumbotron > div > p")[1].childNodes[3];
  btn_1.textContent = "OK je veux scotcher !";
  btn_2.textContent = "Non, j'ai mieux !";
  btn_1.setAttribute("href", "http://www.thehackingproject.org");
  btn_2.setAttribute("href", "https://devalamer.fr");
}
changeCallToActions();

function changeLogoName(){
  const logo = document.getElementsByTagName('strong')[0];
  logo.textContent = "THP the Hard 🩹 Pain";
  logo.style.fontSize = "2em";
}
changeLogoName();

function populateImage() {
  let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
  const img = document.getElementsByClassName("card-img-top");
  for(let count = 0; count <= img.length-1; count++){
    img[count].setAttribute("src", imagesArray[count]);
  };
}
populateImage();

function deleteCards() {
  
  var cards = document.querySelectorAll(".col-md-4");
  for (let count = 1; count <= 3; count++ ){
    cards[cards.length - count].remove()
  }
}

deleteCards();


function changeCardsText() {
  let textArray = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web", "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XM", "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."];
  const text = document.getElementsByClassName('card-text');
  text[0].textContent = "testing"
  for(let count = 0; count <= 2; count++) {
    text[count].textContent = textArray[count];
  }
}

changeCardsText();

function changeViewButtons() {
  const btn_view = document.querySelectorAll(".btn-group");
  for (let count = 0; count <= btn_view.length - 1; count++){
    btn_view[count].childNodes[1].setAttribute("class", "btn btn-sm btn-success")
  }
}

changeViewButtons();

function addDiv() {
  const div = document.getElementsByClassName('container')[3];
  var newDiv = document.createElement("div");
  newDiv.setAttribute("class", "row");
  div.appendChild(newDiv);
  const moveCard = document.querySelectorAll(".col-md-4")[2];
  moveCard.remove()  
  newContent = moveCard;
  newDiv.appendChild(newContent);
}

addDiv();
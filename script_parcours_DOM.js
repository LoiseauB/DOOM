// Combien y a-t-il d'éléments <p> présents dans la page HTML ? Imprime-le résultat dans la console.
const p = document.getElementsByTagName('p');
console.log(p.length);

//  Quel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans la console.
const element = document.getElementById('coucou');
console.log(element.textContent);

// Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console.
const a = document.getElementsByTagName('a');
console.log(a[2].href);

// Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.
const compte = document.getElementsByClassName('compte-moi');
console.log(compte.length);

// Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.
const li = document.querySelectorAll("li.compte-moi");
console.log(li.length);

// Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console.
const ol = document.querySelectorAll("ol > li.compte-moi");
console.log(ol.length);
/*
Petit jeu de piste à résoudre si possible sans regarder le fichier HTML…

La page contient un seul élément <div>. Celui-ci contient 2 éléments "unordered list" ou <ul>.
Dans le second <ul>, le premier élément de la liste (tag <li>) est caché visuellement de lutilisateur mais toi,
tu peux en récupérer le contenu. Affiche-le dans la console.
*/
let li_2 = document.querySelectorAll("div > ul")[1].childNodes[1].textContent;
console.log(li_2);
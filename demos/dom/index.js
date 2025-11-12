console.log("OK");
/**
 * METHODO
 * 1. Sélectionner l'élement HTMl
 *  à l'aide d'un sélecteur CSS
 * 2. Utiliser la méthode
 *  addEventListener() sur l'élément sélectionné pour ajouter un événement
 * 3. Greffer un événement de type
 *  - click
 *  - mouseenter
 *  - mouseleave
 *  - keyup
 *  - keydown
 *  - keypress
 *  - input
 * 4. Appeler un callback function (fonction de rappel)
 *  - La fonction qui sera appelée au moment ou l'événement aura lieu
 */

function createH1InsideMain() {
  // 1. Séléction d'un élément du HTML à l'aide de l'objet document et la méthode querySelector()
  // 2. On veut ajouter un h1 à l'intérieur du main
  const mainContainer = document.querySelector("main");
  // create new h1
  const h1 = document.createElement("h1");
  h1.innerText = "Demo sur la manupilation du DOM"; // <h1>Demo sur la manipulation du DOM</h1>
  // Add h1 to main
  mainContainer.append(h1);
}

// Au bout de 3 secondes, ma fonction createH1InsideMain sera appelée et exécuté
setTimeout(createH1InsideMain, 3000);

// createNewH1() est la fonction de callback qui sera exécuté au moment du chargement de l'élément main

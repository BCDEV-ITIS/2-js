console.log("OK");
/**
 * METHODO GLOBALE
 * 1. Sélectionner l'élement HTML à l'aide d'un sélecteur CSS
 * 2. Utiliser la méthode addEventListener() de l'objet document sur l'élément sélectionné pour ajouter un événement
 * 3. Greffer un événement, il existe plusieurs événements, +50 différents dont les plus utilisés sont :
 *  - click
 *  - mouseenter
 *  - mouseleave
 *  - keyup
 *  - keydown
 *  - keypress
 *  - input
 *  - change
 *  - submit
 *  - etc.
 * 4. Appeler une callback function (fonction de rappel)
 *  - La fonction qui sera appelée au moment ou l'événement aura lieu (est déclenché)
 */

function createH1InsideMain() {
  // Séléction d'un élément du HTML à l'aide de l'objet document et la méthode querySelector()
  // On veut ajouter un h1 à l'intérieur du main
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

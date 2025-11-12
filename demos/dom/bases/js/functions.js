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

/**
 * Add new paragraphs
 * @param {int} max total of new items
 */
export function addParagraphs(max = 3) {
  for (let i = 1; i <= max; i++) {
    createHTMLElt("main", "p", `Paragraphes ${i}`);
  }
}

/**
 * Create new child elements to parent element
 * @param {String} parentSelector parent CSS selector
 * @param {String} newTag  tag of new child HTML element
 * @param {String} content  inner text of new tag HTML element
 */
export function createHTMLElt(parentSelector, newTag, content) {
  // Séléction d'un élément du HTML à l'aide de l'objet document et la méthode querySelector()
  // On veut ajouter un élément à l'intérieur du parent identifiable via le sélecteur parentSelector
  const wrapper = document.querySelector(parentSelector);
  // create new element
  const newElt = document.createElement(newTag);
  newElt.innerText = content;
  // Add newTag to parent wrapper
  wrapper.append(newElt);
}

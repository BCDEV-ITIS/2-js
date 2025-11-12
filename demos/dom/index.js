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

function createHTMLElt(parentSelector, newTag, content) {
  // Séléction d'un élément du HTML à l'aide de l'objet document et la méthode querySelector()
  // On veut ajouter un élément à l'intérieur du parent identifiable via le sélecteur parentSelector
  const wrapper = document.querySelector(parentSelector);
  // create new element
  const newElt = document.createElement(newTag);
  newElt.innerText = content;
  // Add newTag to parent wrapper
  wrapper.append(newElt);
}

// Au bout de 3 secondes, ma fonction createH1InsideMain sera appelée et exécuté
setTimeout(function () {
    createHTMLElt("main", "h2", "Méthodes du DOM");
}, 3000);
createHTMLElt("main", "h1", "Demo sur la manipulation du DOM");
document.querySelector('h1', 'title-h1', 'heading')
createHTMLElt("main", "button", "Charger les paragrapgres");

// Ajouter des paragraphes au moment du clic sur le bouton

function addParagraphs(max=3) {
    for(let i=1; i <= max; i++) {
        createHTMLElt('main', 'p', `Paragraphes ${i}`)
    }
}

// Greffer un événement clic sur le bouton qui va charger ensuite les paragraphes

// notation fléchée () => équivalent function()
setTimeout(() => {
    const btn = document.querySelector('button')
    btn.addEventListener('click', (e) => {
        console.log('texte du bouton', e.target.textContent)
        addParagraphs()
    })
}, 2500)

function addCssAttributes(selector, id, cssClass) {
    const elt = document.querySelector(selector)
    elt.setAttribute('id', id)
    elt.setAttribute('class', cssClass)
}

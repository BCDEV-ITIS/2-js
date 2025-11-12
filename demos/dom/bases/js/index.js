import { addParagraphs, createHTMLElt } from './functions.js'

// Au bout de 3 secondes, ma fonction createH1InsideMain sera appelée et exécuté
setTimeout(function () {
    createHTMLElt("main", "h2", "Méthodes du DOM");
}, 3000);
createHTMLElt("main", "h1", "Demo sur la manipulation du DOM");
document.querySelector('h1', 'title-h1', 'heading')
createHTMLElt("main", "button", "Charger les paragrapgres");

/**
 * Ajouter des paragraphes au moment du clic sur le bouton
 * Greffer un événement clic sur le bouton qui va charger ensuite les paragraphes
 * notation fléchée () => équivalent function()
 */ 
setTimeout(() => {
    const btn = document.querySelector('button')
    btn.addEventListener('click', (e) => {
        console.log('texte du bouton', e.target.textContent)
        addParagraphs()
    })
}, 2500)


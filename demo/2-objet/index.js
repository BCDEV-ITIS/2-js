/**
 * Tout est objet en JavaScript
 * console.log() : console est un objet js, à partir de l'objet console,
 *  on appel la méthode log()
 * document.writeLn() : document est un objet js, même raisonnement
 */

/**
 * En JS, 2 notations objet
 * 1. La notation objet littéral : utilisation des accolades {}
 * 2. La notation ES6 : notation proche des notations des langages objets (exemple Java, PHP, etc.)
 */

// Notation littérale
let product = {
    // notation clé : valeur pour être plus précise propriété : valeur
    name: 'Ordinateur Portable MacOs',
    description: 'Une description du MacOs',
    price: 1500,
    os: 'MACOS',
    reference: 'MO1024452555xFT',
    isWebcam : true,
    isSecondDisk: false
}

// Pour afficher le prix du produit, on utilise la  notation pointé, product.price
console.log("Prix du produit", product.price)
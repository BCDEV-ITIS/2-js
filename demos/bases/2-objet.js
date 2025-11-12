/**
 * Tout est objet en JavaScript
 * console.log() : console est un objet js, à partir de l'objet console,
 *  on appelle la méthode log()
 * document.writeln() : document est un objet js, même raisonnement
 */

/**
 * En JS, 2 notations objet
 * 1. La notation objet littéral : utilisation des accolades {} avec un couple clé : valeur
 * 2. La notation ES6 : notation proche des notations des langages objets (exemple Java, PHP, etc.)
 */

// Notation littérale
let product = {
    // notation clé : valeur pour être plus précis propriété : valeur
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

// Notation avec ES6 (à partir de 2015)
class Product {
    constructor(label, amount, ref) {
        // Le mot-clé this fait référence à l'objet courant
        // Donc ici à ses propriétés name, price et ref
        this.name = label
        this.price = amount
        this.ref = ref
    }
}
// Pour construire un objet (instancier à partir de sa classe), on utilise l'opérateur new
let productEs61 = new Product('Ordinateur MACOS', 2500, 'ref123456')
let productEs62 = new Product('MS', 1750, 'ref00001')
console.log('objetcs', productEs61, productEs62)
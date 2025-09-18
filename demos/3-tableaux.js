class Product {
    constructor(label, amount, ref, devices = ['clavier', 'souris', 'webcam', 'micro']) {
        // Le mot-clé this fait référence à l'objet courant
        // Donc ici à sa propriété name
        this.name = label
        this.price = amount
        this.ref = ref
        this.devices = devices
    }
}
// par defaut productWithoutDevices.devices = ['clavier', 'souris', 'webcam', 'micro'] données par défaut
const productWithoutDevices = new Product('A', 1, 'ref')
const productWithDevices = new Product('B', '1', 'ref', ['Wifi8', 'Bluetooth'])
// Tableaux = variable qui stocke plusieurs valeurs
// Plusieurs notations sont possibles pour 
let fruits = [
    "banana", // se trouve au rang 0
    "apple", // au rang 1
    "orange" // au rang 2
]

/**
 * Pour connaitre la taille d'un tableau, à partir de la variable stockant les données
 * on utilise la méthode .length()
 *  */

console.log('Taille de mon panier de fruits', fruits.length)

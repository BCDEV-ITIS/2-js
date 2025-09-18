class Product {
    constructor(label, amount, ref, devices = ['clavier', 'souris', 'webcam', 'micro']) {e
        this.name = label
        this.price = amount
        this.ref = ref
        this.devices = devices
    }
}
/**
 * Par defaut productWithoutDevices.devices vaut ['clavier', 'souris', 'webcam', 'micro']
 *  si l'utilisateur ne donne pas la valeur lors de la construction de l'objet ou plus tard
 *  dans l'exécution du code
 * */
const productWithoutDevices = new Product('A', 1, 'ref')
const productWithDevices = new Product('B', '1', 'ref', ['Wifi8', 'Bluetooth'])
// Tableaux = variable qui stocke plusieurs valeurs
// Plusieurs notations sont possibles pour un tableau
let fruits = [
    "banana", // se trouve au rang 0
    "apple", // au rang 1
    "orange" // au rang 2
]

/**
 * Pour connaitre la taille d'un tableau, à partir de la variable stockant le tableau
 *  on utilise la méthode .length()
 **/

console.log('Taille de mon panier de fruits', fruits.length)

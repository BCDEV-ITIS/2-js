// La déclaration des variables en camelCase
const firstName = 'Glodie'
const lastName = 'Tshimini'
let age = '33'
let sex = 'M'
// Avec const
// firstName = 'Eliot' cas d'erreur, on ne peut changer la valeur d'une constante (variable déclaré avec const)
age = 45 // modification de la valeur de l'age
// Affichage
console.log("Nom :", firstName)
console.log("Prénom :", lastName)
console.log("Age :", age)
console.log("Sexe :", sex)
/**
 * Pour obtenir la phrase "Je suis Glodie Tshimini, j'ai 33 ans"
 * On va devoir concaténer (mettre les infos bout à bout)
 * 2 méthodes pour concaténer
 * Méthode 1 : avec l'opérateur + (oldschool)
 * Méthode 2 avec `phrase simple avec des variables comme ça ${variable}`
 */
let phrase = `Je suis ${firstName} ${lastName}, j'ai ${age} ans`
console.log('Ma phrase', phrase)


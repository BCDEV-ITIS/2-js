// La déclaration des variables
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

/**
 * Exercice d'application
 * 1. Stocker une information contenant un langage de programmation
 * 2. Une autre le niveau d'expertise
 * 3. Une dernière avec l'année d'expertise
 * 4. Affichez la phrase suivante dans la console
 *  "Avec la techno PHP, je suis expert, depuis 8 ans"
 * Cf.correction 3-exo-concat
 */

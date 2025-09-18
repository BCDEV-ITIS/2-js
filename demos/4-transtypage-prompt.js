/**
 * 1. Demander l'utilisateur de saisir un nombre
 * 2. Une deuxième
 * 3. La somme
 * 4. J'écris le résultat dans la page HTML
 * PS : Plus tard on utilisera les formulaires pour intéragir avec un user
 */

// Attention tout ce qui est saisi et récupéré par un prompt() est un string
// Pour les opérations mathématiques, il va falloir changer de type
/**
 * Pour connaître le type d'une variable on peut utiliser
 * le mot-clé typeof devant la variable
 * */
const isAdult = true
const me = { name: 'Glodie' }
const tabs = ['hello', 'world']
console.log('type de isAdult', typeof isAdult)
console.log('type de me', typeof me)
console.log('type de tabs', typeof tabs)

// 1 et 2
let nb1 = prompt('Saisissez un nombre') // affiche une fénêtre de dialogue
let nb2 = prompt('Saisissez un autre nombre')
// 3. somme
nb1 = parseInt(nb1)
nb2 = parseInt(nb2)
// 4. Affichage directement dans le HTML
let sum = nb1 + nb2
document.writeln(`Addition de ${nb1} + ${nb2} = ${sum}`)
console.log('type de nb1', typeof nb1)
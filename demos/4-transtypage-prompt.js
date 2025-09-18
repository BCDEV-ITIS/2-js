// Attention tout ce qui est saisi et récupéré par un prompt() est un string
// Pour les opérations mathématiques, il va falloir changer de type
/**
 * Pour connaître le type d'une variable on peut utiliser
 * le mot-clé typeof devant la variable
 * + en js est à la fois un opérateur mathématique et un opérateur de concaténation
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
nb1 = parseInt(nb1) // on caste (change) le type string en number avec parseInt() mais également Number()
nb2 = parseInt(nb2)
// 4. Affichage directement dans le HTML
let sum = nb1 + nb2
document.writeln(`Addition de ${nb1} + ${nb2} = ${sum}`)
console.log('type de nb1', typeof nb1)
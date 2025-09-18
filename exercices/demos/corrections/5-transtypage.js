// 1 et 2 
let n1 = prompt('Saisissez un nombre')
let n2 = prompt('Saisissez un nombre')
// 3 et 4
n1 = Number(n1)
n2 = Number(2)
let sum = n1 + n2
// Bonus : approche simple
let tabNumbers = [n1, n2]
console.log(tabNumbers)
// Bonus : approche avec un tableau vide
let tabsNbs = [] // tableau
tabsNbs[9000] = prompt('Nb1')
tabsNbs[10] = prompt('Nb2')
// Bonus : approche avec un tableau vide utilisation de la méthode push sur un tableau
let tabsNbrs = []
tabsNbrs.push(Number(prompt('Nb1')))
tabsNbrs.push(Number(prompt('Nb2')))
console.log('tabsNbs', tabsNbs)
console.log('tabNumbers', tabNumbers)
console.log('tabsNbrs', tabsNbrs);


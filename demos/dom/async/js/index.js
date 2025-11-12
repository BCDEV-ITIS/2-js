alert('Hello') // fonction synchrone
console.log('World') // fonction synchrone
prompt('Saisissez une valeur') // synchrone

// fonction asynchrone non bloquant, n'attend pas une réponse avant d'exécuter la ligne suivante
// fonction synchrone = bloquant, n'exécute pas la suite tant que le code actuel n'est pas terminé

// Exemples de fonctions asynchrones : les fonctions callbacks de addEventListerner

console.log('Début script avec l\'asynchrone')
document.querySelector('main').addEventListener('click', () => {
    /**
     * tout ce qui est ici est asynchrone cad non bloquant, exécuté uniquement au
     * moment de l'événement click sur le main
     * */
    console.log('callback du click sur main')
})
setTimeout(() => {
    console.log('setTimeout est asynchrone également')
}, 5000)
console.log('FIN')


document.querySelector('button').addEventListener('click', () => {
    /**
     * Asynchrones avec 2 réponses possibles
     * En cas succès, on va utiliser la méthode then() de fetch()
     * En cas d'erreur, on utiliser la méthode catch() de fetch()
     */
    const askDataFromGitHub = fetch('https://api.github.com/users', {
        method: 'GET'
    })
    askDataFromGitHub
    .then((response) => {
        // 1.Toujours vérifier que le serveur vous répond de manière favorable avant de faire la suite
        console.log('response', response)
        if(response.ok && response.status === 200) {
            console.log('OK tout va bien', response)
            // 2. Transformer les informations JSON (string=texte) en objet JS
            // on retourne sous forme de promesse, les données JSON transformés en objet JS
            // Qu'on pourra récupérer dans le prochain then() qu'on va appeler par la suite
           return response.json() 
        } else {
            throw new Error('Erreur lors de la récupération des utilisateurs')
        }
    })
    .then((users) => {
        //3. ici on peut manipuler les objets avec JS et donc exploiter le résultat
        console.log('data', users)
        const main = document.querySelector('main')
        users.forEach(user => {
            const div = document.createElement('div')
            const img = document.createElement('img')
            img.src = user.avatar_url
            // Ajout les classes
            img.classList.add('img')
            const p = document.createElement('p')
            p.innerText = user.login
            div.append(p)
            div.append(img)
            main.append(div)
        })
    })
    .catch(error => console.error('Error fetch GitHub API', error))
})
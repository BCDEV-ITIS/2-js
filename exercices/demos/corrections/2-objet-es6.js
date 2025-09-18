// Phase 1  de déclaration (moule)
class Identity {
    constructor(lastname, firstname, age) {
        this.lastname = lastname
        this.firstname = firstname
        this.age = age
    }
}

// Phase 2 d'appel (pour utiliser ou instancier un objet)
// Ici étant donnée que JavaScript est un langage faiblement typé
// Et qu'il effectue du typage dynamique, il n'y aura pas d'erreur avec les valeurs ci-dessous
const me = new Identity(50, 'Tshimini', 'Glodie')
console.log(me)
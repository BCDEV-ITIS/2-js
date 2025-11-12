## Rappels

Un objet = instance d'une classe
Classe = modèle (moule) qui regroupe des propriétés ou caractéristiques ou attributs (données) + des méthodes  ou opérations (actions ou fonctions)

Un exemple : 
- Une classe Personne avec :
    - propriétés : nom, prenom, age, couleur des yeux, etc
    - méthodes : marcher(), parler(), manger(), etc.
```PHP
class Person {
    constructor(name, age) {
        this.name =  name
        this.age = age
    }

    walk() {}
    speak() {}
}

// objects
const kelian = new Person('Kélian', 20)
const glodie = new Person('Glodie', 33)
glodie.walk()
kelian.speak()
```
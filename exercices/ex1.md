# Exercice 1 : Algos avec les éléments fondamentaux

## Documentations

- [MDN](https://developer.mozilla.org/fr/) : documentation HTML, CSS et JS plus détaillée
- [W3schools](https://www.w3schools.com/) : documentation HTML, CSS et JS

---

## Modalités

- Exécutez les programmes via un navigateur en utilisant la console ou directement côté back-end en utilisant Node.js

---

## Algo 1

1. Déterminez à partir de l'âge si une personne est :
- Enfant (en dessous ou égale à 10 ans)
- Adolescent (entre 11 et 17 ans)
- Majeur (au-dessus de 18 ans)
- Senior (au-dessus de 50 ans)

---

## Algo 2

1. Calculez la moyenne de plusieurs notes

### Spécifications techniques

- Une fonction qui prend en paramètre un tableau

---

## Algo 3

1. Calculez le prix TTC d'un produit

### Spécifications techniques

- Prix hors taxes et taux de la tva en entrée
- La fonction retourne le prix TTC

---

## Algo 4

Affichez en fonction d'une heure, le moment de la journée s'il s'agit :
- Du matin (entre 6 et 12)
- De l'après-midi entre 12h et 18h
- De la soirée entre 18h et 00h
- La nuit entre 00h et 6

---

## Algo 5

En utilisant la boucle while, retournez sous forme d'un tableau numérique tous les codes postaux possibles à partir d'un département comme par exemple le 69.

---

## Algo 6

En utilisant la boucle for, affichez la table de multiplication du chiffre 5.

---

## Algo 7

Écrivez un script qui produit le résultat ci-dessous à partir d'un nombre qu'on prend en entré. Par exemple ici 5 et qui produit ce résultat 122333444455555

---

## Algo 8

Vérifiez qu'une adresse email est au bon format.

### Spécifications techniques

- Utilisez les expressions régulières Regex
- Appuyez-vous sur cette [documentation pour comprendre la démarche des regex](https://fireship.io/lessons/regex-cheat-sheet-js/)
- Utilisez plutôt la fonction [test()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) pour faire les vérifications à la place des fonctions match, search, etc. proposées dans la documentation précédente.

---

## Algo 9

Une fonction qui prend 2 deux nombres en paramètres et les permute.

### Spécification technique

- Votre fonction retourne sous la forme d'un tableau les deux nombres dans l'ordre dans lequel ils ont été saisis. Par exemple

```js
myFn (nb1, nb2) {
  // your code here
  return [nb1, nb2];
}
myFn(2, 3) // [3,2]
```

---

## Algo 10

Créez une fonction qui permet de réaliser la suite de *Fibonacci* : `1, 2, 3, 5, 8, 13, 21, 34, 55, 89` etc.

### Spécifications techniques

- Prenez en paramètre de votre fonction le nombre max permettant d'afficher la suite jusqu'à ce dernier
- Retournez les valeurs de la suite dans un tableau

---

## Algo 11

En utilisant le tableau ci-dessous, comptez le nombre d'éléments du tableau et donnez le nombre total des habitants.

```js
const countries = [67595000,9998000,8417000,1820631,434403,122273500, 82800000];
```

---

## Algo 12

En utilisant la fonction *Math.random()*, remplissez un tableau avec 10 nombres aléatoires compris entre 0 et 100. Puis, testez si le chiffre donné en paramètre est présent dans le tableau aléatoires en retournant true (présent) ou false (absent).

### Spécifications techniques

- [Documentation *Math.random()*](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

---

## Algo 13

En utilisant la fonction *Math.random()*, remplissez un tableau avec 10 nombres aléatoires compris entre 0 et 100.
Répartissez ensuite les valeurs dans deux tableaux distincts. Le premier contiendra les valeurs inférieures à 50 et le second les valeurs supérieures ou égales à 50.

---

## Algo 14

Créez une fonction qui prend en paramètre un tableau de string et retourne le mot le plus petit.

---

## Algo 15

Une fonction qui divise 2 nombres,
lorsque le deuxième nombre est égale à 0, déclenchez une exception.


### Spécifications

- [Documentation pour lever une exception](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/throw)

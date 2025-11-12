# Exercice 3 : consolidation selecteurs CSS

1. Récupérez ses sources [src/ex3.zip](./src/ex3.zip)
2. A partir de ses sources, ajoutez du JavaScript pour sélectionnez les éléments ci-dessous et stockez-les un tableau d'objets contenant une propriété *selector* et *total* correspondants respectivement au selecteur CSS permettant de trouver un élément présent dans le HTML et la taille (total) des éléments trouvées avec ce selecteur.
- Exemple du tableau final attendu 
```js
const elements = [
  {
    selector : 'h1',
    total: 1
  },
  {
    selector: 'li',
    total : 10 // total des éléments trouvées avec le selecteur CSS li
  },
  ...
]
```
Voici les éléments HTML à séléctionner :
1. Les éléments ayant la ***classe items***
2. L'élément ayant l'***id #pic***
3. Un élément ***h1***
4. Tous les ***paragraphes présents dans une div***
5. Seulements les ***paragraphes qui sont les enfants directs d'une div***
6. Le ***paragraphe qui vient juste après un ul***
7. Le ***tableau qui est au même niveau de l'arborescence qu'un ul*** autrement dit le tableau et ul sont des frères (ils ont le même parent direct)
8. ***Tous les éléments***
9. ***Tous les paragraphes*** qui ont la ***classe paragraph***
10. ***Tous les éléments qui ont un id peu importe sa valeur***
11. Tous les éléments sont l'***id se termine par wrapper***
12. Tous les éléments qui ont ***l'attribut disabled***
13. ***Le tout premier paragraphe*** du document HTML
14. ***Le tout dernier paragraphe*** du document HTML
15. Tous les éléments qui ont l'***attribut :checked***
16. ***Tous les id qui commencent par la lettre L***
17. ***N'importe quelle classe qui contient la lettre i*** peu importe sa position
18. L'***input qui a une valeur John***
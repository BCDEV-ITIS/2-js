// 2 façons d'implémenter les conditions en JS

// Méthode 1 : if/elseif/else

/**
 * Dans une structure conditionnelle, seul le code qui vérifie la condition sera exécuté
 * Une condition est évaluée à vrai(true) ou faux(false)
 **/

/**
 * if(votre condition à évaluer ici) {
 *  Si la condition est vraie = si l'évaluation de la condition équivaut à true
 *  Le code enfermé entre les accolades sera exécuté
 *  Dans le cas contraire (la condition n'est pas vérifié), le programme n'exécutera pas le code enfermé entre les accolades ici
 * }
 * else if(une autre condition, évalué uniquement si la condition dans if est fausse) {
 *
 * }
 * else if(idem évaluée si les conditions dans le if et le précédent else if sont fausses) {
 * 
 * }
 *   else {
 *  Pas de condition à évaluer ici, quand on atterit, ça veut dire qu'aucune des conditions précédentes est vraie
 * }
 */
let age = Number(prompt("Votre age"));
// Ici l'ordre des ages est importante sinon on aura toujours Supérieur à 18 ou else si la 3ème évaluation avec 18 était en premier
if (age > 78) {
  console.log("Supérieur à 78 ans");
} else if (age > 48) {
  console.log("supérieur à 48 ans");
} else if (age > 18) {
  console.log("Supérieur 18 ans");
} else {
  console.log("ni > 18, ni > 48 ni > 78");
}

const city = prompt("Votre ville");
// Méthode switch() : bien adapté pour les chaînes caractères dont vous avez la connaissance des valeurs
/**
 * Plus lisible pour l'humain et plus rapide en exécution également
 * Quand on cherche à "gratter" au niveau du code pour avoir des meilleurs performances l'une des techniques
 *  consiste à remplacer des if par des switch
*/ 
switch (city) {
  case "Paris": // sensible à la casse
    console.log("ICI c'est Paris");
    break;
  case "Marseille":
    console.log("Marseille");
    break
    default:
      console.log('Autre que Paris ou Marseille')
    break
}

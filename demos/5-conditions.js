// 2 façons d'implémenter les conditions

// Méthode 1 : if/elseif/else

// Avec les conditions, le code emprumte une seule direction (prend une sortie en fonction si la condition est vérifiée ou non)

/**
 * if(votre condition ici) {
 *  Si la condition est vraie = si l'évaluation de la condition équivaut à true
 *  Le code enfermé entre les accolades sera exécuté
 *  Dans le cas contraire (la condition n'est pas vérifié), le programme n'exécutera pas le code enfermé entre les accolades ici
 * }
 * else if(condition) {
 *  Idem que if
 * }
 * else if(condition) {
 *  Idem que if
 * }
 *   else {
 *  Idem que if
 * }
 */
let age = Number(prompt("Votre age"));
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

/**
 * Définition
 * - Transtyper ou caster = changer de type
 *  Par exemple transformer "3" en 3 ou vis-versa 3 en "3"
 * - On a recours à cette méthode principalement
 *    lorsqu'on récupère des infos la plupart du temps sous-forme
 *    de string et que l'on souhaite effectuer des opérations mathématiques avec
 */

const nb1 = 10 // de type number
let nb2 = "50" // de type string malgré le fait que c'est un nombre
/**
 * ici le + est interpréter par JavaScript en tant qu'opérateur de concaténation
 *  car JS ne sait pas additionner un String avec un nombre
 *  Pour faire l'addition, il faut caster pour avoir 2 données de type Number
 **/
const addition = nb1 + nb2
// Addition des nombres sans transtyper nb2
console.log('Addition', addition) // Résultat 1050
// Addition des nombres avec le transtypage
nb2 = Number(nb2) // nb2 est un nombre ici
console.log('Addition', nb1 + nb2) // Résultat 60
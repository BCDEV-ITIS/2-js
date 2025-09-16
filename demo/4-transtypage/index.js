/**
 * Définition
 * - Transtyper = changer de type
 *  Par exemple transformer "3" en 3 ou vis-versa 3 en "3"
 * - On a recours à cette méthode principalement
 * - lorsqu'on récupère des infos la plupart du temps sous-forme
 *  de string et que l'on souhaite effectuer des opérations mathématiques
 */

const nb1 = 10 // un type number
let nb2 = "50" // un type string malgré le fait que j'ai un nombre
const addition = nb1 + nb2 // ici comprend le + comme un opérateur de concaténation et non d'addition
// Addition des nombres sans transtyper nb2
console.log('Addition', addition) // Résultat 1050
// Addition des nombres avec le transtypage
nb2 = parseInt(nb2) // nb2 est un nombre ici
console.log('Addition', nb1 + nb2) // Résultat 60
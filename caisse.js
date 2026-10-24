const budgetclient = 20000;
const prixcahier = 1500;
const quantitetecahier =20;
const prixstylo =500;
const quantitestylos = 3;
const montantcahiers = prixcahier * quantitetecahier
const montantstylos = prixstylo * quantitestylos
const montanttotal = montantcahiers + montantcahiers

console.log("====CAISSE=====")
console.log('')
console.log(`cahier : ${montantcahiers} FCFA`)
console.log(`stylos : ${montantstylos} FCFA `)
console.log(`Total : ${montanttotal} FCFA`)
console.log("")
if (montanttotal <= budgetclient) {
    console.log("resultat : budget suffisant");
} else {
    console.log("resultat : Budget insuffisant");
}
console.log("")

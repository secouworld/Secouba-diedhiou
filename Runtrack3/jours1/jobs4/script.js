// script.js

// Fonction pour afficher une popup avec le texte "Hello Javascript!"
function afficherPopup() {
    alert("Hello word  iam the boss !");
}
// Fonction pour vérifier si une année est bissextile
function bisextile(annee) {
    // Conditions pour déterminer si une année est bissextile
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
        return true;  // L'année est bissextile
    } else {
        return false; // L'année n'est pas bissextile
    }
}
// script.js

// Fonction pour vérifier si une année est bissextile
function bisextile(annee) {
    // Conditions pour déterminer si une année est bissextile
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
        return true;  // L'année est bissextile
    } else {
        return false; // L'année n'est pas bissextile
    }
}

// Tester la fonction
console.log(bisextile(2020)); // Devrait afficher true
console.log(bisextile(2021)); // Devrait afficher false

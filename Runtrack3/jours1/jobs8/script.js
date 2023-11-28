// script.js

// Fonction pour vérifier si un nombre est premier
function estPremier(nombre) {
    if (nombre <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        }
    }
    return true;
}

// Fonction pour calculer la somme de deux nombres premiers
function sommenombrespremiers(nombre1, nombre2) {
    // Vérification si les deux nombres sont premiers
    if (estPremier(nombre1) && estPremier(nombre2)) {
        // Retourner la somme
        return nombre1 + nombre2;
    } else {
        // Retourner false si au moins l'un des nombres n'est pas premier
        return false;
    }
}

// Exemple d'appel de la fonction avec deux nombres (ajustez selon vos besoins)
var resultat = sommenombrespremiers(5, 7);

// Affichage du résultat
if (resultat !== false) {
    console.log("La somme des nombres premiers est : " + resultat);
} else {
    console.log("Au moins l'un des nombres n'est pas premier.");
}
// Fonction pour afficher une popup avec le texte "Hello Javascript!"
function afficherPopup() {
    alert("Hello word  iam the boss !");
}
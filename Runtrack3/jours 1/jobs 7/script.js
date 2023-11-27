// script.js

// Fonction pour déterminer si une date est un jour travaillé
function jourtravaille(date) {
    // Liste des jours fériés de l'année 2020
    var joursFeries2020 = [
        new Date(2020, 0, 1),  // Jour de l'An
        new Date(2020, 4, 1),  // Fête du Travail
        new Date(2020, 4, 8),  // Victoire 1945
        new Date(2020, 6, 14), // Fête Nationale
        new Date(2020, 7, 15), // Assomption
        new Date(2020, 10, 1), // Toussaint
        new Date(2020, 10, 11),// Armistice 1918
        new Date(2020, 11, 25),// Noël
    ];

    // Formatage de la date pour l'affichage
    var jour = date.getDate();
    var mois = date.getMonth() + 1; // Les mois commencent à 0, donc on ajoute 1
    var annee = date.getFullYear();

    // Vérification si la date est un jour férié
    for (var i = 0; i < joursFeries2020.length; i++) {
        if (date.getTime() === joursFeries2020[i].getTime()) {
            console.log("Le " + jour + " " + mois + " " + annee + " est un jour férié");
            return;
        }
    }

    // Vérification si la date est un samedi ou un dimanche
    var jourSemaine = date.getDay();
    if (jourSemaine === 0 || jourSemaine === 6) {
        console.log("Non, " + jour + " " + mois + " " + annee + " est un week-end");
    } else {
        console.log("Oui, " + jour + " " + mois + " " + annee + " est un jour travaillé");
    }
}

// Exemple d'appel de la fonction avec une date
var dateExemple = new Date(2020, 0, 1); // 1er janvier 2020
jourtravaille(dateExemple);


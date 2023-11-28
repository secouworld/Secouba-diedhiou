// Récupérer l'élément de la barre de progression
var progressBar = document.querySelector('.progress-bar');

// Ajouter un écouteur d'événements pour détecter le défilement
window.addEventListener('scroll', function () {
    // Calculer le pourcentage de défilement
    var scrollPercentage = (document.documentElement.scrollTop + window.innerHeight) / document.documentElement.scrollHeight * 100;

    // Mettre à jour la couleur de la barre de progression en fonction du pourcentage
    updateProgressBarColor(scrollPercentage);
});

// Fonction pour mettre à jour la couleur de la barre de progression
function updateProgressBarColor(percentage) {
    // Définir les couleurs de début et de fin
    var startColor = [0, 255, 0]; // Vert
    var endColor = [255, 0, 0];   // Rouge

    // Calculer la couleur intermédiaire en fonction du pourcentage
    var currentColor = startColor.map(function (channel, index) {
        return channel + Math.round((endColor[index] - channel) * (percentage / 100));
    });

    // Appliquer la couleur à la barre de progression
    progressBar.style.backgroundColor = 'rgb(' + currentColor.join(',') + ')';
}
//Ce code utilise un écouteur d'événements sur le défilement de la fenêtre (scroll). À chaque défilement, 
//il calcule le pourcentage de défilement par rapport à la hauteur totale de la page.
// Ensuite, il utilise cette valeur pour mettre à jour la couleur de la barre de progression en appelant la fonction updateProgressBarColor().
// La couleur de la barre de progression évoluera graduellement du vert au rouge à mesure que vous faites défiler la page. 
//Vous pouvez ajuster les couleurs de début et de fin selon vos préférences.






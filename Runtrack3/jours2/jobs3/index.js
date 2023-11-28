// Initialiser le compteur à 0
var compteur = 0;

function addone() {
    // Incrémenter le compteur à chaque clic sur le bouton
    compteur++;

    // Mettre à jour le contenu du paragraphe avec l'ID "compteur"
    var compteurElement = document.getElementById("compteur");
    
    // Vérifier si l'élément existe
    if (compteurElement) {
        // Mettre à jour le texte avec la nouvelle valeur du compteur
        compteurElement.textContent = compteur;
    } else {
        console.error("L'élément avec l'ID 'compteur' n'a pas été trouvé.");
    }
}

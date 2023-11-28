// Récupérer l'élément textarea par son ID
var keyloggerTextarea = document.getElementById("keylogger");

// Ajouter un écouteur d'événements pour chaque touche tapée
document.addEventListener("keydown", function (event) {
    // Récupérer la lettre tapée
    var lettre = event.key.toLowerCase();

    // Vérifier si la lettre est de a à z
    if (/^[a-z]$/.test(lettre)) {
        // Ajouter la lettre une ou deux fois selon le focus
        if (document.activeElement === keyloggerTextarea) {
            keyloggerTextarea.value += lettre + lettre;
        } else {
            keyloggerTextarea.value += lettre;
        }
    }
});

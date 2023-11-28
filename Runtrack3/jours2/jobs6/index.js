// Séquence de touches Konami
var konamiCode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'KeyB',
    'KeyA'
];

// Stocker les touches enfoncées par l'utilisateur
var pressedKeys = [];

// Ajouter un écouteur d'événements pour détecter les touches pressées
document.addEventListener('keydown', function (event) {
    // Ajouter la touche à la liste des touches enfoncées
    pressedKeys.push(event.code);

    // Vérifier si la séquence correspond au code Konami
    if (checkKonamiCode()) {
        // Appliquer les styles spécifiques à La Plateforme_
        applyKonamiStyles();
    }
});

// Fonction pour vérifier si la séquence de touches correspond au code Konami
function checkKonamiCode() {
    // Tronquer la liste des touches enfoncées pour correspondre à la longueur du code Konami
    pressedKeys = pressedKeys.slice(-konamiCode.length);

    // Vérifier si la séquence de touches correspond au code Konami
    return JSON.stringify(pressedKeys) === JSON.stringify(konamiCode);
}

// Fonction pour appliquer les styles spécifiques à La Plateforme_
function applyKonamiStyles() {
    // Récupérer le body
    var body = document.body;

    // Ajouter une classe pour styliser la page
    body.classList.add('konami-styled');
}

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ma Page PHP</title>
    <script>
        // Fonction pour afficher une popup avec le texte "Hello Javascript!"
        function afficherPopup() {
            alert("Hello Javascript!");
        }

        // Fonction pour afficher les jours de la semaine
        function afficherjourssemaines() {
            var jourssemaines = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

            for (var i = 0; i < jourssemaines.length; i++) {
                console.log(jourssemaines[i]);
            }
        }
    </script>
</head>
<body>
    <h1>Bienvenue sur ma page PHP</h1>

    <!-- Bouton pour afficher la popup -->
    <button onclick="afficherPopup()">Afficher Popup</button>

    <!-- Appel de la fonction pour afficher les jours de la semaine -->
    <script>
        afficherjourssemaines();
    </script>
</body>
</html>

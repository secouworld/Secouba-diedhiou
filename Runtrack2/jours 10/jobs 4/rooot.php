<?php
// Informations de connexion à la base de données
$serveur = "localhost"; // ou l'adresse IP de votre serveur MySQL
$utilisateur = "root";
$motDePasse = ""; // pas de mot de passe dans votre cas
$baseDeDonnees = "jour09";

// Connexion à la base de données
$connexion = new mysqli($serveur, $utilisateur, $motDePasse, $baseDeDonnees);

// Vérifier la connexion
if ($connexion->connect_error) {
    die("La connexion a échoué : " . $connexion->connect_error);
}

// Requête SQL pour récupérer l'ensemble des informations des étudiants dont le prénom commence par un "T"
$sql = "SELECT * FROM etudiants WHERE prenom LIKE 'T%'";
$resultat = $connexion->query($sql);

// Vérifier si la requête a réussi
if ($resultat) {
    // Afficher le tableau HTML
    echo "<table border='1'>
            <thead>
                <tr>";
    
    // Afficher les noms des champs dans la première ligne (thead)
    while ($infoChamp = $resultat->fetch_field()) {
        echo "<th>" . $infoChamp->name . "</th>";
    }

    echo "</tr>
        </thead>
        <tbody>";

    // Afficher les données dans les lignes suivantes (tbody)
    while ($ligne = $resultat->fetch_assoc()) {
        echo "<tr>";
        foreach ($ligne as $valeur) {
            echo "<td>" . htmlspecialchars($valeur) . "</td>";
        }
        echo "</tr>";
    }

    echo "</tbody>
        </table>";

    // Libérer le résultat
    $resultat->free();
} else {
    // Afficher une erreur si la requête a échoué
    echo "Erreur dans la requête : " . $connexion->error;
}

// Fermer la connexion à la base de données
$connexion->close();
?>

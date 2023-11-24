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

// Requête SQL pour sélectionner le prénom, le nom et la date de naissance des étudiants nés entre 1998 et 2018
$sql = "SELECT prenom, nom, naissance FROM etudiants WHERE YEAR(naissance) BETWEEN 1998 AND 2018";
$resultat = $connexion->query($sql);

// Vérifier si la requête a réussi
if ($resultat) {
    // Afficher le tableau HTML
    echo "<table border='1'>
            <thead>
                <tr>
                    <th>prenom</th>
                    <th>nom</th>
                    <th>naissance</th>
                </tr>
            </thead>
            <tbody>";

    // Afficher les données dans les lignes suivantes (tbody)
    while ($ligne = $resultat->fetch_assoc()) {
        echo "<tr>
                <td>" . htmlspecialchars($ligne['prenom']) . "</td>
                <td>" . htmlspecialchars($ligne['nom']) . "</td>
                <td>" . htmlspecialchars($ligne['naissance']) . "</td>
              </tr>";
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

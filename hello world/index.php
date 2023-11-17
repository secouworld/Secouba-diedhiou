<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">  
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">
<title>index</title>
</head>
<header>
        <h1>la platete forme</h1>
        <nav>
            <ul>
                <li><a href="index.html">Accueil</a></li>
                <li><a href="produit.html">Produit</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>


    <div class="container">
        <h2>Bienvenue sur notre site La plateforme </h2>
        <p>Ce site propose cours exceptionnelle.</p>

<body>

<form action="traitement.php" method="post" class="formCol">
    <label for="nom">Quel est votre nom : </label>
    <input type="text" name="nom" id="nom">

    <label for="prenom">Quel est votre prénom : </label>
    <input type="text" name="prenom" id="prenom">

    <label for="age">Quel est votre âge : </label>
    <input type="number" name="age" id="age">

    <input type="submit" value="Envoyer">
</form>

<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST["nom"];
    $prenom = $_POST["prenom"];
    $age = $_POST["age"];

    echo "Nom : $nom<br>";
    echo "Prénom : $prenom<br>";
    echo "Âge : $age<br>";
}
    var_dump($_REQUEST)
?>
</div>


<footer>
        <p>&copy; 2023 Mon Site Commercial. Tous droits réservés.</p>
    
    </footer>
</body>
</html>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Occurrences de caractère</title>
</head>
<body>

<?php
function occurrences($str, $char) {
    
    return substr_count($str, $char);
}


$texte = "Bonjour";
$caractere = "o";
$nombreOccurrences = occurrences($texte, $caractere);

echo "<p>Le nombre d'occurrences de '$caractere' dans '$texte' est : $nombreOccurrences</p>";
?>

</body>
</html>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculatrice</title>
</head>
<body>

<?php
function calcule($a, $operation, $b) {
    switch ($operation) {
        case '+':
            return $a + $b;
        case '-':
            return $a - $b;
        case '*':
            return $a * $b;
        case '/':

            if ($b != 0) {
                return $a / $b;
            } else {
                return "Division par zéro impossible";
            }
        case '%':

            if ($b != 0) {
                return $a % $b;
            } else {
                return "Division par zéro impossible";
            }
        default:
            return "Opération non valide";
    }
}

// Vérification si le formulaire a été soumis
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupération des valeurs du formulaire
    $nombre1 = isset($_POST['nombre1']) ? $_POST['nombre1'] : 0;
    $operation = isset($_POST['operation']) ? $_POST['operation'] : '+';
    $nombre2 = isset($_POST['nombre2']) ? $_POST['nombre2'] : 0;

    // Appel de la fonction calcule avec les valeurs du formulaire
    $resultat = calcule($nombre1, $operation, $nombre2);

    // Affichage du résultat
    echo "Résultat de l'opération : $resultat";
}
?>

<!-- Formulaire pour saisir les valeurs -->
<form method="post" action="">
    <label for="nombre1">NombreX:</label>
    <input type="text" name="nombre1" id="nombre1" value="<?php echo isset($nombre1) ? htmlspecialchars($nombre1) : ''; ?>" required>

    <label for="operation">Opération :</label>
    <select name="operation" id="operation">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
        <option value="%">%</option>
    </select>

    <label for="nombre2">Nombrex:</label>
    <input type="text" name="nombre2" id="nombre2" value="<?php echo isset($nombre2) ? htmlspecialchars($nombre2) : ''; ?>" required>

    <button type="submit">Calculer</button>
</form>

</body>
</html>

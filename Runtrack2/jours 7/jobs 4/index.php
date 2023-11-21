<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello LaPlateforme</title>
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

$resultatAddition = calcule(10, '+', 5);
$resultatSoustraction = calcule(8, '-', 3);
$resultatMultiplication = calcule(6, '*', 4);
$resultatDivision = calcule(10, '/', 2);
$resultatModulo = calcule(13, '%', 5);

echo "Résultat de l'addition : $resultatAddition<br>";
echo "Résultat de la soustraction : $resultatSoustraction<br>";
echo "Résultat de la multiplication : $resultatMultiplication<br>";
echo "Résultat de la division : $resultatDivision<br>";
echo "Résultat du modulo : $resultatModulo<br>";
?>
</body>
</html>

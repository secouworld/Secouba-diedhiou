<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>index.php</title>
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
$resultatMultiplication = calcule(8, '*', 3);

echo "<p>Résultat de l'addition : $resultatAddition</p>";
echo "<p>Résultat de la multiplication : $resultatMultiplication</p>";
?>

</body>
</html>

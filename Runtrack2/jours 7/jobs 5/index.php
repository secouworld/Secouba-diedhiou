<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leet Speak Converter</title>
</head>
<body>

<?php
function leetSpeak($str) {
   
    $str = str_replace(['A', 'B', 'E', 'G', 'L', 'S', 'T', 'a', 'b', 'e', 'g', 'l', 's', 't'],
                       ['4', '8', '3', '6', '1', '5', '7', '4', '8', '3', '6', '1', '5', '7'], $str);
    return $str;
}

$texte = "Leet Speak is awesome!";
$resultatLeetSpeak = leetSpeak($texte);

echo "<p>Texte original : $texte</p>";
echo "<p>Leet Speak : $resultatLeetSpeak</p>";
?>

</body>
</html>

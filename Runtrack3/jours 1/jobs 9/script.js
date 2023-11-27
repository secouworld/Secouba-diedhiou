// script.js

// Fonction de tri personnalisée
function tri(numbers, order) {
    if (order === "asc") {
        // Tri ascendant
        for (var i = 0; i < numbers.length - 1; i++) {
            for (var j = i + 1; j < numbers.length; j++) {
                if (numbers[i] > numbers[j]) {
                    // Échanger les éléments si nécessaire
                    var temp = numbers[i];
                    numbers[i] = numbers[j];
                    numbers[j] = temp;
                }
            }
        }
    } else if (order === "desc") {
        // Tri descendant
        for (var i = 0; i < numbers.length - 1; i++) {
            for (var j = i + 1; j < numbers.length; j++) {
                if (numbers[i] < numbers[j]) {
                    // Échanger les éléments si nécessaire
                    var temp = numbers[i];
                    numbers[i] = numbers[j];
                    numbers[j] = temp;
                }
            }
        }
    } else {
        // Gérer les cas où l'ordre n'est ni "asc" ni "desc"
        console.error("L'ordre doit être 'asc' ou 'desc'");
    }

    return numbers;
}

// Exemple d'appel de la fonction avec un tableau de nombres et l'ordre
var numbersArray = [5, 2, 8, 1, 7];
var orderedArrayAsc = tri(numbersArray.slice(), "asc");
var orderedArrayDesc = tri(numbersArray.slice(), "desc");

// Affichage des résultats
console.log("Tableau trié en ordre ascendant :", orderedArrayAsc);
console.log("Tableau trié en ordre descendant :", orderedArrayDesc);

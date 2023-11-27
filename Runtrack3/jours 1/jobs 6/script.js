// script.js

// Fonction FizzBuzz
function fizzbuzz() {
    // Boucle for pour les nombres de 1 à 151
    for (var i = 1; i <= 151; i++) {
        // Condition pour vérifier les multiples de 3 et de 5 en premier
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Appel de la fonction
fizzbuzz();

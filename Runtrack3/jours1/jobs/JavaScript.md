<style>
    td {
        font-size: 14px;
    }
</style>

![](https://hackmd.io/_uploads/rySCcNZ2n.png)

## Qu'est-ce que JavaScript

JavaScript est un langage de programmation populaire utilisé pour créer des sites Web interactifs et dynamiques. Il a été créé en 1995 et est souvent abrégé en "JS".

JS est un langage interprété, ce qui signifie que le code est exécuté directement dans le navigateur Web, sans nécessiter de compilation préalable. Cela rend JS très flexible et facile à utiliser pour les développeurs Web.

Il est souvent utilisé pour ajouter des fonctionnalités interactives aux pages Web, telles que des animations, des effets visuels, des formulaires dynamiques, des fenêtres contextuelles, des mises à jour en temps réel, etc. En outre, JS est souvent utilisé côté serveur avec Node.js pour créer des applications Web entièrement fonctionnelles et des API.

En résumé, JavaScript est un langage de programmation polyvalent et puissant qui est devenu essentiel pour la création de sites Web modernes et interactifs.

## Stocker des données

En JavaScript, il existe plusieurs moyens de stocker des données. Voici les principaux :

- **Variables:** Les variables permettent de stocker des valeurs. Elles peuvent être déclarées avec les mots-clés "var", "let" ou "const". Par exemple :

```javascript
var age = 30;
let nom = "Jean";
const PI = 3.14;

```

- **Tableaux:** Les tableaux sont des objets qui permettent de stocker plusieurs valeurs dans une seule variable. Ils peuvent être déclarés de plusieurs façons, par exemple :

```javascript
let fruits = ["pomme", "banane", "orange"];
let nombres = new Array(1, 2, 3);

```

- **Objets:** Les objets sont des collections de propriétés. Chaque propriété a un nom et une valeur. Ils peuvent être déclarés de plusieurs façons, par exemple :

```javascript
let personne = { nom: "Jean", age: 30 };
let voiture = new Object();
voiture.marque = "Renault";
voiture.modele = "Clio";

```

Ces exemples ne sont pas exhaustifs, mais ils donnent une idée des différents moyens de stocker des données en JavaScript.

### Les variables var, let et const

En JavaScript, il est possible de déclarer des variables avec les mots-clés var, let et const.

- La déclaration d'une variable avec `var` crée une variable qui est accessible dans l'ensemble de la portée de la fonction ou du fichier dans lequel elle est déclarée. Cependant, cette portée peut varier selon le contexte dans lequel la variable est utilisée, ce qui peut parfois entraîner des erreurs difficiles à comprendre.

- La déclaration d'une variable avec `let` crée une variable qui est accessible uniquement dans le bloc de code dans lequel elle est déclarée, comme une boucle for ou un bloc if. Cela peut aider à prévenir les erreurs causées par des variables qui ont une portée plus large que nécessaire.

- La déclaration d'une variable avec `const` crée une variable qui est accessible uniquement dans le bloc de code dans lequel elle est déclarée, tout comme `let`. Cependant, contrairement à `let` et `var`, la valeur de `const` ne peut pas être modifiée après sa première affectation. Cela permet d'assurer que la variable ne sera pas accidentellement modifiée dans le reste du code.

Il est généralement recommandé d'utiliser `const` autant que possible pour les valeurs qui ne changent pas, puis `let` pour les valeurs qui peuvent être modifiées. L'utilisation de `var` est déconseillée sauf dans des situations spécifiques où sa portée plus large est nécessaire.

:::spoiler let VS var
{%hackmd @alternative-rvb/javascript-var-vs-let %}
:::

### Types et structures de données JavaScript

En JavaScript, une variable peut avoir plusieurs types. Voici les principaux types de variables en JavaScript, avec un exemple de chaque type et son `typeof` associé :

1. **Nombre (*Number*) :** Les nombres sont utilisés pour représenter des valeurs numériques. Ils peuvent être entiers ou décimaux.

```javascript
let age = 25.9;
console.log(typeof age); //affiche "number"
```

2. **Chaîne de caractères (*String*) :** Les chaînes de caractères sont utilisées pour représenter des séquences de caractères.

```javascript
let nom = "Jean";
console.log(typeof nom); //affiche "string"
```

3. **Booléen (*Boolean*) :** Les booléens sont utilisés pour représenter des valeurs de vérité (vrai/faux).

```javascript
let estMajeur = true;
console.log(typeof estMajeur); //affiche "boolean"
```

4. **Tableau (*Array*) :** Les tableaux sont utilisés pour stocker des collections de données, sous forme de liste ordonnée.

```javascript
let nombres = [1, 2, 3];
console.log(typeof nombres); //affiche "object"
```

5. **Objet (*Object*) :** Les objets sont utilisés pour stocker des collections de données, sous forme de paires clé/valeur.

```javascript
let personne = {nom: "Dupont", age: 30};
console.log(typeof personne); //affiche "object"
```

6. **Fonction (*Function*) :** Les fonctions sont utilisées pour stocker des blocs de code qui peuvent être appelés et exécutés à plusieurs reprises.

```javascript
function direBonjour() {
    console.log("Bonjour !");
}
console.log(typeof direBonjour); //affiche "function"
```

7. **Null :** La valeur null est utilisée pour représenter l'absence de valeur.

```javascript
let valeurNull = null;
console.log(typeof valeurNull); //affiche "object"
```

8. **Undefined :** La valeur undefined est utilisée pour représenter une variable qui n'a pas été initialisée.

```javascript
let valeurNonDefinie;
console.log(typeof valeurNonDefinie); //affiche "undefined"
```

:::spoiler Typage est dynamique
{%hackmd @alternative-rvb/javascript-typage-dynamique %}
:::

## Les opérateurs

Voici quelques exemples d'opérateurs de comparaison et de logique en JavaScript :

### les opérateurs arithmétiques

En JavaScript, les opérateurs arithmétiques sont des symboles utilisés pour effectuer des opérations mathématiques sur des valeurs numériques. Voici les principaux opérateurs arithmétiques en JavaScript :

1. Addition (+) : Cet opérateur permet d'additionner deux valeurs ou variables.

_Exemple :_

```javascript
let a = 5;
let b = 3;
let result = a + b; // Le résultat sera 8

```

2. Soustraction (-) : Cet opérateur permet de soustraire une valeur d'une autre.

_Exemple :_

```javascript
let a = 10;
let b = 4;
let result = a - b; // Le résultat sera 6

```

3. Multiplication (\*) : Cet opérateur permet de multiplier deux valeurs ou variables.

_Exemple :_

```javascript
let a = 6;
let b = 7;
let result = a * b; // Le résultat sera 42

```

4. Division (/) : Cet opérateur permet de diviser une valeur par une autre.

_Exemple :_

```javascript
let a = 20;
let b = 5;
let result = a / b; // Le résultat sera 4

```

5. Modulo (%) : Cet opérateur retourne le reste de la division de la première valeur par la seconde.

Exemple :

```javascript
let a = 17;
let b = 5;
let result = a % b; // Le résultat sera 2 (car 17 ÷ 5 = 3 reste 2)

```

6. Incrémentation (++) : Cet opérateur ajoute 1 à la valeur d'une variable.

_Exemple :_

```javascript
let a = 10;
a++; // La valeur de 'a' sera maintenant 11

```

7. Décrémentation (--) : Cet opérateur soustrait 1 à la valeur d'une variable.

_Exemple :_

```javascript
let a = 7;
a--; // La valeur de 'a' sera maintenant 6

```

Il est important de noter que les opérateurs arithmétiques respectent les règles de priorité habituelles des mathématiques. On peut également utiliser des parenthèses pour contrôler l'ordre des opérations.

_Exemple :_

```javascript
let result = 10 + 5 * 2; // Le résultat sera 20 (et non 30) car la multiplication est effectuée en premier.
let result2 = (10 + 5) * 2; // Le résultat sera 30 car l'addition est effectuée en premier grâce aux parenthèses.

```

Assurez-vous de bien comprendre l'ordre des opérations si vous utilisez des expressions arithmétiques complexes dans vos programmes.

### Les opérateurs de comparaison et de relation

1. **Opérateur de supériorité (`>`) :** Vérifie si la valeur de gauche est strictement supérieure à la valeur de droite.

```javascript
console.log(5 > 3); // true
console.log(10 > 20); // false
console.log("abc" > "def"); // false (comparaison alphabétique basée sur l'ordre des caractères)

```

2. **Opérateur d'infériorité (`<`) :** Vérifie si la valeur de gauche est strictement inférieure à la valeur de droite.

```javascript
console.log(5 < 3); // false
console.log(10 < 20); // true
console.log("abc" < "def"); // true (comparaison alphabétique basée sur l'ordre des caractères)

```

3. **Opérateur de supériorité ou égalité (`>=`) :** Vérifie si la valeur de gauche est supérieure ou égale à la valeur de droite.

```javascript
console.log(5 >= 3); // true
console.log(10 >= 20); // false
console.log("abc" >= "def"); // false (comparaison alphabétique basée sur l'ordre des caractères)
console.log("abc" >= "abc"); // true (comparaison alphabétique basée sur l'ordre des caractères)

```

4. **Opérateur d'infériorité ou égalité (`<=`) :** Vérifie si la valeur de gauche est inférieure ou égale à la valeur de droite.

```javascript
console.log(5 <= 3); // false
console.log(10 <= 20); // true
console.log("abc" <= "def"); // true (comparaison alphabétique basée sur l'ordre des caractères)
console.log("abc" <= "abc"); // true (comparaison alphabétique basée sur l'ordre des caractères)

```

5. **Opérateur d'égalité (`==`) :** Vérifie si deux valeurs sont égales, en effectuant une conversion de type si nécessaire.

```javascript
console.log(5 == "5"); // true (conversion de la chaîne en nombre)
console.log(true == 1); // true (conversion de booléen en nombre)
console.log(null == undefined); // true

```

6. **Opérateur de non-égalité (`!=`) :** Vérifie si deux valeurs sont différentes, en effectuant une conversion de type si nécessaire.

```javascript
console.log(5 != "5"); // false (conversion de la chaîne en nombre)
console.log(true != 1); // false (conversion de booléen en nombre)
console.log(null != undefined); // false

```

7. **Opérateur de strict égalité (`===`) :** Vérifie si deux valeurs sont égales, sans effectuer de conversion de type.

```javascript
console.log(5 === "5"); // false (types différents)
console.log(true === 1); // false (types différents)
console.log(null === undefined); // false

```

8. **Opérateur de strict non-égalité (`!==`) :** Vérifie si deux valeurs sont différentes, sans effectuer de conversion de type.

```javascript
console.log(5 !== "5"); // true (types différents)
console.log(true !== 1
```

### Les opérateurs logiques

1. **ET logique (`&&`) :** Renvoie `true` si toutes les expressions sont évaluées à `true`.

```javascript
console.log(true && true); // true
console.log(true && false); // false
console.log(5 > 3 && 10 < 20); // true

```

2. **OU logique (`||`) :** Renvoie `true` si au moins l'une des expressions est évaluée à `true`.

```javascript
console.log(true || false); // true
console.log(false || false); // false
console.log(5 > 10 || 10 < 20); // true

```

3. **NON logique (`!`) :** Inverse le résultat de l'expression.

```javascript
console.log(!true); // false
console.log(!false); // true
console.log(!(5 > 10)); // true

```

Ces exemples couvrent les opérateurs de comparaison les plus couramment utilisés ainsi que les opérateurs logiques de base. Vous pouvez les combiner et les utiliser dans des conditions, des boucles et d'autres structures de contrôle pour effectuer des comparaisons et des opérations logiques plus complexes en JavaScript.


## Structure de contrôle et tests

Voici une brève présentation de chacune de ces structures de contrôle en JavaScript avec des exemples :

### if-else

La structure de contrôle `if-else` permet d'exécuter un bloc de code si une condition est vraie, sinon d'exécuter un autre bloc de code. Voici un exemple :

```javascript
let age = 18;

if (age >= 18) {
  console.log("Vous êtes majeur !");
} else {
  console.log("Vous êtes mineur !");
}

```

:::spoiler Exemples supplémentaires 
Voici quelques exemples de conditions en JavaScript, y compris un exemple utilisant l'opérateur de non-égalité (`!=`) :

**Exemple 1 - Condition `if` :**

```javascript
var age = 18;

if (age >= 18) {
  console.log("Vous êtes majeur !");
}

```

Dans cet exemple, nous utilisons la condition `if` pour vérifier si la variable `age` est supérieure ou égale à 18. Si c'est le cas, le message "Vous êtes majeur !" est affiché dans la console.

**Exemple 2 - Condition `if-else` :**

```javascript
var temperature = 25;

if (temperature > 30) {
  console.log("Il fait chaud !");
} else {
  console.log("La température est modérée.");
}

```

Dans cet exemple, nous utilisons la condition `if-else` pour vérifier si la variable `temperature` est supérieure à 30. Si c'est le cas, le message "Il fait chaud !" est affiché. Sinon, le message "La température est modérée." est affiché.

**Exemple 3 - Condition `else if` :**

```javascript
var note = 85;

if (note >= 90) {
  console.log("Très bien !");
} else if (note >= 80) {
  console.log("Bien !");
} else if (note >= 70) {
  console.log("Assez bien !");
} else {
  console.log("Vous pouvez faire mieux.");
}

```

Dans cet exemple, nous utilisons une série de conditions `else if` pour évaluer la variable `note` et afficher un message en fonction de la plage dans laquelle elle se situe. Selon la valeur de `note`, le message correspondant est affiché.

**Exemple avec la non égalité :**

```javascript
var couleur = "rouge";

if (couleur != "bleu") {
  console.log("La couleur n'est pas bleue !");
}

```

Dans cet exemple, nous utilisons l'opérateur de non-égalité (`!=`) pour vérifier si la variable `couleur` n'est pas égale à "bleu". Si ce n'est pas le cas, le message "La couleur n'est pas bleue !" est affiché dans la console.

Il existe plusieurs opérateurs de comparaison et de condition en JavaScript (comme `==`, `===`, `<`, `>`, `<=`, `>=`, etc.) qui permettent de créer des conditions plus complexes. Vous pouvez les combiner avec des opérateurs logiques (`&&`, `||`, `!`) pour effectuer des évaluations conditionnelles plus avancées.
:::

:::spoiler Les opérateurs ternaires 
{%hackmd @alternative-rvb/javascript-oprerateur-ternaire %}
:::

### switch-case

La structure de contrôle `switch-case` permet d'exécuter un bloc de code en fonction de la valeur d'une variable. Voici un exemple :

```javascript
let day = 3;
let dayName = "";

switch (day) {
  case 1:
    dayName = "Lundi";
    break;
  case 2:
    dayName = "Mardi";
    break;
  case 3:
    dayName = "Mercredi";
    break;
  default:
    dayName = "Jour inconnu";
}

console.log(dayName); // "Mercredi"

```

:::spoiler Exemples supplémentaires
Voici quelques exemples de l'utilisation de l'instruction `switch...case` en JavaScript :

**Exemple 1 - Jours de la semaine :**

```javascript
var jour = "lundi";

switch (jour) {
  case "lundi":
    console.log("C'est le premier jour de la semaine.");
    break;
  case "mardi":
    console.log("C'est le deuxième jour de la semaine.");
    break;
  case "mercredi":
    console.log("C'est le troisième jour de la semaine.");
    break;
  case "jeudi":
    console.log("C'est le quatrième jour de la semaine.");
    break;
  case "vendredi":
    console.log("C'est le cinquième jour de la semaine.");
    break;
  case "samedi":
  case "dimanche":
    console.log("C'est le week-end !");
    break;
  default:
    console.log("Jour non valide.");
}

```

Ce code utilise un `switch` pour vérifier la valeur de la variable `jour` et exécute le bloc de code correspondant au cas correspondant. Dans cet exemple, si `jour` est "lundi", il affichera "C'est le premier jour de la semaine." Si `jour` est "samedi" ou "dimanche", il affichera "C'est le week-end !" Si la valeur de `jour` ne correspond à aucun des cas, il exécutera le bloc de code par défaut et affichera "Jour non valide."

**Exemple 2 - Note scolaire :**

```javascript
var note = 75;

switch (true) {
  case (note >= 90 && note <= 100):
    console.log("Très bien !");
    break;
  case (note >= 80 && note < 90):
    console.log("Bien !");
    break;
  case (note >= 70 && note < 80):
    console.log("Satisfaisant !");
    break;
  case (note >= 60 && note < 70):
    console.log("Passable !");
    break;
  case (note < 60):
    console.log("Insuffisant !");
    break;
  default:
    console.log("Note invalide.");
}

```

Dans cet exemple, la note est vérifiée par une série de cas. Selon la plage dans laquelle se situe la note, un message approprié est affiché. Si la note est entre 90 et 100, il affichera "Très bien !". Si la note est entre 80 et 89, il affichera "Bien !", et ainsi de suite. Si la note ne correspond à aucun des cas, le bloc de code par défaut s'exécute et affiche "Note invalide."

Ces exemples illustrent l'utilisation de l'instruction `switch...case` pour effectuer différentes actions en fonction de différentes valeurs.
:::

### while

La structure de contrôle `while` permet d'exécuter un bloc de code tant qu'une condition est vraie. Voici un exemple :

```javascript
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

```

:::spoiler Exemples supplémentaires 
Voici quelques exemples d'utilisation de la boucle `while` en JavaScript :

**Exemple 1 - Compteur :**

```javascript
var compteur = 1;

while (compteur <= 5) {
  console.log("Compteur : " + compteur);
  compteur++;
}

```

Ce code utilise une boucle `while` pour afficher les valeurs du compteur de 1 à 5. Tant que la condition `compteur <= 5` est vraie, le bloc de code à l'intérieur de la boucle est exécuté. Le compteur est affiché à chaque itération, puis il est incrémenté de 1 à l'aide de `compteur++`. La boucle s'exécute jusqu'à ce que `compteur` atteigne 6, moment où la condition devient fausse et la boucle se termine.

**Exemple 2 - Saisie utilisateur :**

```javascript
var motDePasse = "";
var motDePasseAttendu = "secret";

while (motDePasse !== motDePasseAttendu) {
  motDePasse = prompt("Entrez le mot de passe :");
}

console.log("Mot de passe correct !");

```

Dans cet exemple, la boucle `while` est utilisée pour demander à l'utilisateur de saisir un mot de passe. La boucle continue de s'exécuter tant que le mot de passe saisi (`motDePasse`) n'est pas égal au mot de passe attendu (`motDePasseAttendu`). L'utilisateur est invité à saisir le mot de passe à l'aide de la fonction `prompt()`. Une fois que l'utilisateur entre le mot de passe correct, la boucle se termine et le message "Mot de passe correct !" est affiché.

**Exemple 3 - Génération de nombres aléatoires :**

```javascript
var nombreAleatoire = Math.floor(Math.random() * 10) + 1;

while (nombreAleatoire !== 5) {
  console.log(nombreAleatoire);
  nombreAleatoire = Math.floor(Math.random() * 10) + 1;
}

console.log("Le nombre 5 a été généré !");

```

Dans cet exemple, la boucle `while` est utilisée pour générer des nombres aléatoires jusqu'à ce que le nombre 5 soit généré. À chaque itération de la boucle, un nombre aléatoire entre 1 et 10 est généré à l'aide de `Math.random()` et `Math.floor()`. Si le nombre généré (`nombreAleatoire`) n'est pas égal à 5, il est affiché. La boucle continue jusqu'à ce que 5 soit généré, puis elle se termine et affiche le message "Le nombre 5 a été généré !".

Ces exemples illustrent comment utiliser la boucle `while` pour exécuter un bloc de code tant qu'une condition spécifique est vraie. Assurez-vous de mettre à jour les variables de contrôle à l'intérieur de la boucle pour éviter les boucles infinies.
:::

:::spoiler Sortir d'une boucle `while (true)`
Pour sortir d'une boucle `while (true)`, il faut utiliser l'instruction `break`. Cette instruction permet de sortir immédiatement de la boucle, indépendamment du test de condition qui est normalement évalué à chaque tour de boucle.

Voici un exemple :

```javascript
while (true) {
  let input = prompt("Entrez un nombre :");
  if (input === "stop") {
    break; // Sort de la boucle si l'utilisateur entre "stop"
  }
  console.log(parseInt(input) * 2);
}

```

Dans cet exemple, la boucle `while` tourne indéfiniment jusqu'à ce que l'utilisateur entre le mot-clé "stop". A ce moment-là, l'instruction `break` est exécutée, ce qui sort immédiatement de la boucle.
:::

### for

La structure de contrôle `for` permet d'exécuter un bloc de code un certain nombre de fois en fonction d'une condition. Voici un exemple :

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}

```

:::spoiler Exemples supplémentaires
Voici quelques exemples de boucles `for` en JavaScript :

**Exemple 1 - Boucle `for` inversée avec décrémentation :**

```javascript
for (var i = 5; i >= 0; i--) {
  console.log(i);
}

```

Dans cet exemple, nous utilisons une boucle `for` pour afficher les nombres de 5 à 0 de manière décroissante. La variable `i` est initialisée à 5, et la condition `i >= 0` spécifie que la boucle continuera tant que `i` est supérieur ou égal à 0. Après chaque itération, la décrémentation `i--` est effectuée.

Le résultat affiché sera :

```
5
4
3
2
1
0

```

**Exemple 2 - Boucle `for` pour parcourir un tableau :**

```javascript
var fruits = ["pomme", "orange", "banane", "raisin"];

for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

```

Dans cet exemple, nous utilisons une boucle `for` pour parcourir un tableau `fruits`. La variable `i` est initialisée à 0, et la condition `i < fruits.length` spécifie que la boucle continuera tant que `i` est inférieur à la longueur du tableau `fruits`. À chaque itération, la valeur de l'élément correspondant dans le tableau est affichée.

Le résultat affiché sera :

```
pomme
orange
banane
raisin

```

**Exemple 3 - Boucle `for` avec saut d'itération (`continue`) :**

```javascript
for (var i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Passe à l'itération suivante si i est pair
  }
  console.log(i);
}

```

Dans cet exemple, nous utilisons une boucle `for` pour afficher les nombres de 0 à 9, mais uniquement les nombres impairs. À chaque itération, nous vérifions si `i` est pair en utilisant l'opérateur modulo `%`. Si `i` est pair, nous utilisons l'instruction `continue` pour passer à l'itération suivante sans exécuter le reste du code à l'intérieur de la boucle. Si `i` est impair, le nombre est affiché dans la console.

Le résultat affiché sera :

```
1
3
5
7
9

```

Dans cet exemple, la boucle `for` s'exécute normalement pour toutes les valeurs de `i`. Cependant, lorsque `i` est pair, l'instruction `continue` est exécutée, ce qui saute le code restant à l'intérieur de la boucle et passe à l'itération suivante. Cela permet d'afficher uniquement les nombres impairs.

Ces exemples illustrent différentes utilisations de la boucle `for` en JavaScript. Vous pouvez personnaliser les valeurs initiales, les conditions et les opérations d'itération pour répondre à vos besoins spécifiques.

:::

:::spoiler Les boucles `for of` et `for in`
{%hackmd @alternative-rvb/javascript-boucle-for-in-et-of %}
:::

:::spoiler Boucle foreach
{%hackmd @alternative-rvb/javascript-boucle-foreach %}
:::

### function

La structure de contrôle `function` permet de regrouper un bloc de code qui peut être appelé plusieurs fois avec des arguments différents. Voici un exemple :

```javascript
function addition(a, b) {
  return a + b;
}

console.log(addition(2, 3)); // 5
```

:::spoiler Plus d'infos sur les fonctions
En JavaScript, les fonctions peuvent prendre des paramètres, qui sont des valeurs que vous pouvez passer à une fonction pour qu'elle les utilise lors de son exécution. Les paramètres permettent aux fonctions de traiter différentes valeurs et d'effectuer des opérations spécifiques en fonction de ces valeurs.

Lors de la définition d'une fonction, vous pouvez spécifier les paramètres qu'elle accepte. Voici la syntaxe générale pour définir une fonction avec des paramètres :

```javascript
function nomDeLaFonction(paramètre1, paramètre2, ...) {
    // Corps de la fonction
    // Utilisez les paramètres ici
}

```

Les paramètres sont des noms de variables que vous pouvez utiliser à l'intérieur de la fonction. Lorsque vous appelez la fonction, vous pouvez passer des valeurs spécifiques pour chaque paramètre. Par exemple :

```javascript
function saluer(nom) {
    console.log("Bonjour, " + nom + " !");
}

saluer("Alice"); // Affiche "Bonjour, Alice !"
saluer("Bob"); // Affiche "Bonjour, Bob !"

```

Dans cet exemple, la fonction `saluer` prend un paramètre `nom`. Lorsque nous appelons la fonction `saluer` et passons une valeur spécifique (par exemple, "Alice" ou "Bob") en tant qu'argument, cette valeur est affectée au paramètre `nom` à l'intérieur de la fonction.

JavaScript n'impose pas de types stricts pour les paramètres de fonction. Cela signifie que vous n'avez pas besoin de spécifier explicitement le type de données attendu pour chaque paramètre. Les paramètres peuvent être de n'importe quel type de données : nombre, chaîne de caractères, tableau, objet, etc.

Il est important de noter que JavaScript vous permet de définir des valeurs par défaut pour les paramètres de fonction. Cela signifie que vous pouvez spécifier une valeur qui sera utilisée si aucun argument n'est passé pour ce paramètre lors de l'appel de la fonction. Voici un exemple :

```javascript
function saluer(nom = "Anonyme") {
    console.log("Bonjour, " + nom + " !");
}

saluer(); // Affiche "Bonjour, Anonyme !"
saluer("Alice"); // Affiche "Bonjour, Alice !"

```

Dans cet exemple, le paramètre `nom` a une valeur par défaut de "Anonyme". Si aucun argument n'est passé pour le paramètre `nom` lors de l'appel de la fonction `saluer()`, la valeur par défaut sera utilisée.
:::

:::spoiler Les fonctions de rappel (ou callback)
Les fonctions de rappel (ou "callbacks" en anglais) sont des fonctions qui sont passées en tant que paramètres à d'autres fonctions. Elles sont destinées à être exécutées à un moment précis ou en réponse à un événement particulier. Les fonctions de rappel ne sont pas appelées directement dans le sens où elles ne sont pas exécutées immédiatement lorsqu'elles sont passées en tant que paramètres. Au lieu de cela, elles sont conservées et exécutées ultérieurement, souvent en réponse à un événement ou à une condition spécifique.

Pour mieux comprendre, voici un exemple :

```javascript
function effectuerAction(callback) {
  console.log("Effectuer une action...");
  callback();
}

function maFonctionDeRappel() {
  console.log("La fonction de rappel est exécutée !");
}

effectuerAction(maFonctionDeRappel);

```

Dans cet exemple, la fonction `effectuerAction` prend une fonction `callback` en tant que paramètre. Lorsque `effectuerAction` est appelée, elle affiche "Effectuer une action..." dans la console, puis elle exécute la fonction `callback` qui lui a été passée en tant que paramètre.

Dans notre cas, la fonction de rappel `maFonctionDeRappel` est appelée lorsque `effectuerAction` l'exécute. Cependant, il est important de noter que `maFonctionDeRappel` n'est pas exécutée immédiatement lorsqu'elle est passée en tant que paramètre. Elle est conservée jusqu'à ce que `effectuerAction` décide de l'exécuter.

Les fonctions de rappel sont couramment utilisées dans des situations telles que les événements dans les interfaces utilisateur, les requêtes asynchrones, les opérations de longue durée, etc. Elles permettent d'organiser l'exécution du code de manière asynchrone et réactive, en réponse à des événements ou des conditions spécifiques.

Voir aussi : 
- https://youtu.be/TPEvfnXNO0E
- https://jsfiddle.net/Alternative_RVB/13em9xrd/22/
:::

:::spoiler Gérer les erreurs avec try-catch

- `try` est utilisé pour entourer un bloc de code où des exceptions peuvent se produire. Son objectif est d'identifier les erreurs potentielles et de gérer leur occurrence.
    
- `catch` est utilisé pour capturer et gérer les exceptions générées dans le bloc `try`. Lorsqu'une exception se produit dans le bloc `try`, le contrôle est transféré au bloc `catch` correspondant où vous pouvez exécuter un code de gestion de l'erreur spécifique. La variable `error` (ou tout autre nom que vous spécifiez) contient généralement l'objet d'exception capturé, et vous pouvez utiliser cette variable pour effectuer des opérations telles que l'enregistrement des informations d'erreur ou la prise de mesures correctives.
    
- `finally` est un bloc optionnel qui suit le bloc `catch`. Il est utilisé pour spécifier un code qui sera exécuté quelle que soit la situation, qu'une exception se soit produite ou non dans le bloc `try`. Cela signifie que le code du bloc `finally` est exécuté même si une exception est levée et pas seulement lorsqu'elle est attrapée.
    

Voici un exemple pour illustrer l'utilisation de `try`, `catch` et `finally` :

```javascript
try {
  // Bloc de code où une exception pourrait se produire
  // Code susceptible de générer une erreur
} catch (error) {
  // Bloc de code qui est exécuté lorsque l'exception est attrapée
  // Code de gestion de l'erreur
} finally {
  // Bloc de code exécuté quel que soit le résultat (avec ou sans exception)
  // Code alternatif ou nettoyage
}

```

L'utilisation de cette structure `try-catch-finally` permet de gérer les erreurs de manière plus contrôlée et d'effectuer des actions spécifiques en cas de succès ou d'échec de certaines opérations. Le bloc `finally` est utile pour exécuter du code qui doit être exécuté indépendamment du résultat, par exemple pour libérer des ressources ou effectuer des opérations de nettoyage.
:::

:::spoiler Les opérateurs de spread et de rest

Les opérateurs "spread" et "rest" sont tous deux liés à la manipulation des tableaux et des listes d'arguments. Ils sont introduits avec l'utilisation de l'opérateur de propagation (`...`). Cependant, ils sont utilisés dans des contextes différents.

1. **Spread** (Propagation) : L'opérateur de spread (`...`) est utilisé pour étendre un tableau ou une liste d'éléments. Il permet de séparer les éléments d'un tableau ou d'une liste en des éléments individuels. Voici quelques utilisations courantes de l'opérateur de spread :
    
    a) Concaténer des tableaux :
    
    ```javascript
    const tableau1 = [1, 2, 3];
    const tableau2 = [4, 5, 6];
    
    const tableauConcatene = [...tableau1, ...tableau2];
    console.log(tableauConcatene); // Output: [1, 2, 3, 4, 5, 6]
    
    ```
    
    b) Copier un tableau :
    
    ```javascript
    const tableauOriginal = [1, 2, 3];
    const copieTableau = [...tableauOriginal];
    console.log(copieTableau); // Output: [1, 2, 3]
    
    ```
    
    c) Passer des arguments à une fonction :
    
    ```javascript
    function maFonction(param1, param2, param3) {
      console.log(param1, param2, param3);
    }
    
    const mesArguments = [1, 2, 3];
    maFonction(...mesArguments); // Output: 1 2 3
    
    ```
    
2. **Rest :** Le paramètre rest (`...`) est utilisé pour représenter un nombre variable d'arguments sous forme de tableau. Il permet de capturer plusieurs arguments passés à une fonction en une seule variable. Voici un exemple d'utilisation du paramètre rest :
    
    ```javascript
    function maFonction(param1, param2, ...autresParams) {
      console.log(param1); // Premier argument
      console.log(param2); // Deuxième argument
      console.log(autresParams); // Tableau contenant les autres arguments
    }
    
    maFonction(1, 2, 3, 4, 5);
    /* Output:
       1
       2
       [3, 4, 5]
    */
    
    ```
    
    Dans cet exemple, les deux premiers arguments sont capturés individuellement (`param1` et `param2`), tandis que les arguments supplémentaires sont regroupés dans le tableau `autresParams`.
    

Il est important de noter que bien que l'opérateur de spread et le paramètre rest utilisent tous les deux l'opérateur `...`, leur utilisation diffère selon le contexte : l'opérateur de spread est utilisé pour étendre ou copier des tableaux, tandis que le paramètre rest est utilisé pour capturer un nombre variable d'arguments dans une fonction.
:::

:::spoiler le destructuring

Le destructuring (ou décomposition en français) est une fonctionnalité introduite en JavaScript ES6 qui permet d'extraire des valeurs d'un tableau ou d'un objet et de les assigner à des variables distinctes de manière concise. Cela facilite l'écriture de code en évitant la nécessité de référencer chaque élément individuellement.

Il existe deux types de destructuring en JavaScript : le destructuring de tableau et le destructuring d'objet.

1. **Destructuring de tableau :** Lors du destructuring de tableau, vous pouvez extraire des éléments d'un tableau et les assigner à des variables individuelles. Voici un exemple :
    
    ```javascript
    const tableau = [1, 2, 3, 4, 5];
    const [a, b, c] = tableau;
    
    console.log(a); // Output: 1
    console.log(b); // Output: 2
    console.log(c); // Output: 3
    
    ```
    
    Vous pouvez également ignorer des éléments en utilisant une virgule `,` :
    
    ```javascript
    const [a, , c] = tableau;
    
    console.log(a); // Output: 1
    console.log(c); // Output: 3
    
    ```
    
    Vous pouvez également utiliser le destructuring avec des éléments restants (`...`) pour capturer le reste des éléments dans un nouveau tableau :
    
    ```javascript
    const [a, ...reste] = tableau;
    
    console.log(a); // Output: 1
    console.log(reste); // Output: [2, 3, 4, 5]
    
    ```
    
2. **Destructuring d'objet :** Lors du destructuring d'objet, vous pouvez extraire des propriétés d'un objet et les assigner à des variables ayant le même nom que les propriétés. Voici un exemple :
    
    ```javascript
    const personne = { nom: "John", age: 30, ville: "Paris" };
    const { nom, age, ville } = personne;
    
    console.log(nom); // Output: "John"
    console.log(age); // Output: 30
    console.log(ville); // Output: "Paris"
    
    ```
    
    Vous pouvez également attribuer des noms de variable différents en utilisant la syntaxe suivante : `propriete: nomVariable` :
    
    ```javascript
    const { nom: fullName, age } = personne;
    
    console.log(fullName); // Output: "John"
    console.log(age); // Output: 30
    
    ```
    
    Vous pouvez également définir des valeurs par défaut pour les variables extraites :
    
    ```javascript
    const { nom, age, profession = "Inconnue" } = personne;
    
    console.log(nom); // Output: "John"
    console.log(age); // Output: 30
    console.log(profession); // Output: "Inconnue" (valeur par défaut)
    
    ```
    
    De plus, vous pouvez utiliser le destructuring d'objet imbriqué pour extraire des propriétés d'objets imbriqués :
    
    ```javascript
    const utilisateur = {
      nom: "John",
      age: 30,
      adresse: {
        ville: "Paris",
        pays: "France"
      }
    };
    
    const { nom, adresse: { ville, pays } } = utilisateur;
    
    console.log(nom); // Output: "John"
    console.log(ville); // Output: "Paris"
    console.log(pays); // Output: "France"
    ```

:::

## DOM

![DOM](https://i.imgur.com/ZzbqObk.png)

**LE DOM :** Document Object Model

Le DOM représente une page web sous la forme d'une hiérarchie d'objets, où chaque objet correspond à un nœud de l'arborescence de la page.

Les objets du DOM disposent de propriétés et de méthodes permettant de les manipuler avec JavaScript.

Ceux (en bleu) qui correspondent à des éléments HTML, comme `<body>` ou `<p>`. Ces nœuds peuvent avoir des sous-nœuds, appelés fils ou enfants(children).

Ceux (en rouge) qui correspondent au contenu textuel de la page. Ces nœuds ne peuvent pas avoir de fils.

**Les objets globaux** sont des objets pré-définis disponibles dans tout environnement d'exécution de code. Les objets globaux les plus couramment utilisés dans les navigateurs web sont l'objet `window` et l'objet `document`.

L'objet `window` représente la fenêtre du navigateur. Il contient de nombreuses propriétés et méthodes pour interagir avec la fenêtre et le document qui y est affiché. L'objet `window` est implicitement disponible dans le contexte global de tout script exécuté dans une page web.

L'objet `document` représente le document HTML chargé dans la fenêtre du navigateur. Il contient de nombreuses propriétés et méthodes pour interagir avec les éléments HTML et le contenu du document. L'objet `document` est une **propriété** de l'objet `window` et est également implicitement disponible dans le contexte global de tout script exécuté dans une page web.


### Sélectionner un élément du DOM

Il existe plusieurs façons de sélectionner un élément du DOM en JavaScript. Voici quelques-unes des méthodes les plus courantes :

`getElement(s)By<sélecteur>`

| Méthode | Nombre d'éléments à obtenir | Critère de sélection |
| --- | --- | --- |
| [getElementsByTagName()](https://developer.mozilla.org/fr/docs/Web/API/Element/getElementsByTagName) | Plusieurs | Par balise |
| [getElementById()](https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById) | Un seul | Par identifiant |
| [getElementsByClassName()](https://developer.mozilla.org/fr/docs/Web/API/Document/getElementsByClassName) | Plusieurs | Par classe |
| [querySelector()](https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector) | Un seul (le premier) | Autre que par identifiant |
| [querySelectorAll()](https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll) | Plusieurs | Autre que par balise ou par la classe |

1. La méthode **`getElementById()`** Cette méthode sélectionne un élément en utilisant son attribut `id` unique. Elle renvoie l'élément correspondant ou `null` si aucun élément ne correspond à l'`id` spécifié. Voici un exemple :

```javascript
var monElement = document.getElementById("mon-id");

```

2. La méthode **`getElementsByClassName()`** Cette méthode sélectionne un ou plusieurs éléments en utilisant leur classe CSS. Elle renvoie une collection d'éléments correspondants, ou une collection vide si aucun élément ne correspond à la classe spécifiée. Voici un exemple :

```javascript
var mesElements = document.getElementsByClassName("ma-classe");

```

3. La méthode **`getElementsByTagName()`** Cette méthode sélectionne un ou plusieurs éléments en utilisant leur nom de balise HTML. Elle renvoie une collection d'éléments correspondants, ou une collection vide si aucun élément ne correspond à la balise spécifiée. Voici un exemple :

```javascript
var mesParagraphes = document.getElementsByTagName("p");

```

4. La méthode **`querySelector()`** Cette méthode sélectionne le premier élément correspondant à un sélecteur CSS spécifié. Elle renvoie l'élément correspondant ou `null` si aucun élément ne correspond au sélecteur. Voici un exemple :

```javascript
var monElement = document.querySelector("#mon-id .ma-classe");

```

5. La méthode **`querySelectorAll()`** Cette méthode sélectionne tous les éléments correspondant à un sélecteur CSS spécifié. Elle renvoie une liste d'éléments correspondants, ou une liste vide si aucun élément ne correspond au sélecteur. Voici un exemple :

```javascript
var mesElements = document.querySelectorAll(".ma-classe li");

```

En utilisant ces méthodes, il est possible de sélectionner n'importe quel élément du DOM en JavaScript, ce qui est utile pour la manipulation dynamique des pages web.

### Sélectionner Parent et enfants

On peut également sélectionner l'élément parent ou l'élément enfant:

`children`

`parentElement`

Oui, en JavaScript, il est possible de sélectionner l'élément parent ou enfant d'un élément donné en utilisant les propriétés `parentNode`/`parentElement` et `childNodes`/`children`.

- `parentNode`/`parentElement`: renvoie l'élément parent de l'élément spécifié. Par exemple :

```javascript
const childElement = document.getElementById("child");
const parentElement = childElement.parentNode;
// Renvoie l'élément parent de "child"

```

Notez que `parentNode` renvoie toujours un nœud DOM, tandis que `parentElement` renvoie l'élément parent en tant qu'objet DOM Element.

- `childNodes`: renvoie une collection (un objet NodeList) de tous les nœuds enfants d'un élément, y compris les nœuds textuels et les commentaires. Par exemple :

```javascript
const parentElement = document.getElementById("parent");
const childNodes = parentElement.childNodes;
// Renvoie une NodeList contenant les nœuds enfants de "parent"

```

- `children`: renvoie une collection (un objet HTMLCollection) des éléments enfants d'un élément, en excluant les nœuds textuels et les commentaires. Par exemple :

```javascript
const parentElement = document.getElementById("parent");
const children = parentElement.children;
// Renvoie une HTMLCollection contenant les éléments enfants de "parent"

```

Notez que `children` ne contient que les éléments enfants de l'élément, tandis que `childNodes` inclut tous les types de nœuds enfants.


### Autres méthodes utiles

| Méthodes | Description |
| --- | --- | 
| [innerHTML](https://developer.mozilla.org/fr/docs/Web/API/Element/innerHTML) | La propriété `innerHTML` renvoie le contenu HTML d'un élément. Certains attributs sont directement accessibles sous la forme de propriétés. C'est notamment le cas pour les attributs `id`, `href` et `value`. | 
| [innerText](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement/innerText) | La propriété `innerText` renvoie le contenu textuel d'un élément, sans le balisage HTML. | 
| [textContent](https://developer.mozilla.org/fr/docs/Web/API/Node/textContent) | La propriété `textContent` renvoie le contenu textuel d'un élément, y compris les nœuds enfants. | 
| [getAttribute()](https://developer.mozilla.org/fr/docs/Web/API/Element/getAttribute) | Permet d'accéder à la valeur d'un attribut spécifié pour un élément. | 
| [hasAttribute()](https://developer.mozilla.org/fr/docs/Web/API/Element/hasAttribute) | Renvoie un booléen indiquant si l'élément possède ou non l'attribut spécifié. |
| [setAttribute()](https://developer.mozilla.org/fr/docs/Web/API/Element/setAttribute) | Ajoute un nouvel attribut ou remplace un attribut existant avec la nouvelle valeur spécifiée. | 
| [classList](https://developer.mozilla.org/fr/docs/Web/API/Element/classList) | La propriété `classList` et ses méthodes permettent d'accéder aux classes d'un élément. |
|  | `Node.classList.add("classeAAjouter")` permet d'ajouter une classe à un élément. | 
|  | `Node.classList.remove("classeAsupprimer")` permet de supprimer une classe d'un élément. | 
|  | `Node.classList.toggle("classeAEchanger")` permet d'ajouter la classe si elle est absente et de la supprimer si elle est présente. |
| [createElement()](https://developer.mozilla.org/fr/docs/Web/API/Document/createElement) | Crée un nouvel élément HTML avec le nom de balise spécifié. |
| [appendChild()](https://developer.mozilla.org/fr/docs/Web/API/Node/appendChild) | Ajoute un nœud à la fin de la liste des enfants d'un élément parent spécifié. | 
| [insertBefore()](https://developer.mozilla.org/fr/docs/Web/API/Node/insertBefore) | Insère un nœud avant le nœud spécifié dans la liste des enfants d'un élément parent spécifié. |
| [insertAdjacentHTML()](https://developer.mozilla.org/fr/docs/Web/API/Element/insertAdjacentHTML) | Insère du HTML à l'intérieur ou autour d'un élément spécifié selon l'endroit spécifié. |
| [replaceChild()](https://developer.mozilla.org/fr/docs/Web/API/Node/replaceChild) | Remplace un nœud enfant existant par un nouveau nœud. | 
| [removeChild()](https://developer.mozilla.org/fr/docs/Web/API/Node/removeChild) | Supprime un nœud enfant existant d'un élément parent spécifié. |

:::spoiler Différence entre innerText, innerHTML et textContent
- `innerText` est une propriété JavaScript qui permet de récupérer ou définir le texte qui se trouve à l'intérieur d'un élément HTML. Cette propriété ne renvoie que le texte visible à l'écran et exclut le contenu caché par le CSS (par exemple, le texte contenu dans un élément avec un `display: none`).
- `innerHTML` est une autre propriété JavaScript qui permet de récupérer ou définir le contenu HTML à l'intérieur d'un élément. Cette propriété renvoie tout le contenu HTML, y compris les balises, les attributs et le texte. Cela signifie que si vous définissez la propriété innerHTML sur une chaîne de caractères contenant des balises HTML, ces balises seront interprétées et les éléments correspondants seront créés dans l'élément cible.
- `textContent` est également une propriété JavaScript qui permet de récupérer ou définir le contenu textuel d'un élément, mais sans interpréter les balises HTML. Cette propriété renvoie uniquement le texte brut sans balises HTML. Elle est donc utile lorsque vous voulez récupérer ou définir uniquement le texte à l'intérieur d'un élément sans les balises HTML.

En résumé, la différence entre ces trois propriétés est que `innerText` renvoie uniquement le texte visible, `innerHTML` renvoie tout le contenu HTML, y compris les balises HTML et leurs attributs, et `textContent` renvoie uniquement le texte brut sans balises HTML.
:::

### Le type d'un nœud

Chaque objet du DOM a une propriété _nodeType_ qui indique son type. La valeur de cette propriété est `document.ELEMENT_NODE` pour un nœud "élément" (balise HTML) et `document.TEXT_NODE` pour un nœud textuel.
Seuls les nœuds de type élément peuvent avoir des sous-nœuds (appelés enfants)

Tester `document.childNodes` 

La propriété en lecture seule `Node.nodeType` représente le type du noeud.

- Description

La propriété nodeType peut être utilisée pour distinguer les uns des autres les différents genres de noeuds tels que Element, Text et Comment .

- Syntaxe

`Type = node.nodeType` : Renvoie un entier (integer) qui spécifie le type du noeud ; les valeurs possibles sont listées dans Constantes.

- Constantes

Constantes de type nœud

| Constante | Valeur | Description|
|---|---|---|
| Node.ELEMENT_NODE | 1 | Un noeud Element  tel que `<p>` ou `<div>`. |
| Node.TEXT_NODE | 3 | Le Text actuel de l'Element ou Attr. |
| Node.PROCESSING_INSTRUCTION_NODE | 7 | Une ProcessingInstruction d'un document XML tel que la déclaration `<?xml-stylesheet ... ?>`. |
| Node.COMMENT_NODE | 8 | Un noeud Comment. |
| Node.DOCUMENT_NODE | 9 | Un noeud Document. |
| Node.DOCUMENT_TYPE_NODE | 10 | Un noeud DocumentType c'est-à-dire <!DOCTYPE> | html> pour des documents HTML5. |
| Node.DOCUMENT_FRAGMENT_NODE | 11 | Un noeud DocumentFragment |

_Exemples:_

Différents types de noeuds

- document.nodeType === Node.DOCUMENT_NODE; // true (vrai)
- document.doctype.nodeType === Node.DOCUMENT_TYPE_NODE; // true  (vrai) 
- var fragment = document.createDocumentFragment();
- fragment.nodeType === Node.DOCUMENT_FRAGMENT_NODE; // true  (vrai) 
- var p = document.createElement("p");
- p.textContent = "Once upon a time...";
- p.nodeType === Node.ELEMENT_NODE; // true  (vrai) 
- p.firstChild.nodeType === Node.TEXT_NODE; // true  (vrai) 


L'exemple suivant vérifie si le premier noeud dans l'élément du document est un noeud commentaire et si ce n'est pas le cas, affiche un message.

```javascript=
var node = document.documentElement.firstChild;
if (node.nodeType != Node.COMMENT_NODE)
  console.log("You should comment your code well!");
```

À partir de l’adresse [https://developer.mozilla.org/fr/docs/Web/API/Node/nodeType](https://developer.mozilla.org/fr/docs/Web/API/Node/nodeType)

## Manipuler des chaînes de caractères

| Méthode | Description | Exemple |
| --- | --- | --- |
| [length](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/length) | Retourne le nombre de caractères dans une chaîne de caractères | `const myStr = "Hello world!"; console.log(myStr.length); // affiche 12` |
| [charAt()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/charAt) | Retourne le caractère à l'indice spécifié dans une chaîne de caractères | `const myStr = "Hello world!"; console.log(myStr.charAt(6)); // affiche 'w'` |
| [concat()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/concat) | Concatène une ou plusieurs chaînes de caractères à une chaîne existante et retourne la nouvelle chaîne de caractères. | `const str1 = "Hello"; const str2 = " world!"; const myStr = str1.concat(str2); // myStr devient "Hello world!"` |
| [indexOf()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/indexOf) | Retourne l'indice de la première occurrence d'une valeur spécifiée dans une chaîne de caractères | `const myStr = "Hello world!"; console.log(myStr.indexOf('world')); // affiche 6` |
| [lastIndexOf()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/lastIndexOf) | Retourne l'indice de la dernière occurrence d'une valeur spécifiée dans une chaîne de caractères | `const myStr = "Hello world!"; console.log(myStr.lastIndexOf('o')); // affiche 7` |
| [replace()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/replace) | Remplace une chaîne de caractères par une autre dans une chaîne de caractères | `const myStr = "Hello world!"; const newStr = myStr.replace('world', 'everybody'); // newStr devient "Hello everybody!"` |
| [slice()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/slice) | Retourne une partie d'une chaîne de caractères en créant une nouvelle chaîne de caractères, sans modifier la chaîne d'origine. Les indices de début et de fin de la partie à extraire sont passés en paramètres. | `const myStr = "Hello world!"; const subStr = myStr.slice(6, 11); // subStr devient 'world', myStr reste inchangé` |
| [split()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split) | Sépare une chaîne de caractères en un tableau de sous-chaînes en utilisant un séparateur spécifié en argument. | `const myStr = "Hello world!"; const myArr = myStr.split(' '); // myArr devient ['Hello', 'world!']` |
| [toLowerCase()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/toLowerCase) | Retourne une chaîne de caractères en minuscules | `const myStr = "Hello world!"; const newStr = myStr.toLowerCase(); // newStr devient 'hello world!'` |

:::spoiler String Methods Cheat Sheet 1 🖼️
![](https://i.imgur.com/YD8RJpC.png)
:::

:::spoiler String Methods Cheat Sheet 2 🖼️
![](https://hackmd.io/_uploads/HyqX2EYEn.png)
:::

## Manipuler des tableaux

Les tableaux en JavaScript sont des structures de données qui permettent de stocker et d'organiser des collections d'éléments. Un tableau peut contenir des valeurs de différents types (nombres, chaînes de caractères, objets, etc.) et est indexé à partir de zéro.

Voici comment déclarer et initialiser un tableau en JavaScript :

```javascript
var myArray = []; // Déclaration d'un tableau vide

var myArray = [1, 2, 3]; // Déclaration d'un tableau avec des valeurs initiales

var myArray = new Array(); // Une autre façon de déclarer un tableau vide

var myArray = new Array(1, 2, 3); // Une autre façon de déclarer un tableau avec des valeurs initiales

```

:::spoiler
{%hackmd @alternative-rvb/javascript-copier-un-tableau %}
:::

|Méthode|Description|Exemple|Sortie|
|---|---|---|---|
|[length](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/length)|Retourne le nombre d'éléments dans un tableau|`const myArr = [1, 2, 3]; console.log(myArr.length); // affiche 3`|Il renvoie une valeur numérique.|
|[pop()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/pop)|Supprime une entrée à la fin du tableau (Celle-ci peut être récupérée dans une variable)|`const myArr = [1, 2, 3]; const lastElement = myArr.pop(); // myArr devient [1, 2], lastElement devient 3`|✏️ Modifie directement le tableau d'origine.|
|[shift()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/shift)|Supprime une entrée au début du tableau (Celle-ci peut être récupérée dans une variable)|`const myArr = [1, 2, 3]; const firstElement = myArr.shift(); // myArr devient [2, 3], firstElement devient 1`|✏️ Modifie directement le tableau d'origine.|
|[push()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/push)|Ajoute une entrée à la fin du tableau|`const myArr = [1, 2, 3]; myArr.push(4); // myArr devient [1, 2, 3, 4]`|✏️ Modifie directement le tableau d'origine.|
|[unshift()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/unshift)|Ajoute une entrée au début du tableau|`const myArr = [1, 2, 3]; myArr.unshift(0); // myArr devient [0, 1, 2, 3]`|✏️ Modifie directement le tableau d'origine.|
|[slice()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/slice)|Retourne une portion du tableau en créant un nouveau tableau, sans modifier le tableau original. Les indices de début et de fin de la portion à extraire sont passés en paramètres.|`const myArr = [1, 2, 3, 4, 5]; const subArr = myArr.slice(1, 3); // subArr devient [2, 3], myArr reste inchangé`|🆕 Crée un nouveau tableau. Le tableau d'origine reste inchangé.|
|[splice()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/splice)|Permet de modifier le contenu d'un tableau en supprimant ou remplaçant des éléments existants et/ou en ajoutant de nouveaux éléments. Les indices de début et de fin de la portion à modifier sont passés en paramètres, ainsi que les éléments à ajouter ou à supprimer. Cette méthode modifie directement le tableau original.|`const myArr = [1, 2, 3, 4, 5]; myArr.splice(2, 1, 'a', 'b'); // myArr devient [1, 2, 'a', 'b', 4, 5]`|✏️ Modifie directement le tableau d'origine.|
|[concat()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/concat)|Retourne un nouveau tableau qui contient les éléments des tableaux d'origine concaténés.|`const myArr1 = [1, 2, 3]; const myArr2 = [4, 5, 6]; const myArr3 = myArr1.concat(myArr2); // myArr3 devient [1, 2, 3, 4, 5, 6], myArr1 et myArr2 restent inchangés`|🆕 Crée un nouveau tableau. Les tableaux d'origine restent inchangés.|
|[join()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/join)|Convertit tous les éléments d'un tableau en une chaîne de caractères, en les séparant avec un séparateur spécifié en argument.|`const myArr = ['Hello', 'world', '!']; const myStr = myArr.join(' '); // myStr devient 'Hello world !'`|Ne crée pas un nouveau tableau. Convertit le tableau en une chaîne de caractères.|
|[reverse()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reverse)|Inverse l'ordre des éléments d'un tableau.|`const myArr = [1, 2, 3]; myArr.reverse(); // myArr devient [3, 2, 1]`|✏️ Modifie directement le tableau d'origine.|
|[sort()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort)|Trie les éléments d'un tableau dans l'ordre spécifié par une fonction de tri passée en argument.|`const myArr = [2, 4, 1, 3, 5]; myArr.sort(); // myArr devient [1, 2, 3, 4, 5]`|✏️ Modifie directement le tableau d'origine.|
|[map()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map)|Crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau.|`const myArr = [1, 2, 3]; const doubleArr = myArr.map((element) => element * 2); // doubleArr devient [2, 4, 6], myArr reste inchangé`|🆕 Crée un nouveau tableau. Le tableau d'origine reste inchangé.|
|[every()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/every)|Vérifie si tous les éléments d'un tableau satisfont une condition.|`const myArr = [2, 4, 6]; const areAllEven = myArr.every((element) => element % 2 === 0); // areAllEven devient true`|☑️ Renvoie un booléen.|
|[filter()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter)|Crée un nouveau tableau avec tous les éléments d'un tableau qui passent un test spécifié.|`const myArr = [1, 2, 3, 4, 5]; const evenArr = myArr.filter((element) => element % 2 === 0); // evenArr devient [2, 4], myArr reste inchangé`|🆕 Crée un nouveau tableau. Le tableau d'origine reste inchangé.|
|[some()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/some)|Teste si au moins un élément du tableau passe le test implémenté par la fonction fournie. La méthode renvoie `true` si le test est passé et `false` sinon.|`const myArr = [1, 2, 3]; const isGreaterThanTwo = (element) => element > 2; const result = myArr.some(isGreaterThanTwo); // result devient true` |☑️ Renvoie un booléen.|
|[includes()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/includes)|Détermine si un tableau contient une valeur spécifique parmi ses entrées, renvoie `true` si la valeur est trouvée et `false` sinon.|`const myArr = [1, 2, 3]; const result1 = myArr.includes(2); // result1 devient true const result2 = myArr.includes(4); // result2 devient false` |☑️ Renvoie un booléen.|
|[find()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/find)|Renvoie la valeur du premier élément du tableau qui satisfait la fonction de test fournie en argument. Sinon, la valeur `undefined` est renvoyée.|`const myArr = [1, 2, 3]; const isGreaterThanTwo = (element) => element > 2; const result = myArr.find(isGreaterThanTwo); // result devient 3` |Renvoie un élément du tableau ou undefined.|
|[findIndex()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/findIndex)|Renvoie l'index du premier élément du tableau qui satisfait la fonction de test fournie en argument. Sinon, la valeur -1 est renvoyée.|`const myArr = [1, 2, 3]; const isGreaterThanTwo = (element) => element > 2; const result = myArr.findIndex(isGreaterThanTwo); // result devient 2` |Renvoie un index ou -1.|
|[indexOf()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/indexOf)|Recherche l'index de la première occurrence d'un élément dans un tableau, retourne -1 si l'élément n'est pas présent|`const myArr = [1, 2, 3, 4, 5]; const index = myArr.indexOf(3); // index devient 2`|Renvoie un index ou -1.|
|[reduce()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/reduce)|Applique une fonction réductrice sur chaque élément du tableau pour réduire le tableau à une valeur unique.|`const myArr = [1, 2, 3]; const reducer = (accumulator, currentValue) => accumulator + currentValue; const result = myArr.reduce(reducer); // result devient 6` |Renvoie une valeur unique.|
|[at()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/at)|Retourne l'élément à l'index spécifié|`const myArr = [1, 2, 3]; console.log(myArr.at(1)); // affiche 2`|Renvoie un élément du tableau.|
|[fill()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/fill)|Remplit tous les éléments d'un tableau avec une valeur statique à partir d'un index de début et d'un index de fin spécifiés (inclus)|`const myArr = [1, 2, 3]; myArr.fill(0, 1, 2); // myArr devient [1, 0, 3]`|✏️ Modifie directement le tableau d'origine.|



:::spoiler Exemple d'un tableau de voitures
```javascript
var cars = ["Toyota", "Honda", "Ford", "Chevrolet", "BMW", "Mercedes-Benz"];
```
:::

:::spoiler Array Methods Cheat Sheet 1 🖼️
![](https://i.imgur.com/LyaCaen.gif)
:::

:::spoiler Array Methods Cheat Sheet 2 🖼️
![](https://hackmd.io/_uploads/HkIyqEK4h.png)
:::

:::spoiler Array Methods Cheat Sheet 3 🖼️
![](https://i.imgur.com/WgoAwsE.png)
:::

## Manipuler des objets

En JavaScript, les objets sont des entités qui regroupent des données et des fonctionnalités connexes. Ils sont créés à partir de modèles appelés "constructeurs" ou à l'aide de la syntaxe d'objet littéral. Voici quelques points clés sur la création et la manipulation d'objets en JavaScript :

**Création d'objets en JavaScript :**

1. **Objet littéral :** Vous pouvez créer un objet en utilisant la notation d'objet littéral, qui consiste à définir les propriétés et les méthodes de l'objet entre des accolades. Par exemple :
    
    ```javascript
    const personne = {
      nom: "John Doe",
      age: 30,
      direBonjour: function() {
        console.log("Bonjour !");
      }
    };
    
    ```
    
2. **Constructeur d'objet :** Vous pouvez créer des objets à partir de fonctions constructeurs. Une fonction constructeur est une fonction normale qui est utilisée avec l'opérateur `new` pour créer des instances d'objets. Par exemple :
    
    ```javascript
    function Personne(nom, age) {
      this.nom = nom;
      this.age = age;
      this.direBonjour = function() {
        console.log("Bonjour !");
      };
    }
    
    const personne = new Personne("John Doe", 30);
    
    ```

**Manipulation d'objets en JavaScript :**

Une fois que vous avez créé un objet, vous pouvez accéder à ses propriétés et appeler ses méthodes en utilisant la notation pointée ou la notation des crochets.

- **Accès aux propriétés :** Vous pouvez accéder aux propriétés d'un objet en utilisant la notation pointée (`objet.nomPropriete`) ou la notation des crochets (`objet["nomPropriete"]`). Par exemple :
    
    ```javascript
    console.log(personne.nom); // Affiche "John Doe"
    console.log(personne["age"]); // Affiche 30
    
    ```

- **Modification des propriétés :** Vous pouvez modifier les valeurs des propriétés d'un objet en les réassignant. Par exemple :
    
    ```javascript
    personne.age = 35;
    personne["nom"] = "Jane Doe";
    
    ```

- **Appel des méthodes :** Vous pouvez appeler les méthodes d'un objet en utilisant la notation pointée et les parenthèses. Par exemple :
    
    ```javascript
    personne.direBonjour(); // Affiche "Bonjour !"
    
    ```

- **Ajout de nouvelles propriétés et méthodes :** Vous pouvez ajouter de nouvelles propriétés et méthodes à un objet existant en les assignant directement. Par exemple :
    
    ```javascript
    personne.profession = "Développeur";
    
    personne.faireUnePause = function() {
      console.log("Je fais une pause !");
    };
    
    ```

- **Suppression de propriétés :** Vous pouvez supprimer des propriétés d'un objet en utilisant l'opérateur `delete`. Par exemple :
    
    ```javascript
    delete personne.age;
    
    ```
    

Ces exemples illustrent les bases de la création et de la manipulation d'objets en JavaScript. Les objets en JavaScript sont très flexibles et peuvent être utilisés pour modéliser des entités complexes avec des propriétés et des comportements personnalisés.

:::spoiler Exemple supplémentaire
Voici un exemple supplémentaire d'un objet "Voiture" en JavaScript.

```javascript
const voiture = {
  marque: "Toyota",
  modèle: "Corolla",
  année: 2022,
  couleur: ["rouge", "blanc", "noir"],
  démarrer: function() {
    console.log("La voiture démarre !");
  },
  arrêter: function() {
    console.log("La voiture s'arrête.");
  },
  changerCouleur: function(nouvellesCouleurs) {
    this.couleur = nouvellesCouleurs;
    console.log("La couleur de la voiture a été modifiée.");
  }
};

console.log(voiture.marque); // Affiche "Toyota"
console.log(voiture.couleur); // Affiche ["rouge", "blanc", "noir"]

voiture.démarrer(); // Affiche "La voiture démarre !"

voiture.changerCouleur(["bleu", "gris"]);
console.log(voiture.couleur); // Affiche ["bleu", "gris"]

```

Dans cet exemple, l'objet "voiture" possède des propriétés telles que "marque", "modèle", "année" et "couleur". La propriété "couleur" est représentée sous forme d'un tableau contenant plusieurs couleurs. L'objet a également des méthodes telles que "démarrer" et "arrêter" qui affichent des messages et la méthode "changerCouleur" qui permet de modifier la couleur de la voiture en remplaçant le tableau existant par un nouveau tableau de couleurs.
:::

## Les évènements 

Les événements en JavaScript sont des actions déclenchées par l'utilisateur ou par le navigateur lui-même, tels que cliquer sur un bouton, survoler un élément ou charger une page.

Il existe deux façons de gérer les événements en JavaScript :

1. Utiliser les attributs d'événements HTML, tels que `onclick`, `onmouseover`, etc. Ces attributs sont directement ajoutés à l'élément HTML et exécutent du code JavaScript lorsqu'un événement se produit. Voici un exemple :
    ```html
    <button onclick="alert('Bonjour !')">Cliquez ici</button>

    ```
    Ici, la fonction `alert()` sera exécutée lorsque l'utilisateur cliquera sur le bouton.

2. Utiliser la méthode `addEventListener()` de l'objet DOM pour associer un événement à un élément HTML et spécifier une fonction à exécuter lorsque l'événement se produit. Voici un exemple :
    ```html
    <button id="monBouton">Cliquez ici</button>
    <script>
      const bouton = document.getElementById('monBouton');
      bouton.addEventListener('click', function() {
        alert('Bonjour !');
      });
    </script>

    ```
    Ici, la fonction anonyme passée en deuxième argument de la méthode `addEventListener()` sera exécutée lorsque l'utilisateur cliquera sur le bouton.
    
La méthode `addEventListener()` présente plusieurs avantages par rapport aux attributs d'événements HTML. Elle permet notamment d'ajouter plusieurs écouteurs d'événements pour un même type d'événement sur un même élément, de spécifier l'ordre dans lequel les écouteurs d'événements doivent être exécutés, et de supprimer facilement les écouteurs d'événements. De plus, elle sépare le code HTML du code JavaScript, ce qui rend le code plus maintenable.


_Exemples_

Voici quelques exemples d'input HTML et de la façon de les manipuler en JavaScript avec addEventListener :

1. **Input de type "text" :**

```html
<input type="text" id="inputText">

```

En JavaScript, vous pouvez récupérer la valeur de cet input et écouter les événements avec la méthode addEventListener comme ceci :

```javascript
const inputText = document.getElementById("inputText");

// Récupérer la valeur de l'input
const inputValue = inputText.value;

// Écouter les événements sur l'input
inputText.addEventListener("input", () => {
  console.log(inputText.value);
});

```

2. **Input de type "select" :**

```html
<select id="selectInput">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>

```

En JavaScript, vous pouvez récupérer la valeur sélectionnée dans le select et écouter les événements avec la méthode addEventListener comme ceci :

```javascript
const selectInput = document.getElementById("selectInput");

// Récupérer la valeur sélectionnée
const selectedValue = selectInput.value;

// Écouter les événements sur le select
selectInput.addEventListener("change", () => {
  console.log(selectInput.value);
});

```

3. **Input de type "radio" :**

```html
<label>
  <input type="radio" name="radioInput" value="option1">
  Option 1
</label>
<label>
  <input type="radio" name="radioInput" value="option2">
  Option 2
</label>
<label>
  <input type="radio" name="radioInput" value="option3">
  Option 3
</label>

```

En JavaScript, vous pouvez récupérer la valeur sélectionnée dans le groupe de radio boutons et écouter les événements avec la méthode addEventListener comme ceci :

```javascript
const radioInputs = document.getElementsByName("radioInput");

// Récupérer la valeur sélectionnée
let selectedValue;
radioInputs.forEach((input) => {
  if (input.checked) {
    selectedValue = input.value;
  }
});

// Écouter les événements sur les radio boutons
radioInputs.forEach((input) => {
  input.addEventListener("change", () => {
    console.log(input.value);
  });
});

```

4. **Input de type "checkbox" :**

```html
<label>
  <input type="checkbox" id="checkboxInput">
  Checkbox
</label>

```

En JavaScript, vous pouvez récupérer l'état de la checkbox et écouter les événements avec la méthode addEventListener comme ceci :

```javascript
const checkboxInput = document.getElementById("checkboxInput");

// Récupérer l'état de la checkbox
const isChecked = checkboxInput.checked;

// Écouter les événements sur la checkbox
checkboxInput.addEventListener("change", () => {
  console.log(checkboxInput.checked);
});

```

Notez que ces exemples sont simples et que les implémentations peuvent varier en fonction de la situation et de l'objectif de votre code.

:::info
`target` = élément qui a déclenché l'événement.

`currentTarget` = élément qui a l'écouteur d'événement.

```javascript
document.querySelector("button").addEventListener("click",myFunction);

function myFunction(e) {
    console.log(e.target)
    console.log(e.currentTarget)
    
}

```
:::

:::spoiler DOM / Events cheat sheet 1 🖼️
![](https://hackmd.io/_uploads/B1j63EKNh.png)
:::

:::spoiler DOM / Events cheat sheet 2 🖼️
![](https://hackmd.io/_uploads/rJXCCVtV2.png)
:::

## Code asynchrone vs. synchrone

En JavaScript, le code peut s'exécuter de manière synchrone ou asynchrone. Le code synchrone est exécuté de manière linéaire, une ligne après l'autre. Le code asynchrone, en revanche, peut être exécuté en parallèle, sans bloquer l'exécution du reste du programme.

La programmation asynchrone est souvent utilisée pour les tâches qui prennent du temps à s'exécuter, comme les appels réseau, les accès à la base de données ou les animations graphiques. Au lieu de bloquer l'exécution du programme pendant que ces tâches sont en cours d'exécution, le programme peut continuer à s'exécuter en parallèle, et recevoir une notification lorsque la tâche asynchrone est terminée.

Voici un exemple simple pour illustrer le principe de l'asynchrone en JavaScript :

```javascript
console.log("Début du programme");

setTimeout(function () {
    console.log("Tâche asynchrone terminée !");
}, 2000);

console.log("Fin du programme");
```

Ici, nous utilisons la fonction `setTimeout` pour simuler une tâche asynchrone qui prend 2 secondes à s'exécuter. Pendant ce temps, le programme continue à s'exécuter, et affiche "Fin du programme". Après 2 secondes, la fonction passée en argument à `setTimeout` est exécutée, et affiche "Tâche asynchrone terminée !".

Un autre exemple concret d'utilisation de l'asynchrone est l'appel réseau avec la fonction `fetch`. Cette fonction permet d'effectuer une requête HTTP pour récupérer des données depuis un serveur distant, et renvoie une `Promise`. Le programme peut continuer à s'exécuter pendant que la requête est en cours, et recevoir une notification lorsque les données sont disponibles. Voici un exemple :

```javascript
console.log("Début du programme");

fetch("https://api.github.com/users/username")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log("Données récupérées :", data);
    })
    .catch(function (error) {
        console.log("Erreur :", error);
    });

console.log("Fin du programme");
```

Ici, nous utilisons la fonction `fetch` pour récupérer les données d'un utilisateur GitHub. La fonction `fetch` renvoie une `Promise` qui est résolue lorsque les données sont disponibles. Nous utilisons les méthodes `then` pour traiter les données renvoyées par la `Promise`. Pendant ce temps, le programme continue à s'exécuter, et affiche "Fin du programme". Une fois que les données sont disponibles, la fonction passée en argument au deuxième `then` est exécutée, et affiche les données récupérées. Si une erreur se produit, la fonction passée en argument à `catch` est exécutée.

Il existe plusieurs fonctions asynchrones en JavaScript, en voici quelques-unes :

1. **setTimeout() :** La fonction setTimeout() permet de planifier l'exécution d'une fonction donnée après un certain délai (en millisecondes). Elle renvoie un identifiant de temporisation qui peut être utilisé pour annuler la temporisation à tout moment en appelant la fonction clearTimeout().

    _Exemple :_

    ```javascript
    setTimeout(function() {
        console.log("Hello world !");
    }, 2000);

    ```
:::info
La fonction retourne setTimeout retourne l'id du processus
:::

2. **setInterval() :** La fonction setInterval() permet d'exécuter une fonction donnée à intervalles de temps réguliers (en millisecondes). Elle renvoie un identifiant de temporisation qui peut être utilisé pour arrêter l'intervalle en appelant la fonction clearInterval().

    _Exemple :_

    ```javascript
    let count = 0;
    let intervalId = setInterval(function() {
        console.log(count);
        count++;
    }, 1000);

    // Arrêter l'intervalle après 5 secondes
    setTimeout(function() {
        clearInterval(intervalId);
    }, 5000);

    ```

3. **Promesses :** Les promesses sont un moyen de gérer des opérations asynchrones en JavaScript. Elles sont utilisées pour encapsuler une valeur qui peut être disponible immédiatement ou plus tard. Une promesse peut être dans l'un des trois états suivants : _en attente_, _résolue_ ou _rejetée_. Les promesses sont créées à l'aide du constructeur Promise().

    _Exemple :_

    ```javascript
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            let randomNum = Math.random();
            if (randomNum < 0.5) {
                resolve(randomNum);
            } else {
                reject('Le nombre est supérieur ou égal à 0.5');
            }
        }, 2000);
    });

    promise.then(function(result) {
        console.log('Le nombre est inférieur à 0.5 : ' + result);
    }).catch(function(error) {
        console.error('Erreur : ' + error);
    });
    ```
:::warning
Attention, les promesses ne peuvent pas être réutilisées une fois acceptées ou rejetées
:::

4. **fetch() :** La fonction fetch() est utilisée pour récupérer des données à partir d'une URL. Elle renvoie une promesse qui peut être résolue avec la réponse de la requête HTTP. La réponse est généralement convertie en JSON ou en texte à l'aide de la méthode then().

    _Exemple :_

    ```javascript
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));

    ```

Voir plus de détails sur :
- [Le format **json**](http://hackmd.io/@alternative-rvb/javascript-objet-json)
- [La fonction **fetch()**](http://hackmd.io/@alternative-rvb/javascript-fetch)

## Stocker des données de manière persistante - localStorage 

`localStorage` est une fonctionnalité du Web Storage API qui permet de stocker des données de manière persistante dans le navigateur web. Contrairement aux cookies, les données stockées dans `localStorage` ne sont pas automatiquement envoyées au serveur avec chaque requête. Elles restent disponibles même après la fermeture du navigateur ou le redémarrage de l'ordinateur.

`localStorage` est très utile pour stocker des informations telles que les préférences de l'utilisateur, les paniers d'achat, les données de connexion, ou toute autre donnée pertinente pour une application web. Les avantages de `localStorage` sont :

1. **Simplicité d'utilisation** : `localStorage` offre une API simple et facile à utiliser pour stocker et récupérer des données.
    
2. **Persistence des données** : Les données stockées dans `localStorage` restent disponibles même après la fermeture du navigateur ou la réouverture de la page.
    
3. **Stockage côté client** : Les données sont stockées localement sur l'ordinateur de l'utilisateur, ce qui réduit la charge du serveur en évitant de stocker toutes les données du côté du serveur.
    
4. **Capacité de stockage** : `localStorage` offre généralement une capacité de stockage de plusieurs méga-octets, ce qui permet de stocker des quantités significatives de données.
    

Cependant, il est important de noter que `localStorage` a certaines limitations. Il ne peut stocker que des valeurs sous forme de chaînes de caractères, ce qui signifie que si vous souhaitez stocker des objets JavaScript, vous devrez les convertir en JSON à l'aide des fonctions `JSON.stringify()` et `JSON.parse()`.

De plus, les données stockées dans `localStorage` sont partagées entre tous les scripts du même domaine, il est donc important de faire preuve de prudence lors du stockage de données sensibles et de prendre en compte les problématiques de sécurité liées à l'accès à ces données.

En résumé, `localStorage` est une fonctionnalité pratique pour stocker des données de manière persistante côté client dans le navigateur, offrant une solution simple pour la persistance des informations et améliorant l'expérience utilisateur des applications web.

_Exemples_

voici quelques exemples simples sur l'utilisation de `localStorage` en JavaScript.

1. Stocker une chaîne de caractères dans `localStorage` :

```javascript
// Stocker une chaîne de caractères dans localStorage
localStorage.setItem("username", "Alice");

// Récupérer la valeur stockée dans localStorage
const username = localStorage.getItem("username");
console.log(username); // affiche "Alice"

```

2. Stocker un objet JSON dans `localStorage` :

```javascript
// Stocker un objet JSON dans localStorage
const user = {
  username: "Bob",
  email: "bob@example.com",
  age: 30
};
localStorage.setItem("user", JSON.stringify(user));

// Récupérer la valeur stockée dans localStorage et la parser en tant qu'objet JSON
const userString = localStorage.getItem("user");
const userObject = JSON.parse(userString);
console.log(userObject); // affiche {username: "Bob", email: "bob@example.com", age: 30}

```

3. Supprimer une valeur de `localStorage` :

```javascript
// Supprimer une valeur de localStorage
localStorage.removeItem("username");

// Vérifier si une clé existe dans localStorage
if (localStorage.getItem("username") === null) {
  console.log("La clé 'username' n'existe pas dans localStorage");
}

```

4. Effacer tout le contenu de `localStorage` :

```javascript
// Effacer tout le contenu de localStorage
localStorage.clear();

```

Notez que `localStorage` est limité à environ 5 à 10 Mo de données selon le navigateur et le système d'exploitation utilisé. Il est également important de noter que les données stockées dans `localStorage` sont disponibles pour tous les scripts du même domaine, il est donc important de ne pas y stocker des données sensibles.

## Class et Objet

En JavaScript, les classes sont des structures de programmation qui permettent d'organiser et de regrouper des données et des comportements liés dans un objet. Les classes sont introduites dans **ECMAScript 2015 (ES6)** et elles sont utilisées pour implémenter l'orientation objet en JavaScript.

Les classes permettent de créer des objets avec des propriétés et des méthodes. Les propriétés sont des variables qui contiennent des données, tandis que les méthodes sont des fonctions qui peuvent être appelées sur ces objets. Les classes fournissent un moyen de définir la structure des objets et les relations entre eux

Les classes permettent également d'utiliser l'héritage, ce qui signifie qu'une classe peut hériter des propriétés et des méthodes d'une autre classe. Cela permet de réutiliser du code et de créer des relations entre les objets qui partagent des fonctionnalités communes

En somme, les classes en JavaScript permettent de structurer le code de manière plus organisée et plus modulaire, en offrant un moyen de regrouper des données et des comportements liés dans des objets, ainsi qu'en permettant l'héritage pour réutiliser et partager du code entre les objets.

Voici un exemple de classe:

```javascript
class Person {
    static count = 0;
    #genre;

    constructor(firstName, lastName, age, taille, genre) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
        this._taille = taille;
        this.#genre = "M";
        // Valable si on utilise pas de getter/setter
        this.eyeColor = "blue";
        Person.count++;
    }
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get age() {
        return this._age;
    }
    get taille() {
        return this._taille;
    }
    get genre() {
        return this.#genre;
    }
    // get eyeColor() {
    //     return this.eyeColor; // Si on n'utilise pas underscore cela retourne erreur "Maximum call stack size exceeded"
    // }
    set firstName(firstName) {
        this._firstName = firstName;
    }
    set lastName(lastName) {
        this._lastName = lastName;
    }
    set age(age) {
        this._age = age;
    }
    set taille(taille) {
        this._taille = taille;
    }
    set genre(genre) {
        this.#genre = genre;
    }
    // set eyeColor(eyeColor) {
    //     this.eyeColor = eyeColor;
    // }
    getAllProps = () => {
        return `${this.firstName} ${this.lastName} ${this.age}${this.taille}`;
    };
}

const person1 = new Person("John","Doe",33,175,"m");
const person2 = new Person("Jane", "Doe", 28,169,"f");

console.log(Person.count); // 2

const person3 = new Person("Jojo", "Doe", 6, 90, "m");
console.log(person3.genre); // m
person3.genre = "f";
console.log(person3.genre); // f
console.log(person3.#genre); // Uncaught SyntaxError: Private field '#genre' must be declared in an enclosing class 
```

Lorsqu'on veut instancier un objet avec des valeurs pour ses propriétés, il est nécessaire que la **classe** possède une méthode **constructor**. En d'autres termes, la méthode constructor permet d'initialiser l'objet.

Les **getters** et **setters** sont des méthodes qui permettent d'accéder à des propriétés définies.
- La méthode `get` est utilisée pour récupérer la valeur d'une propriété
- La méthode `set` permet de la modifier.

Pour les getters et setters, il est courant de préfixer le nom de la propriété par un underscore `_`, par exemple : `_firstName`.

**Les propriétés statiques** sont des propriétés qui appartiennent à la classe elle-même plutôt qu'à une instance de la classe. Elles peuvent être utilisées pour stocker des données qui doivent être partagées entre toutes les instances de la classe. Les propriétés statiques sont définies en utilisant le mot-clé `static`.

Dans cet exemple, la propriété `count` est une propriété statique de la classe Person. Elle est utilisée pour stocker le nombre d'instances de la classe Person créées jusqu'à présent. Chaque fois qu'une nouvelle instance est créée, la propriété count est incrémentée de 1.

**Les propriétés privées** sont des propriétés qui ne sont pas accessibles en dehors de la classe. Elles sont définies en utilisant le préfixe #. Les propriétés privées ne peuvent être lues ou écrites que par des méthodes à l'intérieur de la classe.

Dans cet exemple, la propriété `genre` est définie comme une propriété privée en utilisant le préfixe `#`. La méthode `get genre()` est utilisée pour lire la valeur de la propriété `genre`, et la méthode set age() est utilisée pour modifier sa valeur. Ces méthodes sont les seules méthodes autorisées à accéder à la propriété #age.

La classe est un modèle pour la création d'objets, et le prototype est un objet qui contient des propriétés et des méthodes qui peuvent être héritées par les objets. Chaque objet créé à partir d'une classe hérite des propriétés et des méthodes de son prototype, ainsi que de ceux de ses ancêtres dans la chaîne de prototypes.

Lorsqu'on utilise l'héritage avec la méthode `extend`, les propriétés et les méthodes des prototypes sont d'abord appelées dans le prototype le plus proche de l'objet, puis dans les ancêtres. Cela signifie que si une méthode est définie dans la classe enfant et dans la classe parent, la méthode de la classe enfant sera appelée en premier, même si la méthode de la classe parent a le même nom. Cela est possible grâce à la chaîne de prototypes, qui permet aux classes enfants d'hériter des propriétés et des méthodes de leurs classes parentes.

En résumé, la classe est le modèle pour créer des objets, tandis que le prototype est un objet qui contient des propriétés et des méthodes qui peuvent être héritées par les objets créés à partir de cette classe. Les objets héritent des propriétés et des méthodes de leur prototype et de la chaîne de prototypes de leur classe parente. L'héritage permet aux classes enfants d'hériter des propriétés et des méthodes de leurs classes parentes, ce qui permet de réutiliser et de partager du code entre les objets.



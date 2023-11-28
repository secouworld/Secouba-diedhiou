function showhide() {
    // Récupérer l'élément <article> ajouté dynamiquement
    var articleElement = document.getElementById("dynamic-article");

    // Vérifier si l'élément existe
    if (!articleElement) {
        // Créer un nouvel élément <article>
        articleElement = document.createElement("article");
        articleElement.id = "dynamic-article";
        articleElement.textContent = "L'important n'est pas la chute, mais l'atterrissage.";

        // Ajouter l'élément <article> au corps de la page
        document.body.appendChild(articleElement);
    } else {
        // Supprimer l'élément <article> s'il existe
        articleElement.parentNode.removeChild(articleElement);
    }
}

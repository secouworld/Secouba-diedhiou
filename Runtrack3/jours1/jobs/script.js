function jourtravaille(date) {
    // Liste des jours fériés de l'année 2020
    const joursFeries2020 = [
      new Date(2020, 0, 1),  // Jour de l'an
      new Date(2020, 3, 13), // Lundi de Pâques
      new Date(2020, 4, 1),  // Fête du Travail
      new Date(2020, 4, 8),  // Victoire 1945
      new Date(2020, 4, 21), // Ascension
      new Date(2020, 5, 1),  // Lundi de Pentecôte
      new Date(2020, 6, 14), // Fête nationale
      new Date(2020, 7, 15), // Assomption
      new Date(2020, 10, 1), // Toussaint
      new Date(2020, 10, 11),// Armistice 1918
      new Date(2020, 11, 25) // Noël
    ];
  
    // Obtenir le jour, le mois et l'année de la date fournie
    const jour = date.getDate();
    const mois = date.getMonth() + 1; // Les mois sont indexés de 0 à 11
    const annee = date.getFullYear();
    /*
    if (joursFeries2020.some(ferie => ferie.getTime() === date.getTime())) {
      console.log(`Le ${jour} ${mois} ${annee} est un jour férié.`);
    }
    */
   for (let index = 0; index < joursFeries2020.length; index++) {
//   console.log(joursFeries2020[index]);
    if (joursFeries2020[index].getTime()== date.getTime()) {
        return(joursFeries2020[index]+ " jours ferie")
        
    }
   }
    // Vérifier si la date est un samedi ou un dimanche
    if (date.getDay() === 0 || date.getDay() === 6) {
      return(`Non, ${jour} ${mois} ${annee} est un week-end.`);
    }
    // Si la date n'est ni un jour férié ni un week-end, alors c'est un jour travaillé
   
      return(`Oui, ${jour} ${mois} ${annee} est un jour travaillé.`);
  }
  
  // Exemple d'utilisation avec la date d'aujourd'hui
  const aujourdHui = new Date();

  console.log(  jourtravaille(new Date( 2023 , 11 , 25)));
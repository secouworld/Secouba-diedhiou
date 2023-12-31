-- Récupérer le nom de l'étage ayant la salle avec la plus grande capacité
SELECT etage.nom AS nom_etage, salles.nom AS `Biggest Room`, salles.capacite
FROM salles
JOIN etage ON salles.id_etage = etage.id
ORDER BY salles.capacite DESC
LIMIT 1;

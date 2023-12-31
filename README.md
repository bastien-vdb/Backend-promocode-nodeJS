# Backend-promocode-nodeJS

## Description
Ce projet est un backend développé en Node.js avec Express et TypeScript pour la gestion de codes promotionnels. Il permet de créer, gérer et vérifier l'utilisation de codes promotionnels en fonction des restrictions définies. Lorsque les utilisateurs respectent toutes les exigences du code promotionnel, ils bénéficient de la réduction associée.

## Specificité
Utilisation de typescript + esModule (ECMASCRIPT) format (voir les différents fichiers de configurations).

## Installation
Clonez ce dépôt sur votre machine locale.
Assurez-vous d'avoir Node.js et npm installés sur votre machine.
Exécutez la commande suivante pour installer les dépendances du projet :
npm install

## A compléter
Tests + ajout d'un linter

## Configuration
Renommez le fichier .env.example en .env.
Modifiez les variables d'environnement dans le fichier .env selon vos besoins.
Utilisation
Exécutez la commande suivante pour lancer le serveur de développement :
npm run start (qui lancera nodemon)

Le serveur sera accessible à l'adresse http://localhost:3000.
API Endpoints
GET /create: Crée le code promotionnel en récupèrant les restrictions dans le corps(body) de la requête au format JSON.
GET /valide: Récupère dans le corps (body) de la requête les restrictions d'un code promotionnel au format JSON et retourne l'avantage ou la raison du refus.

## Tests
Ce projet utilise Jest pour les tests unitaires. Vous pouvez exécuter les tests en utilisant la commande suivante :

npm run test
Contribution
Les contributions sont les bienvenues ! Si vous souhaitez contribuer à ce projet, veuillez suivre ces étapes :

Forker ce dépôt.
Créez une branche pour votre fonctionnalité (git checkout -b feature/AmazingFeature).
Committez vos modifications (git commit -m 'Ajouter une fonctionnalité étonnante').
Poussez vers la branche principale (git push origin feature/AmazingFeature).
Ouvrez une Pull Request.

## Licence
Ce projet est sous licence MIT. Veuillez consulter le fichier LICENSE pour plus d'informations.

## Contact
Bastien - bastien.deboisrolin@gmail.com
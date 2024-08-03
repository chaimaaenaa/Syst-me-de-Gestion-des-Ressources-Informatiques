Système de Gestion des Ressources Informatiques
Description
Le Système de Gestion des Ressources Informatiques (SGRI) est une application développée pour faciliter la gestion des équipements informatiques au sein d'une organisation. Le système permet de suivre l'état des équipements, de gérer les pannes, et de traiter les tickets de support technique. Il fournit également des outils pour la génération de rapports et de statistiques afin d'évaluer les performances et l'état des équipements.

Fonctionnalités
Gestion des Équipements Informatiques :

Ajouter, modifier, et supprimer des équipements.
Voir une liste complète des équipements avec leur état actuel.
Suivi des Pannes :

Signaler une panne sur un équipement.
Enregistrer et suivre les pannes détectées.
Consulter l'historique des pannes pour chaque équipement.
Gestion des Tickets de Support :

Créer et suivre des tickets de support.
Attribuer les tickets aux techniciens disponibles.
Voir l'état des tickets de support et gérer leur résolution.
Rapports et Statistiques (Bonus) :

Notifications pour les tickets en attente.
Statistiques sur les pannes pour identifier les tendances.
Rapports sur l'état des équipements et les performances du service de support.
Technologies Utilisées
Backend : Spring Boot, Spring Data JPA, Spring Security
Frontend : Angular 16
Base de données : PostgreSQL / MySQL
Test unitaire : JUnit
Conteneurisation : Docker
Prérequis
Avant de démarrer, assurez-vous d'avoir les éléments suivants installés :

JDK 17 (ou version compatible)
Maven
Node.js et npm
PostgreSQL ou MySQL
Docker (si vous utilisez la conteneurisation)
Installation
Backend
Clonez le dépôt du backend :

bash
Copier le code
git clone https://github.com/ton-utilisateur/sgri-backend.git
cd sgri-backend
Configurez les paramètres de la base de données dans src/main/resources/application.properties.

Construisez et lancez l'application :

bash
Copier le code
mvn clean install
mvn spring-boot:run
Frontend
Clonez le dépôt du frontend :

bash
Copier le code
git clone https://github.com/ton-utilisateur/sgri-frontend.git
cd sgri-frontend
Installez les dépendances :

bash
Copier le code
npm install
Lancez l'application Angular :

bash
Copier le code
ng serve
Utilisation
Accédez à l'interface utilisateur à l'adresse suivante :

arduino
Copier le code
http://localhost:4200
Utilisez les fonctionnalités disponibles pour gérer les équipements, signaler des pannes, et créer des tickets de support.

Tests
Pour tester l'API, vous pouvez utiliser Postman. Les tests unitaires pour le backend sont réalisés avec JUnit et peuvent être exécutés via Maven :

bash
Copier le code
mvn test
Documentation
Les diagrammes UML et autres documents importants sont disponibles dans le dossier docs.

Contribution
Les contributions sont les bienvenues ! Veuillez soumettre un pull request pour ajouter des fonctionnalités ou corriger des bugs.

Contact
Pour toute question ou problème, vous pouvez contacter :

Nom : MEKAYSSI CHAIMAA
Email :mekayssichaimaaenaa@gmail.com

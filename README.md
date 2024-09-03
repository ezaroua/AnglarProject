Description
Il s'agit d'une application simple de gestion des tâches construite avec Angular. L'application permet aux utilisateurs de gérer leurs tâches en ajoutant, mettant à jour et supprimant des tâches. Chaque tâche comporte un titre, une description, un statut et une date de création.

Fonctionnalités
Ajouter une tâche : Les utilisateurs peuvent ajouter de nouvelles tâches avec un titre, une description et un statut.
Voir les tâches : La liste de toutes les tâches est affichée sur l'interface.
Mettre à jour une tâche : Les utilisateurs peuvent mettre à jour les détails d'une tâche existante.
Supprimer une tâche : Les utilisateurs peuvent supprimer des tâches de la liste.
Filtrer par statut : Les tâches peuvent être filtrées en fonction de leur statut (par exemple, A_FAIRE, EN_COURS, TERMINEE).
Technologies Utilisées
Angular : Framework front-end utilisé pour construire l'application.
TypeScript : Superset de JavaScript utilisé pour le développement des applications Angular.
RxJS : Bibliothèque utilisée pour la programmation réactive avec des Observables dans Angular.
SCSS : Utilisé pour le stylage de l'application.
Installation
Pour exécuter ce projet localement, suivez ces étapes :

Clonez le dépôt :

bash
Copy code
git clone https://github.com/votre-nom-utilisateur/task-management.git
Accédez au répertoire du projet :

bash
Copy code
cd task-management
Installez les dépendances :

Assurez-vous d'avoir Node.js et npm installés.

bash
Copy code
npm install
Lancez l'application :

Démarrez le serveur de développement :

bash
Copy code
ng serve
Ouvrez l'application :

Ouvrez votre navigateur et accédez à http://localhost:4200/.


Utilisation
Ajouter une Tâche
Accédez au formulaire "Ajouter une tâche".
Entrez les informations requises (Titre, Description, Statut).
Cliquez sur le bouton "Ajouter une tâche" pour ajouter la tâche à la liste.
Supprimer une Tâche
Chaque tâche dans la liste a un bouton "Supprimer".
Cliquez sur le bouton "Supprimer" à côté de la tâche que vous souhaitez supprimer.
Mettre à jour une Tâche
Cliquez sur une tâche dans la liste pour l'éditer.
Modifiez les détails de la tâche et enregistrez les modifications.
Filtrer les Tâches
Utilisez la liste déroulante du statut pour filtrer les tâches en fonction de leur statut actuel.
Dépannage
Le serveur de développement ne démarre pas : Assurez-vous que toutes les dépendances sont installées correctement en exécutant npm install. Si le problème persiste, essayez de supprimer le dossier node_modules et de réinstaller les dépendances avec npm install.
Les modifications ne sont pas reflétées : Si les modifications dans le code ne sont pas reflétées dans le navigateur, essayez de vider le cache du navigateur ou de redémarrer le serveur de développement Angular.
Contribuer
Les contributions sont les bienvenues ! Si vous trouvez des bugs ou souhaitez ajouter de nouvelles fonctionnalités, n'hésitez pas à ouvrir un ticket ou à soumettre une pull request.

Licence
Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.

Contact
Pour toute question ou suggestion, veuillez contacter ezarouali.abdel@agmail.com.
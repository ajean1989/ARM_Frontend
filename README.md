# Projet

Projet de fin d'étude de la certification Simplon : Développeur en Intelligence Artificielle. 
Ce projet est répartie en 5 thèmes: 
- Collecte des données : via SQL et NoSQL.
- Veille technologique sur un modèle d'IA : modèle de détection d'objet.
- Entrainement d' un modèle de détection d'objet, monitoring du modèle, déploiement continue et exposition via une API. 
- Interface web, pipeline CI/CD.
- Monitoring de l'application.

Ce projet est architecturé en micro-services. 3 repositories sont comoposés de plusieurs containers docker indépendants les uns des autres.  

# Application 
Interface graphique qui affiche les pages suivantes :
- Page de présentation.
- page où l'on peut tester le modèle (Gradio).
- Page où l'on peut téléchager le dataset.
- Page de monitoring MLFlow
- Page de monitoring de l'API (Grafana)
- Page de visualisation des logs et de gestions des incidents.
Authentifaction par cookie. 

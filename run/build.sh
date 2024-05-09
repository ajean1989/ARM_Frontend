# Permet au code de s'arrêter et renvoyer une erreur en cas de problème. 
set -e

cd ./nextjs
# Pour lancer les container en local il faut utiliser "test" pour résoudre "traefik" et faire communique les container entre eux sinon on résout 127.0.0.1*

docker compose -f compose.yml -f compose.prod.yml up --build --force-recreate -d

cd ./nextjs
# Pour lancer les container en local il faut utiliser "test" pour résoudre "traefik" et faire communique les container entre eux sinon on résout 127.0.0.1*

docker compose -f compose.yml -f compose.dev.yml up --build --force-recreate -d

cd ..
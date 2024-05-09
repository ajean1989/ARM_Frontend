docker rm -f $(docker ps -aq)

docker network create --driver=bridge production-network
timeout /t 5

cd ARM_Starter

cd Mariadb 
docker compose  -f compose.yml -f compose.test.yml up --build -d

cd ..

cd Mongodb 
docker compose up --build -d

cd ..
cd Traefik
docker compose -f compose.yml -f compose.test.yml up --build -d 


cd ..

cd ..

cd ARM_IA
cd api
docker compose -f compose.yml -f compose.test.yml up --build -d --force-recreate
cd ..

cd mlflow
docker compose -f compose.yml -f compose.test.yml up --build -d --force-recreate
cd ..


cd gradio
docker compose -f compose.yml -f compose.test.yml up --build -d --force-recreate
cd ..

cd ..

cd ARM_Backend
cd ./api
docker compose -f compose.yml -f compose.test.yml up --build -d

cd ..

cd ..

cd ARM_Frontend

cd ./nextjs

docker compose -f compose.yml -f compose.dev.yml up --build --force-recreate -d

cd ..
cd ..
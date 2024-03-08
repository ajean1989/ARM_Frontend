FROM node:20.11.1

WORKDIR /nextjs

COPY ./nextjs/ .

RUN npm install -g npm@10.5.0 && npm i 

EXPOSE 3000

# CMD ["npm", "run", "dev"]

CMD ["sleep", "infinity"]

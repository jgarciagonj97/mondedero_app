FROM node:12.18.2-alpine
WORKDIR '/app'
COPY package.json .
RUN npm install
EXPOSE 3000
COPY . .
CMD ["npm", "start"]
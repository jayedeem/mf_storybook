FROM node:alpine
WORKDIR /front
COPY package.json package-lock.json * /
COPY ./ ./
RUN npm install
CMD ["npm", "run", "start"]
